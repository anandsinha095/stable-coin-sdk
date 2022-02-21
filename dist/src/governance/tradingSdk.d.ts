import { ethers } from 'ethers';
declare global {
    interface Window {
        ethereum: any;
        web3: any;
    }
}
/**
 * Infura utils for read function
 * @param {string} infuraLink
 */
declare class readUtil {
    provider: any;
    constructor(infuraLink: any);
    getChainId(): Promise<any>;
    readContractFunction(token: any): Promise<ethers.Contract>;
    getUserAddress: Promise<unknown>;
    userAddress(): Promise<unknown>;
    balanceOf(token: any, userAddress?: any): Promise<string>;
    balaceOfEther(): Promise<string>;
    stakedAmount(token: any): Promise<string>;
    latestPrice(token: any): Promise<string>;
    getCoingeckoPrice(): Promise<any>;
    conversionContract(token: any, from: any, to: any, amount: any): Promise<any>;
    conversionOfEther(token: any, from: any, to: any, amount?: number): Promise<any>;
    decimalPlaces(numberString: any, decimals?: number): string;
    getDebtRatio(): Promise<string>;
    getEthPool(): Promise<string>;
    bidAskAdjustment(): Promise<string>;
    getCollateral(): Promise<number>;
    getEthBuffer(): Promise<number>;
    totalSupply(token: any): Promise<string>;
}
/**
 * Ether utils for Write function
 * @param {string} infuraLink
 */
declare class writeUtil {
    readUtil: any;
    provider: any;
    signer: any;
    constructor(infuraLink: any);
    isMetamastConnected(): boolean;
    getAddress(): Promise<any>;
    getChainId(): Promise<any>;
    writeConUtil(token: any): Promise<ethers.Contract>;
    sendToAddress(token: any, _address: any, amount: any): Promise<any>;
    validateUsmInput(amount: any, availableBalance: any): Promise<boolean>;
    getGasDetails(weiamount: any, usm: any, typeOfTransaction: any, token: any, amount: any): Promise<{
        gasLimit: any;
        gasPrice: any;
        defaultMsg: any;
    }>;
    verifyTransaction: (hash: any, resolve: any) => void;
    transactionFun(type: any, weiAmount: any, gasPrice: any, gasLimit: any, usm: any): Promise<any>;
    transaction(token: any, amount: any, transactionType: any): Promise<unknown>;
    buyUsdao(amount: string): Promise<unknown>;
    sellUsdao(amount: string): Promise<unknown>;
    sellAsset(amount: string): Promise<unknown>;
    buyAsset(amount: string): Promise<unknown>;
    sendTransaction(typeOfTransaction: string, token: string, amount: string, transactionType: string, weiAmount: any, usm: any): Promise<unknown>;
    transferUsdao(address: any, amount: any): Promise<any>;
    transferAsset(address: any, amount: any): Promise<any>;
}
export { readUtil, writeUtil };
//# sourceMappingURL=tradingSdk.d.ts.map