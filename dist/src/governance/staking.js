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
exports.claimUsdao = exports.stakeUsdao = exports.fetchRewardPercent = exports.ClaimTable = exports.fetchStakedRewards = exports.fetchStakedAmount = exports.TVLAmount = exports.fetchAvailableBalance = void 0;
var contract_details_1 = require("./contract_details");
var ethers_1 = require("ethers");
var moment_1 = __importDefault(require("moment"));
var Stake = contract_details_1.contractDetails.stake, usm = contract_details_1.contractDetails.usm;
var fetchAvailableBalance = function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var myWeb3, accounts, accounteth, provider, network, abi, address, StakingContract, amount, AvailableBalance, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            myWeb3 = new ethers_1.ethers.providers.Web3Provider(window.ethereum);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 5, , 6]);
                            return [4 /*yield*/, myWeb3.listAccounts()];
                        case 2:
                            accounts = _a.sent();
                            if (typeof accounts !== 'object' || typeof accounts[0] !== 'string') {
                                console.error('No accounts set');
                                reject('No accounts set.');
                                return [2 /*return*/];
                            }
                            accounteth = accounts;
                            provider = new ethers_1.ethers.providers.Web3Provider(window.ethereum);
                            return [4 /*yield*/, provider.getNetwork()];
                        case 3:
                            network = _a.sent();
                            abi = Stake.abi;
                            address = Stake.address[network.chainId];
                            StakingContract = new ethers_1.ethers.Contract(address, abi, provider);
                            return [4 /*yield*/, StakingContract.getUSDAObalance(accounteth[0])];
                        case 4:
                            amount = _a.sent();
                            AvailableBalance = ethers_1.ethers.utils.formatUnits(amount, 18);
                            resolve(AvailableBalance);
                            return [3 /*break*/, 6];
                        case 5:
                            err_1 = _a.sent();
                            reject(err_1);
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
exports.fetchAvailableBalance = fetchAvailableBalance;
var TVLAmount = function () { return __awaiter(_this, void 0, void 0, function () {
    var provider, network, abi, address, StakingContract, tvlamount, tvlamountEath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                provider = new ethers_1.ethers.providers.Web3Provider(window.ethereum);
                return [4 /*yield*/, provider.getNetwork()];
            case 1:
                network = _a.sent();
                abi = Stake.abi;
                address = Stake.address[network.chainId];
                StakingContract = new ethers_1.ethers.Contract(address, abi, provider);
                return [4 /*yield*/, StakingContract.TVL()];
            case 2:
                tvlamount = _a.sent();
                tvlamountEath = ethers_1.ethers.utils.formatUnits(tvlamount, 18);
                return [2 /*return*/, tvlamountEath];
        }
    });
}); };
exports.TVLAmount = TVLAmount;
var fetchStakedAmount = function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var myWeb3, accounts, accounteth, provider, network, abi, address, StakingContract, amount, StakedAmount, err_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            myWeb3 = new ethers_1.ethers.providers.Web3Provider(window.ethereum);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 5, , 6]);
                            return [4 /*yield*/, myWeb3.listAccounts()];
                        case 2:
                            accounts = _a.sent();
                            if (typeof accounts !== 'object' || typeof accounts[0] !== 'string') {
                                reject('No acounts yet');
                                return [2 /*return*/, console.error('No accounts set')];
                            }
                            accounteth = accounts;
                            provider = new ethers_1.ethers.providers.Web3Provider(window.ethereum);
                            return [4 /*yield*/, provider.getNetwork()];
                        case 3:
                            network = _a.sent();
                            abi = Stake.abi;
                            address = Stake.address[network.chainId];
                            StakingContract = new ethers_1.ethers.Contract(address, abi, provider);
                            return [4 /*yield*/, StakingContract.getLockAmount(accounteth[0])];
                        case 4:
                            amount = _a.sent();
                            StakedAmount = ethers_1.ethers.utils.formatUnits(amount, 18);
                            resolve(StakedAmount);
                            return [3 /*break*/, 6];
                        case 5:
                            err_2 = _a.sent();
                            reject(err_2);
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
exports.fetchStakedAmount = fetchStakedAmount;
var fetchStakedRewards = function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var myWeb3, accounts, accounteth, provider, network, abi, address, StakingContract, amount, rewaredAmount, StakedAmount, err_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            myWeb3 = new ethers_1.ethers.providers.Web3Provider(window.ethereum);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 5, , 6]);
                            return [4 /*yield*/, myWeb3.listAccounts()];
                        case 2:
                            accounts = _a.sent();
                            if (typeof accounts !== 'object' || typeof accounts[0] !== 'string') {
                                reject('No accounts yet');
                                return [2 /*return*/, console.error('No accounts set')];
                            }
                            accounteth = accounts;
                            provider = new ethers_1.ethers.providers.Web3Provider(window.ethereum);
                            return [4 /*yield*/, provider.getNetwork()];
                        case 3:
                            network = _a.sent();
                            abi = Stake.abi;
                            address = Stake.address[network.chainId];
                            StakingContract = new ethers_1.ethers.Contract(address, abi, provider);
                            return [4 /*yield*/, StakingContract.calculateReward(accounteth[0])];
                        case 4:
                            amount = _a.sent();
                            rewaredAmount = amount[4];
                            StakedAmount = ethers_1.ethers.utils.formatUnits(rewaredAmount, 18);
                            resolve(StakedAmount);
                            return [3 /*break*/, 6];
                        case 5:
                            err_3 = _a.sent();
                            reject(err_3);
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
exports.fetchStakedRewards = fetchStakedRewards;
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
var ClaimTable = function () { return __awaiter(_this, void 0, void 0, function () {
    var _a, chk, loggedInAddress, StakeContract, unchk, claim, data_arr, totalStakedAmount, id, claim_enableTime, i, ofAddress, lStakeId, finalData, stakeStartTIme, claimedSatus, value, k, claimStakeId, data, rF, j, unStakeId;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetchStakeAmountFn()];
            case 1:
                _a = _b.sent(), chk = _a.chk, loggedInAddress = _a.loggedInAddress, StakeContract = _a.StakeContract, unchk = _a.unchk, claim = _a.claim;
                data_arr = [];
                totalStakedAmount = 0;
                id = [];
                i = 0;
                _b.label = 2;
            case 2:
                if (!(i < chk.length)) return [3 /*break*/, 6];
                if (!chk[i]) return [3 /*break*/, 5];
                ofAddress = chk[i].args['holder'];
                if (!(ofAddress == loggedInAddress)) return [3 /*break*/, 5];
                lStakeId = parseInt(chk[i].args['StakeId']);
                return [4 /*yield*/, StakeContract.calculateReward(lStakeId)];
            case 3:
                finalData = _b.sent();
                stakeStartTIme = moment_1.default
                    .unix(Number(chk[i].args['_startTime']))
                    .format('DD MMM YYYY');
                return [4 /*yield*/, StakeContract.getLockStatus(chk[i].args['StakeId'])];
            case 4:
                claimedSatus = _b.sent();
                value = ethers_1.ethers.utils.formatEther(String(chk[i].args['_value']));
                for (k = 0; k < claim.length; k++) {
                    claimStakeId = parseInt(claim[k].args['_stakId']);
                    if (lStakeId == claimStakeId) {
                        claim_enableTime = parseInt(claim[k].args._nextMinute);
                    }
                }
                data = {
                    address: chk[i].args['_of'],
                    amount: ethers_1.ethers.utils.formatEther(String(finalData.lockAmount)),
                    timeperiod: Number(finalData.noOfDays),
                    rewardtimeperiod: ethers_1.ethers.utils.formatEther(String(finalData.totalclaimedAmount)),
                    unixdate: Number(chk[i].args['_time']),
                    stakingType: chk[i].args['_stakingtype'],
                    startTime: stakeStartTIme,
                    StakeId: Number(chk[i].args['StakeId']),
                    claimed: !claimedSatus,
                    claim_enableTime: claim_enableTime
                };
                rF = parseFloat(value).toFixed(3);
                totalStakedAmount = totalStakedAmount + parseFloat(rF);
                for (j = 0; j < unchk.length; j++) {
                    unStakeId = parseInt(unchk[j].args['_stakId']);
                    if (lStakeId == unStakeId) {
                        totalStakedAmount = totalStakedAmount - parseFloat(rF);
                    }
                }
                data_arr.push(data);
                _b.label = 5;
            case 5:
                i++;
                return [3 /*break*/, 2];
            case 6: return [2 /*return*/, data_arr];
        }
    });
}); };
exports.ClaimTable = ClaimTable;
var fetchRewardPercent = function () { return __awaiter(_this, void 0, void 0, function () {
    var provider, network, abi, address, StakeContract, rewardPercentage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                provider = new ethers_1.ethers.providers.Web3Provider(window.ethereum);
                return [4 /*yield*/, provider.getNetwork()];
            case 1:
                network = _a.sent();
                abi = Stake.abi;
                address = Stake.address[network.chainId];
                StakeContract = new ethers_1.ethers.Contract(address, abi, provider);
                return [4 /*yield*/, StakeContract._reward()];
            case 2:
                rewardPercentage = _a.sent();
                return [2 /*return*/, Number(rewardPercentage)];
        }
    });
}); };
exports.fetchRewardPercent = fetchRewardPercent;
var stakeUsdao = function (date, amount, autoStaked, availablebalance) { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var myWeb3, accounts, weiAmount_1, provider_1, network, signer, abi, usmAbi, address, usmAddress, StakeContract_1, UsmContract, num, uniqueId_1, stakedate_1, transfer, allowance, weiAvailableAmount, e_1, e_2, err_4;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            myWeb3 = new ethers_1.ethers.providers.Web3Provider(window.ethereum);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 16, , 17]);
                            return [4 /*yield*/, myWeb3.listAccounts()];
                        case 2:
                            accounts = _a.sent();
                            weiAmount_1 = ethers_1.ethers.utils.parseEther(amount);
                            provider_1 = new ethers_1.ethers.providers.Web3Provider(window.ethereum);
                            return [4 /*yield*/, provider_1.getNetwork()];
                        case 3:
                            network = _a.sent();
                            return [4 /*yield*/, provider_1.getSigner()];
                        case 4:
                            signer = _a.sent();
                            abi = Stake.abi;
                            usmAbi = usm.abi;
                            address = Stake.address[network.chainId];
                            usmAddress = usm.address[network.chainId];
                            StakeContract_1 = new ethers_1.ethers.Contract(address, abi, signer);
                            UsmContract = new ethers_1.ethers.Contract(usmAddress, usmAbi, signer);
                            num = new Date().valueOf();
                            uniqueId_1 = String(num).slice(-7);
                            transfer = void 0, allowance = 0;
                            _a.label = 5;
                        case 5:
                            _a.trys.push([5, 9, , 10]);
                            return [4 /*yield*/, UsmContract.allowance(accounts[0], address)];
                        case 6:
                            allowance = _a.sent();
                            allowance = ethers_1.ethers.utils.formatUnits(allowance, 18);
                            if (!(Number(amount) > Number(allowance))) return [3 /*break*/, 8];
                            weiAvailableAmount = ethers_1.ethers.utils.parseEther(availablebalance);
                            return [4 /*yield*/, UsmContract.approve(address, weiAvailableAmount)];
                        case 7:
                            transfer = _a.sent();
                            _a.label = 8;
                        case 8: return [3 /*break*/, 10];
                        case 9:
                            e_1 = _a.sent();
                            if (e_1.code === 4001) {
                                reject('User denied transaction.');
                                throw new Error('User denied transaction.');
                            }
                            return [3 /*break*/, 10];
                        case 10:
                            if (!transfer) return [3 /*break*/, 11];
                            provider_1
                                .waitForTransaction(transfer.hash)
                                .then(function (result, error) { return __awaiter(_this, void 0, void 0, function () {
                                var e_3;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!result.status) return [3 /*break*/, 5];
                                            _a.label = 1;
                                        case 1:
                                            _a.trys.push([1, 3, , 4]);
                                            return [4 /*yield*/, StakeContract_1.lock(accounts[0], uniqueId_1, weiAmount_1, date, autoStaked)];
                                        case 2:
                                            stakedate_1 = _a.sent();
                                            return [3 /*break*/, 4];
                                        case 3:
                                            e_3 = _a.sent();
                                            if (e_3.code === 4001) {
                                                reject('User denied transaction.');
                                                throw new Error('User denied transaction.');
                                            }
                                            return [3 /*break*/, 4];
                                        case 4:
                                            if (stakedate_1) {
                                                provider_1
                                                    .waitForTransaction(stakedate_1.hash)
                                                    .then(function (result, error) {
                                                    if (!result.status) {
                                                        reject('Staked failed, please try again.');
                                                        throw new Error("Staked failed please try again!");
                                                    }
                                                })
                                                    .catch(function (e) {
                                                    reject('Staked failed please try again.');
                                                    throw new Error("Staked failed please try again!");
                                                });
                                            }
                                            else {
                                                reject('Staked failed please try again.');
                                                throw new Error("Staked failed please try again!");
                                            }
                                            return [3 /*break*/, 6];
                                        case 5:
                                            reject('Staked failed please try again.');
                                            throw new Error("Staked failed please try again!");
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [3 /*break*/, 15];
                        case 11:
                            _a.trys.push([11, 13, , 14]);
                            return [4 /*yield*/, StakeContract_1.lock(accounts[0], uniqueId_1, weiAmount_1, date, autoStaked)];
                        case 12:
                            stakedate_1 = _a.sent();
                            return [3 /*break*/, 14];
                        case 13:
                            e_2 = _a.sent();
                            if (e_2.code === 4001) {
                                reject('User denied transaction.');
                                throw new Error("User denied transaction.");
                            }
                            return [3 /*break*/, 14];
                        case 14:
                            if (stakedate_1) {
                                provider_1
                                    .waitForTransaction(stakedate_1.hash)
                                    .then(function (result, error) {
                                    if (!result.status) {
                                        reject('Staked failed please try again.');
                                        throw new Error("Staked failed please try again!");
                                    }
                                })
                                    .catch(function (e) {
                                    reject('Staked failed please try again');
                                    throw new Error("Staked failed please try again!");
                                });
                            }
                            else {
                                reject('Staked failed please try again.');
                                throw new Error("Staked failed please try again!");
                            }
                            _a.label = 15;
                        case 15:
                            resolve(stakedate_1);
                            return [3 /*break*/, 17];
                        case 16:
                            err_4 = _a.sent();
                            reject(String(err_4));
                            throw new Error(String(err_4));
                        case 17: return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
exports.stakeUsdao = stakeUsdao;
var claimUsdao = function (StakeId) { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var myWeb3, accounts, provider, network, signer, abi, address, StakeContract, response, contract, sevendays_Bal, chk, timestamp, i, id, value, days, startUnix, fsevenDays, e_4, err_5;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            myWeb3 = new ethers_1.ethers.providers.Web3Provider(window.ethereum);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 10, , 11]);
                            return [4 /*yield*/, myWeb3.listAccounts()];
                        case 2:
                            accounts = _a.sent();
                            provider = new ethers_1.ethers.providers.Web3Provider(window.ethereum);
                            return [4 /*yield*/, provider.getNetwork()];
                        case 3:
                            network = _a.sent();
                            return [4 /*yield*/, provider.getSigner()];
                        case 4:
                            signer = _a.sent();
                            abi = Stake.abi;
                            address = Stake.address[network.chainId];
                            StakeContract = new ethers_1.ethers.Contract(address, abi, signer);
                            response = void 0;
                            contract = new ethers_1.ethers.Contract(address, abi, provider);
                            _a.label = 5;
                        case 5:
                            _a.trys.push([5, 8, , 9]);
                            sevendays_Bal = 0;
                            return [4 /*yield*/, contract.queryFilter('Lock')];
                        case 6:
                            chk = _a.sent();
                            timestamp = 0;
                            for (i = 0; i < chk.length; i++) {
                                if (chk[i]) {
                                    id = parseInt(chk[i].args['StakeId']);
                                    value = ethers_1.ethers.utils.formatEther(String(chk[i].args['_value']));
                                    days = 7 * 24 * 60 * 60;
                                    startUnix = String(chk[i].args['_startTime']);
                                    fsevenDays = parseInt(startUnix) + days;
                                    if (id == StakeId) {
                                        timestamp = timestamp + fsevenDays;
                                    }
                                    if (Number(startUnix) <= timestamp) {
                                        sevendays_Bal = sevendays_Bal + parseFloat(value);
                                    }
                                }
                            }
                            timestamp = 0;
                            return [4 /*yield*/, StakeContract.claim(StakeId)];
                        case 7:
                            response = _a.sent();
                            return [3 /*break*/, 9];
                        case 8:
                            e_4 = _a.sent();
                            if (String(e_4).includes('Insufficient balance')) {
                                reject('Insufficient Balance! please try after sometime. Thank You!');
                                throw new Error('Insufficient Balance! please try after sometime. Thank You!');
                            }
                            if (String(e_4).includes('User already rewarded')) {
                                reject('You have been already awarded for this staked amount!');
                                throw new Error('You have been already awarded for this staked amount!');
                            }
                            if (e_4.code === 4001) {
                                reject('User denied transaction');
                                throw new Error('User denied transaction.');
                            }
                            return [3 /*break*/, 9];
                        case 9:
                            if (response) {
                                provider.waitForTransaction(response.hash).then(function (res, err) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (!res.status) {
                                            reject('Please try again.');
                                            throw new Error('Please try again');
                                        }
                                        return [2 /*return*/];
                                    });
                                }); });
                            }
                            resolve(response);
                            return [3 /*break*/, 11];
                        case 10:
                            err_5 = _a.sent();
                            reject(String(err_5));
                            throw new Error(String(err_5));
                        case 11: return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
exports.claimUsdao = claimUsdao;
//# sourceMappingURL=staking.js.map