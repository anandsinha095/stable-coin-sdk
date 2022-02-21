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
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeUtil = exports.readUtil = void 0;
var ethers_1 = require("ethers");
var axios_1 = __importDefault(require("axios"));
var contract_details_1 = require("./contract_details");
/**
 * Infura utils for read function
 * @param {string} infuraLink
 */
var readUtil = /** @class */ (function () {
    function readUtil(infuraLink) {
        var _this = this;
        this.getUserAddress = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var myWeb3, accounts, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        myWeb3 = new ethers_1.ethers.providers.Web3Provider(window.ethereum);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, myWeb3.listAccounts()];
                    case 2:
                        accounts = _a.sent();
                        resolve(accounts && accounts[0]);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        reject(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        this.provider = new ethers_1.ethers.providers.JsonRpcProvider(infuraLink);
    }
    readUtil.prototype.getChainId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var network;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.provider.getNetwork()];
                    case 1:
                        network = _a.sent();
                        return [2 /*return*/, network.chainId];
                }
            });
        });
    };
    readUtil.prototype.readContractFunction = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var chainId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getChainId()];
                    case 1:
                        chainId = _a.sent();
                        return [2 /*return*/, (token &&
                                new ethers_1.ethers.Contract(contract_details_1.contractDetails[token].address[chainId], contract_details_1.contractDetails[token].abi, this.provider))];
                }
            });
        });
    };
    readUtil.prototype.userAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getUserAddress];
            });
        });
    };
    readUtil.prototype.balanceOf = function (token, userAddress) {
        if (userAddress === void 0) { userAddress = null; }
        return __awaiter(this, void 0, void 0, function () {
            var readFunction, balance, formatedBalance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!userAddress) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.userAddress()];
                    case 1:
                        userAddress = _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.readContractFunction(token)];
                    case 3:
                        readFunction = _a.sent();
                        return [4 /*yield*/, readFunction.balanceOf(userAddress)];
                    case 4:
                        balance = _a.sent(), formatedBalance = ethers_1.ethers.utils.formatEther(balance);
                        return [2 /*return*/, formatedBalance];
                }
            });
        });
    };
    readUtil.prototype.balaceOfEther = function () {
        return __awaiter(this, void 0, void 0, function () {
            var myWeb3, 
            //@ts-ignore
            balance, currentETHBalance, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        myWeb3 = new ethers_1.ethers.providers.Web3Provider(window.ethereum);
                        _b = (_a = myWeb3).getBalance;
                        return [4 /*yield*/, this.userAddress()];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                    case 2:
                        balance = _c.sent(), currentETHBalance = ethers_1.ethers.utils.formatUnits(balance, 18);
                        return [2 /*return*/, currentETHBalance];
                }
            });
        });
    };
    readUtil.prototype.stakedAmount = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var readFunction, balance, formatedBalance, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.readContractFunction(token)];
                    case 1:
                        readFunction = _c.sent();
                        _b = (_a = readFunction).getLockAmount;
                        return [4 /*yield*/, this.userAddress()];
                    case 2: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                    case 3:
                        balance = _c.sent(), formatedBalance = ethers_1.ethers.utils.formatEther(balance);
                        return [2 /*return*/, formatedBalance];
                }
            });
        });
    };
    readUtil.prototype.latestPrice = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var readFunction, latestPrice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readContractFunction(token)];
                    case 1:
                        readFunction = _a.sent();
                        return [4 /*yield*/, readFunction.latestPrice()];
                    case 2:
                        latestPrice = _a.sent();
                        return [2 /*return*/, ethers_1.ethers.utils.formatEther(latestPrice['price'])];
                }
            });
        });
    }; //ethUsdLatestPrice
    readUtil.prototype.getCoingeckoPrice = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            return [2 /*return*/, res.data.ethereum.usd];
                        }
                        else {
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    readUtil.prototype.conversionContract = function (token, from, to, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var readFunction, type, asset_current_price, data, _a, amountEnter, assetOut;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.readContractFunction(token)];
                    case 1:
                        readFunction = _b.sent();
                        type = from + "_to_" + to;
                        _a = type;
                        switch (_a) {
                            case 'eth_to_usm': return [3 /*break*/, 2];
                            case 'usm_to_eth': return [3 /*break*/, 3];
                            case 'eth_to_asset': return [3 /*break*/, 4];
                            case 'asset_to_eth': return [3 /*break*/, 6];
                        }
                        return [3 /*break*/, 8];
                    case 2: return [2 /*return*/, readFunction.ethToUsm(amount, true)];
                    case 3: return [2 /*return*/, readFunction.usmToEth(amount, true)];
                    case 4: return [4 /*yield*/, readFunction.fumPrice(0)];
                    case 5:
                        data = _b.sent();
                        asset_current_price = ethers_1.ethers.BigNumber.from(Number(data).toString());
                        return [2 /*return*/, (
                            //@ts-ignore
                            ethers_1.ethers.BigNumber.from(ethers_1.ethers.utils.parseEther(String(amount))) /
                                asset_current_price)];
                    case 6: return [4 /*yield*/, readFunction.fumPrice(1)];
                    case 7:
                        data = _b.sent();
                        asset_current_price = ethers_1.ethers.BigNumber.from(Number(data).toString());
                        amountEnter = Number(ethers_1.ethers.utils.parseEther(String(amount))).toString(), assetOut = ethers_1.ethers.utils.formatEther(String((Number(asset_current_price) * Number(amountEnter)) / 1e18));
                        //@ts-ignore
                        return [2 /*return*/, assetOut == 0.0 ? 0 : assetOut];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    readUtil.prototype.conversionOfEther = function (token, from, to, amount) {
        if (amount === void 0) { amount = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var data, weiAmount, balance, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!(to === 'asset' || from === 'asset')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.conversionContract(token, from, to, amount)];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            return [2 /*return*/, data];
                        }
                        else {
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        weiAmount = ethers_1.ethers.utils.parseEther(String(amount)), balance = void 0;
                        return [4 /*yield*/, this.conversionContract(token, from, to, weiAmount)];
                    case 3:
                        data = _a.sent();
                        if (data) {
                            balance = ethers_1.ethers.utils.formatUnits(data, 18);
                            return [2 /*return*/, balance == 0.0 ? 0 : balance];
                        }
                        else {
                        }
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_3 = _a.sent();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    readUtil.prototype.decimalPlaces = function (numberString, decimals) {
        if (decimals === void 0) { decimals = 2; }
        return Number(Number.parseFloat(numberString).toFixed(decimals)).toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
    };
    readUtil.prototype.getDebtRatio = function () {
        return __awaiter(this, void 0, void 0, function () {
            var readFunction, ratio, decimalString, num;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readContractFunction('usmView')];
                    case 1:
                        readFunction = _a.sent();
                        return [4 /*yield*/, readFunction.debtRatio()];
                    case 2:
                        ratio = _a.sent(), decimalString = ethers_1.ethers.utils.formatEther(ratio), num = Number.parseFloat(decimalString) * 100;
                        return [2 /*return*/, this.decimalPlaces(num.toString())];
                }
            });
        });
    };
    readUtil.prototype.getEthPool = function () {
        return __awaiter(this, void 0, void 0, function () {
            var readFunction, ratio;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readContractFunction('usmView')];
                    case 1:
                        readFunction = _a.sent();
                        return [4 /*yield*/, readFunction.ethPool()];
                    case 2:
                        ratio = _a.sent();
                        return [2 /*return*/, ethers_1.ethers.utils.formatEther(ratio)];
                }
            });
        });
    };
    readUtil.prototype.bidAskAdjustment = function () {
        return __awaiter(this, void 0, void 0, function () {
            var readFunction, ratio;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readContractFunction('usmView')];
                    case 1:
                        readFunction = _a.sent();
                        return [4 /*yield*/, readFunction.bidAskAdjustment()];
                    case 2:
                        ratio = _a.sent();
                        return [2 /*return*/, ethers_1.ethers.utils.formatEther(ratio)];
                }
            });
        });
    };
    readUtil.prototype.getCollateral = function () {
        return __awaiter(this, void 0, void 0, function () {
            var readFunction, collateral, formattedData, coingeckoPrice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readContractFunction('usm')];
                    case 1:
                        readFunction = _a.sent();
                        return [4 /*yield*/, readFunction.ethPool()];
                    case 2:
                        collateral = _a.sent(), formattedData = ethers_1.ethers.utils.formatEther(collateral);
                        return [4 /*yield*/, this.getCoingeckoPrice()];
                    case 3:
                        coingeckoPrice = _a.sent();
                        return [2 /*return*/, coingeckoPrice * formattedData];
                }
            });
        });
    };
    readUtil.prototype.getEthBuffer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var readFunction, ethBuffer, formattedData, coingeckoPrice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readContractFunction('usmView')];
                    case 1:
                        readFunction = _a.sent();
                        return [4 /*yield*/, readFunction.ethBuffer(false)];
                    case 2:
                        ethBuffer = _a.sent(), formattedData = ethers_1.ethers.utils.formatEther(ethBuffer);
                        return [4 /*yield*/, this.getCoingeckoPrice()];
                    case 3:
                        coingeckoPrice = _a.sent();
                        return [2 /*return*/, coingeckoPrice * formattedData];
                }
            });
        });
    };
    readUtil.prototype.totalSupply = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var readFunction, total;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readContractFunction(token)];
                    case 1:
                        readFunction = _a.sent();
                        return [4 /*yield*/, readFunction.totalSupply()];
                    case 2:
                        total = _a.sent();
                        return [2 /*return*/, this.decimalPlaces(ethers_1.ethers.utils.formatEther(total), 4)];
                }
            });
        });
    };
    return readUtil;
}());
exports.readUtil = readUtil;
/**
 * Ether utils for Write function
 * @param {string} infuraLink
 */
var writeUtil = /** @class */ (function () {
    function writeUtil(infuraLink) {
        var _this = this;
        this.verifyTransaction = function (hash, resolve) {
            _this.provider.waitForTransaction(hash).then(function (result) {
                if (result.status) {
                    resolve({ msg: 'success', hash: hash });
                }
                else {
                    resolve({ msg: 'failed', hash: hash });
                }
            });
        };
        this.readUtil = new readUtil(infuraLink);
        this.provider = new ethers_1.ethers.providers.Web3Provider(window.ethereum);
        this.signer = this.provider.getSigner();
        if (!this.isMetamastConnected())
            throw new Error("You have to install MetaMask !");
    }
    writeUtil.prototype.isMetamastConnected = function () {
        if (window.ethereum) {
            // web3 = new web3(window.ethereum)
            try {
                return window.ethereum.enable() ? true : false;
            }
            catch (e) {
                throw new Error(e);
            }
        }
        else if (window.web3) {
            return true;
        }
        else {
            return false;
        }
    };
    writeUtil.prototype.getAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var address;
            return __generator(this, function (_a) {
                address = this.signer.getAddress();
                return [2 /*return*/, address];
            });
        });
    };
    writeUtil.prototype.getChainId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var network;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.provider.getNetwork()];
                    case 1:
                        network = _a.sent();
                        return [2 /*return*/, network.chainId];
                }
            });
        });
    };
    writeUtil.prototype.writeConUtil = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var chainId, daiContract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getChainId()];
                    case 1:
                        chainId = _a.sent(), daiContract = new ethers_1.ethers.Contract(contract_details_1.contractDetails[token].address[chainId], contract_details_1.contractDetails[token].abi, this.signer);
                        return [2 /*return*/, daiContract];
                }
            });
        });
    };
    writeUtil.prototype.sendToAddress = function (token, _address, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var weiAmount, Receiversaddress, readFunction, data, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        weiAmount = ethers_1.ethers.utils.parseEther(amount), Receiversaddress = ethers_1.ethers.utils.isAddress(_address);
                        if (!Receiversaddress) {
                        }
                        return [4 /*yield*/, this.writeConUtil(token)];
                    case 1:
                        readFunction = _a.sent();
                        return [4 /*yield*/, readFunction.transfer(_address, String(weiAmount))];
                    case 2:
                        data = _a.sent();
                        if (data) {
                            return [2 /*return*/, data];
                        }
                        else {
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _a.sent();
                        throw new Error(e_4);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    writeUtil.prototype.validateUsmInput = function (amount, availableBalance) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!amount || amount == 0) {
                    throw Number(availableBalance) == 0
                        ? Error("You don't have sufficient balance")
                        : Error("Please Enter Amount.");
                }
                if (Number(amount) > Number(availableBalance)) {
                    throw new Error("You don't have sufficient balance");
                }
                return [2 /*return*/, true];
            });
        });
    };
    writeUtil.prototype.getGasDetails = function (weiamount, usm, typeOfTransaction, token, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var ether_balance, balance, gasPrice, gasLimit, defaultMsg, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.readUtil.balaceOfEther()];
                    case 1:
                        ether_balance = _c.sent();
                        return [4 /*yield*/, this.readUtil.balanceOf(token)];
                    case 2:
                        balance = _c.sent();
                        return [4 /*yield*/, this.provider.getGasPrice()];
                    case 3:
                        gasPrice = _c.sent();
                        if (!(token === 'usdao')) return [3 /*break*/, 9];
                        _a = typeOfTransaction;
                        switch (_a) {
                            case 'usdao_buy': return [3 /*break*/, 4];
                            case 'usdao_sell': return [3 /*break*/, 6];
                        }
                        return [3 /*break*/, 8];
                    case 4:
                        this.validateUsmInput(amount, ether_balance);
                        return [4 /*yield*/, usm.estimateGas.mint(this.getAddress(), 0, {
                                value: weiamount
                            })];
                    case 5:
                        gasLimit = _c.sent();
                        return [3 /*break*/, 9];
                    case 6:
                        this.validateUsmInput(amount, balance);
                        return [4 /*yield*/, usm.estimateGas.burn(this.getAddress(), this.getAddress(), weiamount, 0)];
                    case 7:
                        gasLimit = _c.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        defaultMsg = 'You have entered wrong Transaction type';
                        _c.label = 9;
                    case 9:
                        if (!(token === 'asset')) return [3 /*break*/, 15];
                        _b = typeOfTransaction;
                        switch (_b) {
                            case 'asset_buy': return [3 /*break*/, 10];
                            case 'asset_sell': return [3 /*break*/, 12];
                        }
                        return [3 /*break*/, 14];
                    case 10:
                        this.validateUsmInput(amount, ether_balance);
                        return [4 /*yield*/, usm.estimateGas.fund(this.getAddress(), 0, {
                                value: weiamount
                            })];
                    case 11:
                        gasLimit = _c.sent();
                        return [3 /*break*/, 15];
                    case 12:
                        this.validateUsmInput(amount, balance);
                        return [4 /*yield*/, usm.estimateGas.defund(this.getAddress(), this.getAddress(), weiamount, 0)];
                    case 13:
                        gasLimit = _c.sent();
                        return [3 /*break*/, 15];
                    case 14:
                        defaultMsg = 'You have entered wrong Transaction type';
                        _c.label = 15;
                    case 15:
                        gasLimit = String(Number(gasLimit));
                        return [2 /*return*/, { gasLimit: gasLimit, gasPrice: gasPrice, defaultMsg: defaultMsg }];
                }
            });
        });
    };
    writeUtil.prototype.transactionFun = function (type, weiAmount, gasPrice, gasLimit, usm) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (type) {
                    case 'usdao_buy':
                        return [2 /*return*/, usm.mint(this.getAddress(), 0, {
                                value: weiAmount,
                                gasPrice: gasPrice,
                                gasLimit: gasLimit
                            })];
                    case 'usdao_sell':
                        return [2 /*return*/, usm.burn(this.getAddress(), this.getAddress(), weiAmount, 0, {
                                gasPrice: gasPrice,
                                gasLimit: gasLimit
                            })];
                    case 'asset_buy':
                        return [2 /*return*/, usm.fund(this.getAddress(), 0, {
                                value: weiAmount,
                                gasPrice: gasPrice,
                                gasLimit: gasLimit
                            })];
                    case 'asset_sell':
                        return [2 /*return*/, usm.defund(this.getAddress(), this.getAddress(), weiAmount, 0, {
                                gasPrice: gasPrice,
                                gasLimit: gasLimit
                            })];
                }
                return [2 /*return*/];
            });
        });
    };
    writeUtil.prototype.transaction = function (token, amount, transactionType) {
        return __awaiter(this, void 0, void 0, function () {
            var usm, weiAmount, typeOfTransaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.writeConUtil('usm')];
                    case 1:
                        usm = _a.sent(), weiAmount = ethers_1.ethers.utils.parseEther(amount), typeOfTransaction = token + "_" + transactionType;
                        // const tranDetails = await sendTransaction(token, amount, transactionType)
                        return [2 /*return*/, this.sendTransaction(typeOfTransaction, token, amount, transactionType, weiAmount, usm)];
                }
            });
        });
    };
    writeUtil.prototype.buyUsdao = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.transaction('usdao', amount, 'buy')];
            });
        });
    };
    writeUtil.prototype.sellUsdao = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.transaction('usdao', amount, 'sell')];
            });
        });
    };
    writeUtil.prototype.sellAsset = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.transaction('asset', amount, 'sell')];
            });
        });
    };
    writeUtil.prototype.buyAsset = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.transaction('asset', amount, 'buy')];
            });
        });
    };
    writeUtil.prototype.sendTransaction = function (typeOfTransaction, token, amount, transactionType, weiAmount, usm) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var _a, gasLimit, gasPrice, defaultMsg;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, this.getGasDetails(weiAmount, usm, typeOfTransaction, token, amount)];
                                case 1:
                                    _a = _b.sent(), gasLimit = _a.gasLimit, gasPrice = _a.gasPrice, defaultMsg = _a.defaultMsg;
                                    if (!defaultMsg) {
                                        this.transactionFun(typeOfTransaction, weiAmount, gasPrice, gasLimit, usm)
                                            .then(function (data) {
                                            resolve(data);
                                        })
                                            .catch(function (error) {
                                            if (error.code === 4001) {
                                                //resolve({msg:"User denied transaction signature."})
                                            }
                                            if (error.code === -32603) {
                                                var gasIncreaseBy = Math.pow(10, gasLimit.length - 2);
                                                gasLimit = Number(gasLimit) + gasIncreaseBy;
                                                _this.sendTransaction(typeOfTransaction, token, amount, transactionType, weiAmount, usm);
                                            }
                                        });
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    writeUtil.prototype.transferUsdao = function (address, amount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendToAddress('usm', address, amount)];
            });
        });
    };
    writeUtil.prototype.transferAsset = function (address, amount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendToAddress('fum', address, amount)];
            });
        });
    };
    return writeUtil;
}());
exports.writeUtil = writeUtil;
//# sourceMappingURL=tradingSdk.js.map