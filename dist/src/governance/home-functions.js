var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAsset = exports.sendUsdao = exports.sellAsset = exports.buyAsset = exports.sellUsdao = exports.buyUsdao = exports.loadAllFees = exports.fetchInitialWeb3Data = exports.getMetaMask = void 0;
var utils_1 = require("./utils");
var contract_details_1 = require("./contract_details");
var ethers_1 = require("ethers");
var axios_1 = __importDefault(require("axios"));
var Stake = contract_details_1.contractDetails.stake;
var provider = new ethers_1.ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/" + process.env.INFURA_KEY);
var getCoingeckoPrice = function () { return __awaiter(_this, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.default.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data.ethereum.usd];
        }
    });
}); };
var fetchStakeAmountFn = function () { return __awaiter(_this, void 0, void 0, function () {
    var provider, abi, network, address, contract, signer, loggedInAddress, chk, unchk, claim, StakeContract;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                provider = new ethers_1.ethers.providers.Web3Provider(window.ethereum);
                abi = Stake.abi;
                return [4 /*yield*/, provider.getNetwork()];
            case 1:
                network = _a.sent();
                address = Stake.address[network.chainId];
                contract = new ethers_1.ethers.Contract(address, abi, provider);
                return [4 /*yield*/, provider.getSigner()];
            case 2:
                signer = _a.sent();
                return [4 /*yield*/, signer.getAddress()];
            case 3:
                loggedInAddress = _a.sent();
                return [4 /*yield*/, contract.queryFilter('Lock')];
            case 4:
                chk = _a.sent();
                return [4 /*yield*/, contract.queryFilter('Unlock')];
            case 5:
                unchk = _a.sent();
                return [4 /*yield*/, contract.queryFilter('Claim')];
            case 6:
                claim = _a.sent();
                StakeContract = new ethers_1.ethers.Contract(address, abi, signer);
                return [2 /*return*/, { chk: chk, loggedInAddress: loggedInAddress, StakeContract: StakeContract, unchk: unchk, claim: claim }];
        }
    });
}); };
var fetchStaked = function () { return __awaiter(_this, void 0, void 0, function () {
    var _a, chk, loggedInAddress, unchk, totalStakedAmount, i, ofAddress, value, rF, lStakeId, j, unStakeId;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetchStakeAmountFn()];
            case 1:
                _a = _b.sent(), chk = _a.chk, loggedInAddress = _a.loggedInAddress, unchk = _a.unchk, totalStakedAmount = 0;
                for (i = 0; i < chk.length; i++) {
                    if (chk[i]) {
                        ofAddress = chk[i].args['holder'];
                        if (ofAddress == loggedInAddress) {
                            value = ethers_1.ethers.utils.formatEther(String(chk[i].args['_value']));
                            rF = parseFloat(value).toFixed(3);
                            totalStakedAmount = totalStakedAmount + parseFloat(rF);
                            lStakeId = parseInt(chk[i].args['StakeId']);
                            for (j = 0; j < unchk.length; j++) {
                                unStakeId = parseInt(unchk[j].args['_stakId']);
                                if (lStakeId == unStakeId) {
                                    totalStakedAmount = totalStakedAmount - parseFloat(rF);
                                }
                            }
                        }
                    }
                }
                return [2 /*return*/, totalStakedAmount];
        }
    });
}); };
var getMetaMask = function () {
    var providerMetaMask = new ethers_1.ethers.providers.Web3Provider(window.ethereum);
    return providerMetaMask;
};
exports.getMetaMask = getMetaMask;
var getChainId = function () { return __awaiter(_this, void 0, void 0, function () {
    var network;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, provider.getNetwork()];
            case 1:
                network = _a.sent();
                return [2 /*return*/, network.chainId];
        }
    });
}); };
var readContractFunction = function (token) { return __awaiter(_this, void 0, void 0, function () {
    var chainId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getChainId()];
            case 1:
                chainId = _a.sent();
                return [2 /*return*/, new ethers_1.ethers.Contract(contract_details_1.contractDetails[token].address[chainId], contract_details_1.contractDetails[token].abi, provider)];
        }
    });
}); };
var writeContractFunction = function (token) { return __awaiter(_this, void 0, void 0, function () {
    var mProviderInner, signer, chainId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                mProviderInner = exports.getMetaMask();
                return [4 /*yield*/, mProviderInner.getSigner()];
            case 1:
                signer = _a.sent();
                return [4 /*yield*/, getChainId()];
            case 2:
                chainId = _a.sent();
                return [2 /*return*/, new ethers_1.ethers.Contract(contract_details_1.contractDetails[token].address[chainId], contract_details_1.contractDetails[token].abi, signer)];
        }
    });
}); };
var fetchInitialWeb3Data = function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var usmContract, fumContract, myWeb3, accounts, balance, usmbBalance, usmBalanceFormatted, etherBalance, etherBalanceFormatted, assetBalance, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, readContractFunction('usm')];
                        case 1:
                            usmContract = _a.sent();
                            return [4 /*yield*/, readContractFunction('fum')];
                        case 2:
                            fumContract = _a.sent();
                            myWeb3 = new ethers_1.ethers.providers.Web3Provider(window.ethereum);
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 8, , 9]);
                            return [4 /*yield*/, myWeb3.listAccounts()];
                        case 4:
                            accounts = _a.sent();
                            return [4 /*yield*/, fumContract.balanceOf(accounts[0])];
                        case 5:
                            balance = _a.sent();
                            return [4 /*yield*/, usmContract.balanceOf(accounts[0])];
                        case 6:
                            usmbBalance = _a.sent();
                            usmBalanceFormatted = ethers_1.ethers.utils.formatUnits(usmbBalance, 18);
                            return [4 /*yield*/, myWeb3.getBalance(accounts[0])];
                        case 7:
                            etherBalance = _a.sent();
                            etherBalanceFormatted = ethers_1.ethers.utils.formatEther(etherBalance);
                            assetBalance = ethers_1.ethers.utils.formatUnits(balance, 18);
                            resolve({ assetBalance: assetBalance, usmBalanceFormatted: usmBalanceFormatted, etherBalanceFormatted: etherBalanceFormatted });
                            return [3 /*break*/, 9];
                        case 8:
                            err_1 = _a.sent();
                            reject(err_1);
                            return [3 /*break*/, 9];
                        case 9: return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
exports.fetchInitialWeb3Data = fetchInitialWeb3Data;
var stakedPromise = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
    var stakedBalance;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchStaked()];
            case 1:
                stakedBalance = _a.sent();
                resolve(stakedBalance);
                return [2 /*return*/];
        }
    });
}); });
var debtPromise = function (usmViewContract) {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var ratio, debtRatio;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, usmViewContract.debtRatio()];
                case 1:
                    ratio = _a.sent();
                    debtRatio = ethers_1.ethers.utils.formatEther(ratio);
                    resolve(debtRatio);
                    return [2 /*return*/];
            }
        });
    }); });
};
var marketPricePromise = function (usmContract) {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var marketPrice;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, usmContract.latestPrice()];
                case 1:
                    marketPrice = _a.sent();
                    resolve(Number(marketPrice) / 10e17);
                    return [2 /*return*/];
            }
        });
    }); });
};
var totalBufferPromise = function (usmViewContract) {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var coingecko, ethBuffer, formattedBuffer, totalBuffer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getCoingeckoPrice()];
                case 1:
                    coingecko = _a.sent();
                    return [4 /*yield*/, usmViewContract.ethBuffer(false)];
                case 2:
                    ethBuffer = _a.sent();
                    formattedBuffer = ethers_1.ethers.utils.formatEther(ethBuffer);
                    totalBuffer = formattedBuffer * coingecko;
                    resolve(totalBuffer);
                    return [2 /*return*/];
            }
        });
    }); });
};
var totalCollateralPromise = function (usmContract) {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var collateral, coingecko, formattedCollateral, totalCollateral;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, usmContract.ethPool()];
                case 1:
                    collateral = _a.sent();
                    return [4 /*yield*/, getCoingeckoPrice()];
                case 2:
                    coingecko = _a.sent();
                    formattedCollateral = ethers_1.ethers.utils.formatEther(collateral);
                    totalCollateral = formattedCollateral * coingecko;
                    resolve(totalCollateral);
                    return [2 /*return*/];
            }
        });
    }); });
};
var usmTotalSupplyPromise = function (usmContract) {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var usmTotalSupply, formatedUsmSupply;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, usmContract.totalSupply()];
                case 1:
                    usmTotalSupply = _a.sent();
                    formatedUsmSupply = utils_1.decimalPlaces(ethers_1.ethers.utils.formatEther(usmTotalSupply), 4);
                    resolve(formatedUsmSupply);
                    return [2 /*return*/];
            }
        });
    }); });
};
var fumTotSUpPromise = function (fumTotalSupplyFum) {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var fumTotalSupply, formatedFumSupply;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fumTotalSupplyFum()];
                case 1:
                    fumTotalSupply = _a.sent();
                    formatedFumSupply = utils_1.decimalPlaces(ethers_1.ethers.utils.formatEther(fumTotalSupply), 4);
                    resolve(formatedFumSupply);
                    return [2 /*return*/];
            }
        });
    }); });
};
var govSupplyPromise = function (compSaleContract, tokenSaleContract) {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var govSupplyValue, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = Number;
                    return [4 /*yield*/, compSaleContract.totalSupply()];
                case 1:
                    _b = _a.apply(void 0, [_d.sent()]);
                    _c = Number;
                    return [4 /*yield*/, tokenSaleContract.currentTotalTokens()];
                case 2:
                    govSupplyValue = ((_b -
                        _c.apply(void 0, [_d.sent()])) /
                        10e17).toLocaleString();
                    resolve(govSupplyValue);
                    return [2 /*return*/];
            }
        });
    }); });
};
var loadAllFees = function () { return __awaiter(_this, void 0, void 0, function () {
    var tokenSaleContract, compSaleContract, usmContract, usmViewContract, fumTotalSupplyFum, pricePromises;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, writeContractFunction('tokenSale')];
            case 1:
                tokenSaleContract = _a.sent();
                return [4 /*yield*/, writeContractFunction('comp')];
            case 2:
                compSaleContract = _a.sent();
                return [4 /*yield*/, readContractFunction('usm')];
            case 3:
                usmContract = _a.sent();
                return [4 /*yield*/, readContractFunction('usmView')];
            case 4:
                usmViewContract = _a.sent();
                return [4 /*yield*/, readContractFunction('fum')];
            case 5:
                fumTotalSupplyFum = (_a.sent()).totalSupply;
                return [4 /*yield*/, Promise.all([
                        stakedPromise,
                        debtPromise(usmViewContract),
                        marketPricePromise(usmContract),
                        totalBufferPromise(usmViewContract),
                        totalCollateralPromise(usmContract),
                        usmTotalSupplyPromise(usmContract),
                        fumTotSUpPromise(fumTotalSupplyFum),
                        govSupplyPromise(compSaleContract, tokenSaleContract)
                    ])];
            case 6:
                pricePromises = _a.sent();
                return [2 /*return*/, {
                        supply: {
                            govSupply: pricePromises[7],
                            assetSupply: pricePromises[6],
                            usmSupply: pricePromises[5]
                        },
                        prices: {
                            stakedBalance: pricePromises[0],
                            debtRatio: pricePromises[1],
                            marketPrice: pricePromises[2],
                            totalBuffer: pricePromises[3],
                            totalCollateral: pricePromises[4]
                        }
                    }];
        }
    });
}); };
exports.loadAllFees = loadAllFees;
var buyUsdao = function (amount) { return __awaiter(_this, void 0, void 0, function () {
    var provider, signer, usm, mProvider, weiAmount, address, gasLimit, gasPrice, sendtransaction;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!amount || amount == '0') {
                    throw new Error('Please enter a valid amount.');
                }
                return [4 /*yield*/, new ethers_1.ethers.providers.Web3Provider(window.ethereum)];
            case 1:
                provider = _a.sent();
                return [4 /*yield*/, provider.getSigner()];
            case 2:
                signer = _a.sent();
                return [4 /*yield*/, writeContractFunction('usm')
                    // Will wait for metamask confirmation
                ];
            case 3:
                usm = _a.sent();
                mProvider = exports.getMetaMask();
                weiAmount = ethers_1.ethers.utils.parseEther(amount);
                return [4 /*yield*/, signer.getAddress()];
            case 4:
                address = _a.sent();
                return [4 /*yield*/, usm.estimateGas.mint(address, 0, { value: weiAmount })];
            case 5:
                gasLimit = _a.sent();
                return [4 /*yield*/, mProvider.getGasPrice()];
            case 6:
                gasPrice = _a.sent();
                sendtransaction = function (gasPrice, gasLimit) {
                    var currentGasLimit = String(Number(gasLimit));
                    usm
                        .mint(address, 0, {
                        value: weiAmount,
                        gasPrice: gasPrice,
                        gasLimit: currentGasLimit
                    })
                        .then(function (data) {
                        return data && data.hash && verifyTransaction(data.hash, 'usm');
                    })
                        .catch(function (error) {
                        if (error.code === -32603) {
                            var gasIncreaseBy = Math.pow(10, currentGasLimit.length - 2);
                            currentGasLimit = Number(currentGasLimit) + gasIncreaseBy;
                            sendtransaction(gasPrice, currentGasLimit);
                        }
                        throw new Error(error);
                        // dispatch(metamaskError(error))
                    });
                };
                sendtransaction(gasPrice, gasLimit);
                return [2 /*return*/];
        }
    });
}); };
exports.buyUsdao = buyUsdao;
var sellUsdao = function (amount, balance) { return __awaiter(_this, void 0, void 0, function () {
    var provider, signer, usm, e_1, mProvider, weiAmount_1, address_1, gasLimit, gasPrice, sendtransaction_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, new ethers_1.ethers.providers.Web3Provider(window.ethereum)];
            case 1:
                provider = _a.sent();
                return [4 /*yield*/, provider.getSigner()];
            case 2:
                signer = _a.sent();
                return [4 /*yield*/, writeContractFunction('usm')];
            case 3:
                usm = _a.sent();
                _a.label = 4;
            case 4:
                _a.trys.push([4, 6, , 7]);
                return [4 /*yield*/, isMetamastConnected];
            case 5:
                _a.sent();
                return [3 /*break*/, 7];
            case 6:
                e_1 = _a.sent();
                throw new Error('You have to install Metamask !');
            case 7:
                if (!amount || amount == '0') {
                    if (Number(balance) == 0) {
                        throw new Error("You don't have sufficient balance.");
                    }
                    else {
                        throw new Error('Please enter USDAO amount.');
                    }
                }
                if (!(Number(amount) > Number(balance))) return [3 /*break*/, 8];
                throw new Error("You don't have sufficient balance.");
            case 8:
                mProvider = exports.getMetaMask();
                weiAmount_1 = ethers_1.ethers.utils.parseEther(String(amount));
                return [4 /*yield*/, signer.getAddress()];
            case 9:
                address_1 = _a.sent();
                return [4 /*yield*/, usm.estimateGas.burn(address_1, weiAmount_1, 0)];
            case 10:
                gasLimit = _a.sent();
                return [4 /*yield*/, mProvider.getGasPrice()];
            case 11:
                gasPrice = _a.sent();
                sendtransaction_1 = function (gasPrice, gasLimit) {
                    var currentGasLimit = String(Number(gasLimit));
                    usm
                        .burn(address_1, weiAmount_1, 0, {
                        gasPrice: gasPrice,
                        gasLimit: currentGasLimit
                    })
                        .then(function (data) {
                        return data && data.hash && verifyTransaction(data.hash, 'usm');
                    })
                        .catch(function (error) {
                        if (error.code === -32603) {
                            var gasIncreaseBy = Math.pow(10, currentGasLimit.length - 2);
                            currentGasLimit = Number(currentGasLimit) + gasIncreaseBy;
                            sendtransaction_1(gasPrice, currentGasLimit);
                        }
                        throw new Error(error);
                    });
                };
                sendtransaction_1(gasPrice, gasLimit);
                _a.label = 12;
            case 12: return [2 /*return*/];
        }
    });
}); };
exports.sellUsdao = sellUsdao;
var buyAsset = function (amount, balance) { return __awaiter(_this, void 0, void 0, function () {
    var e_2, mProvider, weiAmount_2, provider_1, signer, address_2, usm_1, gasLimit, gasPrice, sendtransaction_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, isMetamastConnected];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                throw new Error('You have to install metamask.');
            case 3:
                if (!amount || amount == '0') {
                    if (Number(balance) == 0) {
                        throw new Error("You don't have sufficient balance.");
                    }
                    else {
                        throw new Error('Please enter ETH amount.');
                    }
                }
                if (!(Number(amount) > Number(balance))) return [3 /*break*/, 4];
                throw new Error("You don't have sufficient balance.");
            case 4:
                mProvider = exports.getMetaMask();
                weiAmount_2 = ethers_1.ethers.utils.parseEther(amount);
                return [4 /*yield*/, new ethers_1.ethers.providers.Web3Provider(window.ethereum)];
            case 5:
                provider_1 = _a.sent();
                return [4 /*yield*/, provider_1.getSigner()];
            case 6:
                signer = _a.sent();
                return [4 /*yield*/, signer.getAddress()];
            case 7:
                address_2 = _a.sent();
                return [4 /*yield*/, writeContractFunction('usm')];
            case 8:
                usm_1 = _a.sent();
                return [4 /*yield*/, usm_1.estimateGas.fund(address_2, 0, {
                        value: weiAmount_2
                    })];
            case 9:
                gasLimit = _a.sent();
                return [4 /*yield*/, mProvider.getGasPrice()];
            case 10:
                gasPrice = _a.sent();
                sendtransaction_2 = function (gasPrice, gasLimit) {
                    var currentGasLimit = String(Number(gasLimit));
                    usm_1
                        .fund(address_2, 0, {
                        value: weiAmount_2,
                        gasPrice: gasPrice,
                        gasLimit: currentGasLimit
                    })
                        .then(function (data) {
                        return data && data.hash && verifyTransaction(data.hash, 'fum');
                    })
                        .catch(function (error) {
                        if (error.code === -32603) {
                            var gasIncreaseBy = Math.pow(10, currentGasLimit.length - 2);
                            currentGasLimit = Number(currentGasLimit) + gasIncreaseBy;
                            sendtransaction_2(gasPrice, currentGasLimit);
                        }
                        throw new Error(error);
                    });
                };
                sendtransaction_2(gasPrice, gasLimit);
                _a.label = 11;
            case 11: return [2 /*return*/];
        }
    });
}); };
exports.buyAsset = buyAsset;
var sellAsset = function (amount, balance) { return __awaiter(_this, void 0, void 0, function () {
    var e_3, provider_2, mProvider, usmViewContract, ratio, formattedRatio, debtRatio, weiAmount_3, signer, address_3, usm_2, gasLimit, gasPrice, sendtransaction_3, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(amount, balance, 'amount and balance');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, isMetamastConnected];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                e_3 = _a.sent();
                throw new Error('You have to install metamask.');
            case 4:
                if (!amount || amount == '0') {
                    if (Number(balance) == 0) {
                        throw new Error("You don't have sufficient balance.");
                    }
                    else {
                        throw new Error('Please enter ASSET amount.');
                    }
                }
                if (!(Number(amount) > Number(balance))) return [3 /*break*/, 5];
                throw new Error("You don't have sufficient balance.");
            case 5:
                if (!(Number(amount) == Number(balance))) return [3 /*break*/, 6];
                throw new Error('You can sell max amount only.');
            case 6: return [4 /*yield*/, new ethers_1.ethers.providers.Web3Provider(window.ethereum)];
            case 7:
                provider_2 = _a.sent();
                mProvider = exports.getMetaMask();
                return [4 /*yield*/, readContractFunction('usmView')];
            case 8:
                usmViewContract = _a.sent();
                return [4 /*yield*/, usmViewContract.debtRatio()];
            case 9:
                ratio = _a.sent(), formattedRatio = ethers_1.ethers.utils.formatEther(ratio), debtRatio = utils_1.toPercentage(formattedRatio);
                if (Number(debtRatio) > 80) {
                    throw new Error('Debt ratio is too high, please try again after sometime.');
                }
                _a.label = 10;
            case 10:
                _a.trys.push([10, 16, , 17]);
                weiAmount_3 = ethers_1.ethers.utils.parseEther(amount);
                return [4 /*yield*/, provider_2.getSigner()];
            case 11:
                signer = _a.sent();
                return [4 /*yield*/, signer.getAddress()];
            case 12:
                address_3 = _a.sent();
                return [4 /*yield*/, writeContractFunction('usm')];
            case 13:
                usm_2 = _a.sent();
                return [4 /*yield*/, usm_2.estimateGas.defund(address_3, weiAmount_3, 0)];
            case 14:
                gasLimit = _a.sent();
                return [4 /*yield*/, mProvider.getGasPrice()];
            case 15:
                gasPrice = _a.sent();
                sendtransaction_3 = function (gasPrice, gasLimit) {
                    console.log('in send');
                    var currentGasLimit = String(Number(gasLimit));
                    usm_2
                        .defund(address_3, weiAmount_3, 0, {
                        gasPrice: gasPrice,
                        gasLimit: currentGasLimit
                    })
                        .then(function (data) {
                        console.log('in then data', data);
                        return data && data.hash && verifyTransaction(data.hash, 'fum');
                    })
                        .catch(function (error) {
                        if (error.code === -32603) {
                            var gasIncreaseBy = Math.pow(10, currentGasLimit.length - 2);
                            currentGasLimit = Number(currentGasLimit) + gasIncreaseBy;
                            sendtransaction_3(gasPrice, currentGasLimit);
                        }
                        throw new Error(error);
                    });
                };
                sendtransaction_3(gasPrice, gasLimit);
                return [3 /*break*/, 17];
            case 16:
                error_1 = _a.sent();
                throw new Error(error_1.message.indexOf('Not allowed during prefund') !== -1
                    ? 'Not allowed during prefund'
                    : 'Something went wrong.');
            case 17: return [2 /*return*/];
        }
    });
}); };
exports.sellAsset = sellAsset;
var sendUsdao = function (address, amount, balance) { return __awaiter(_this, void 0, void 0, function () {
    var e_4, usm, weiAmount, Receiversaddress;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, isMetamastConnected];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_4 = _a.sent();
                throw new Error('You have to install metamask.');
            case 3:
                if (address === undefined) {
                    throw new Error('Please enter address');
                }
                if (Number(amount) === 0 || amount === undefined) {
                    throw new Error('Please enter USDAO amount.');
                }
                if (!(Number(amount) > Number(balance))) return [3 /*break*/, 4];
                throw new Error('You dont have sufficient USDAO Balance' + balance);
            case 4: return [4 /*yield*/, writeContractFunction('usm')
                // will wait for metamask confirmation
            ];
            case 5:
                usm = _a.sent();
                weiAmount = ethers_1.ethers.utils.parseEther(amount);
                Receiversaddress = ethers_1.ethers.utils.isAddress(address);
                window.usm = usm;
                if (!Receiversaddress) {
                    throw new Error('Invalid Address');
                }
                usm
                    .transfer(address, String(weiAmount))
                    .then(function (data) {
                    data && data.hash && verifyTransaction(data.hash);
                })
                    .catch(function (error) { return console.log(error.toString()); });
                _a.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.sendUsdao = sendUsdao;
var sendAsset = function (address, amount, balance) { return __awaiter(_this, void 0, void 0, function () {
    var e_5, weiAmount, Receiversaddress, fum;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, isMetamastConnected];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_5 = _a.sent();
                throw new Error('You have to install metamask.');
            case 3:
                // const balance = Number(await metamaskFUM.balanceOf(await metamaskSigner.getAddress()));
                //var fum_balance = Number(ethers.utils.formatEther(String(balance)));
                if (address === undefined) {
                    throw new Error('Please enter address.');
                }
                if (Number(amount) == 0 || amount === undefined) {
                    throw new Error('Please enter ASSET amount.');
                }
                if (!(Number(amount) > Number(balance))) return [3 /*break*/, 4];
                throw new Error('You dont have sufficient ASSET Balance' + balance);
            case 4:
                weiAmount = ethers_1.ethers.utils.parseEther(amount);
                Receiversaddress = ethers_1.ethers.utils.isAddress(address);
                return [4 /*yield*/, writeContractFunction('fum')];
            case 5:
                fum = _a.sent();
                if (!Receiversaddress) {
                    throw new Error('Invalid Address.');
                }
                fum
                    .transfer(address, String(weiAmount))
                    .then(function (data) {
                    data && data.hash && verifyTransaction(data.hash);
                })
                    .catch(function (error) { return console.log(error.toString()); });
                _a.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.sendAsset = sendAsset;
var verifyTransaction = function (hash, token) {
    if (token === void 0) { token = ''; }
    // will send transaction to blockchain
    // check transaction
    var mProviderInner = exports.getMetaMask();
    mProviderInner.waitForTransaction(hash).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
        var totalSupply, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!result.status) return [3 /*break*/, 4];
                    if (!token) return [3 /*break*/, 3];
                    return [4 /*yield*/, readContractFunction(token)];
                case 1:
                    totalSupply = (_d.sent()).totalSupply;
                    _a = utils_1.decimalPlaces;
                    _c = (_b = ethers_1.ethers.utils).formatEther;
                    return [4 /*yield*/, totalSupply()];
                case 2: return [2 /*return*/, _a.apply(void 0, [_c.apply(_b, [_d.sent()]), 4])];
                case 3: return [3 /*break*/, 5];
                case 4: throw new Error("<p>Transaction failed!</p>\n\t\t\t<p><a target='_blank' href='https://rinkeby.etherscan.io/tx/" + hash + "'>View On Ether Scan</a> </p>");
                case 5: return [2 /*return*/];
            }
        });
    }); });
};
var isMetamastConnected = new Promise(function (resolve, reject) {
    if (window.ethereum) {
        new ethers_1.ethers.providers.Web3Provider(window.ethereum);
        try {
            window.ethereum.enable().then(function () {
                resolve(true);
            });
        }
        catch (e) {
            reject(false);
        }
    }
    // Legacy DApp Browsers
    else if (window.web3) {
        resolve(true);
    }
    // Non-DApp Browsers
    else {
        reject(false);
    }
});
//# sourceMappingURL=home-functions.js.map