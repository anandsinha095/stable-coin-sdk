const ethers = require("ethers");
const {usdao, asset, usmView} = require("./abi");

const readConnection = async (PROVIDER_URL='', NETWORK=42) => {
    try {
        let InfuraProvider, network, connerror;

       if(PROVIDER_URL) {
           network = NETWORK;
           InfuraProvider = new ethers.providers.JsonRpcProvider(PROVIDER_URL)
       } else connerror = "Could not connect to the blockchain!!";

       if(typeof connerror=="string" && connerror.length) {
            return {
                connerror,
                InfuraProvider: null,
            }
        }   

        return {
            connerror,
            InfuraProvider,
        } 

    } catch (error) {
        return {
            connerror:error.message,
            InfuraProvider: null,
        }
    }
}

const writeConnection = async (PROVIDER_URL='', NETWORK=42) => {
    try {
        let metamaskProvider, signer, accounts, metamaskNetwork,
         connerror, loggedInAccount;

        if (typeof window.ethereum !== 'undefined') {
            // Connect to RPC  
            try {
                accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                loggedInAccount = accounts[0];
                if (!ethers.utils.isAddress(loggedInAccount)) throw new Error('Invalid account');
            } catch (err) {
                if (err.code === 4001) {
                    // EIP-1193 userRejectedRequest error
                    // If this happens, the user rejected the connection request.
                    connerror = 'Please connect to MetaMask.';
                    console.log(connerror);
                } else {
                    console.error(err);
                }
            }

            // Connect to Metamask  
            metamaskProvider = new ethers.providers.Web3Provider(window.ethereum)

            signer = await metamaskProvider.getSigner(accounts[0])

            metamaskNetwork = await metamaskProvider.getNetwork();

            const {InfuraProvider} = await readConnection(PROVIDER_URL, NETWORK);

            const infura_network = await InfuraProvider.getNetwork();

            if (infura_network.chainId !== metamaskNetwork.chainId) {
                connerror = "Your Metamask wallet is not connected to " + network.name;
            }

        } else connerror = "Could not connect to any blockchain!!";

        if(typeof connerror=="string" && connerror.length) {
            return {
                InfuraProvider:null, 
                metamaskProvider:null, signer:null, 
                loggedInAccount:null, connerror,
                network:null
            }
        }

        return {
            metamaskProvider, signer, loggedInAccount, connerror,
            network: metamaskNetwork.chainId
        }

    } catch (e) {
        console.error(e);
        return {
            metamaskProvider:null, signer:null, 
            loggedInAccount:null, connerror,
            network:null
        }
    }

}

const handleAccountsChanged = async (accounts) => {
    if (typeof accounts !== "string" || accounts.length < 1) {
        accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    }
    
    if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        return false;
    } else if (accounts[0] !== loggedInAccount) {
        return accounts[0];
    }
}

const abi = {usdao, asset}; 

const init_usdao = async (provider) => {
    try { 

        const network = await provider.getNetwork();
        const signer = await provider.getSigner();
        const chainId = network.chainId;
        
        const usdaoContract = new ethers.Contract(
            usdao.address[chainId],
            usdao.abi,
            signer
        );

        return usdaoContract;

    } catch (error) {
        return error.message;
    }
}

const init_asset = async (provider) => {
    try {

        const network = await provider.getNetwork();
        const chainId = network.chainId;
        const signer = await provider.getSigner();
        
        const assetContract = new ethers.Contract(
            asset.address[chainId],
            asset.abi,
            signer
        );

        return assetContract;

    } catch (error) {
        return error.message;
    }
}

const init_usdaoview = async (provider) => {
    try {

        const network = await provider.getNetwork();
        const chainId = network.chainId;
        const signer = await provider.getSigner();
        
        const viewContract = new ethers.Contract(
            usmView.address[chainId],
            usmView.abi,
            signer
        );

        return viewContract;

    } catch (error) {
        return error.message;
    }
}

const loadContracts = async (PROVIDER_URL='', NETWORK=42) => {
    try {

        let response = {
            error: true,
            data: null,
            msg: '' 
        }

        if(typeof PROVIDER_URL !== 'string'
        ||  PROVIDER_URL.length < 1
        || typeof NETWORK !== 'number') {
            response.msg = "Please provide provider url and network id."
        }
        
        const readConn = await readConnection(PROVIDER_URL, NETWORK);

        if(typeof readConn=='object' && typeof readConn.connerror=='string' 
        && readConn.connerror.length>0) {
            response.msg = readConn.connerror;
            return response;
        }

        const writeConn = await writeConnection(PROVIDER_URL, NETWORK);

        if(typeof writeConn=='object' && typeof writeConn.connerror=='string' 
        && writeConn.connerror.length>0) {
            response.msg = writeConn.connerror;
            return response;
        }

        const USDAO_CONTRACT = await init_usdao(writeConn.metamaskProvider); 

        if(typeof USDAO_CONTRACT !=='object') {
            response.msg = USDAO_CONTRACT;
            return response;
        }

        const ASSET_CONTRACT = await init_asset(writeConn.metamaskProvider); 
        if(typeof ASSET_CONTRACT !=='object') {
            response.msg = ASSET_CONTRACT;
            return response;
        }

        const VIEW_CONTRACT = await init_usdaoview(writeConn.metamaskProvider);  
        if(typeof VIEW_CONTRACT !=='object') {
            response.msg = VIEW_CONTRACT;
            return response;
        }

        response.data = {
            USDAO_CONTRACT,
            ASSET_CONTRACT,
            VIEW_CONTRACT
        }

        response.error = false;
        return response;

    } catch (error) {
        return error.message;
    }
}


module.exports = {
    abi,
    readConnection,
    writeConnection, 
    loadContracts
}