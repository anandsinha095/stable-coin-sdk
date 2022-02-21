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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Governance = void 0;
var ethers_1 = require("ethers");
var contract_details_1 = require("./contract_details");
var Comp = contract_details_1.contractDetails.comp, governorAlpha = contract_details_1.contractDetails.governorAlpha, Usm = contract_details_1.contractDetails.usm;
var provider = null, signer = null, network = null, infura_provider = null;
var initiateGovernance = function (infuraUrl) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(typeof window.ethereum !== 'undefined')) return [3 /*break*/, 3];
                provider = new ethers_1.ethers.providers.Web3Provider(window.ethereum);
                return [4 /*yield*/, provider.getSigner()];
            case 1:
                signer = _a.sent();
                return [4 /*yield*/, provider.getNetwork()];
            case 2:
                network = _a.sent();
                _a.label = 3;
            case 3:
                infura_provider = new ethers_1.ethers.providers.JsonRpcProvider(infuraUrl);
                return [2 /*return*/, {
                        provider: provider,
                        signer: signer,
                        network: network,
                        infura_provider: infura_provider
                    }];
        }
    });
}); };
var govAddressAndAbi = function () { return ({
    address: governorAlpha.address[network.chainId],
    abi: governorAlpha.abi
}); };
var compAddressAndAbi = function () { return ({
    addressComp: Comp.address[network.chainId],
    abiComp: Comp.abi
}); };
var usmAddressAndAbi = function () { return ({
    addressUsm: Usm.address[network.chainId],
    abiUsm: Usm.abi
}); };
var makeContract = function (address, abi) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, new ethers_1.ethers.Contract(address, abi, signer)];
}); }); };
var loadProposals = function (proposalIds) { return __awaiter(_this, void 0, void 0, function () {
    var _a, abi, address, GovContract, _proposals, proposalIds_1, proposalIds_1_1, i, result, e_1_1, error_1;
    var e_1, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 10, , 11]);
                _a = govAddressAndAbi(), abi = _a.abi, address = _a.address;
                return [4 /*yield*/, makeContract(address, abi)];
            case 1:
                GovContract = _c.sent();
                _proposals = [];
                if (!(proposalIds.length > 0)) return [3 /*break*/, 9];
                _c.label = 2;
            case 2:
                _c.trys.push([2, 7, 8, 9]);
                proposalIds_1 = __values(proposalIds), proposalIds_1_1 = proposalIds_1.next();
                _c.label = 3;
            case 3:
                if (!!proposalIds_1_1.done) return [3 /*break*/, 6];
                i = proposalIds_1_1.value;
                return [4 /*yield*/, GovContract.proposals(i)];
            case 4:
                result = _c.sent();
                _proposals.unshift(result);
                _c.label = 5;
            case 5:
                proposalIds_1_1 = proposalIds_1.next();
                return [3 /*break*/, 3];
            case 6: return [3 /*break*/, 9];
            case 7:
                e_1_1 = _c.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 9];
            case 8:
                try {
                    if (proposalIds_1_1 && !proposalIds_1_1.done && (_b = proposalIds_1.return)) _b.call(proposalIds_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 9: return [2 /*return*/, _proposals];
            case 10:
                error_1 = _c.sent();
                throw new Error(error_1.toString());
            case 11: return [2 /*return*/];
        }
    });
}); };
var loadProposalStates = function (proposalIds) { return __awaiter(_this, void 0, void 0, function () {
    var _a, abi, address, GovContract, _proposalStates, proposalIds_2, proposalIds_2_1, i, _b, _c, e_2_1;
    var e_2, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = govAddressAndAbi(), abi = _a.abi, address = _a.address;
                return [4 /*yield*/, makeContract(address, abi)];
            case 1:
                GovContract = _e.sent();
                _proposalStates = [];
                if (!(proposalIds.length > 0)) return [3 /*break*/, 9];
                _e.label = 2;
            case 2:
                _e.trys.push([2, 7, 8, 9]);
                proposalIds_2 = __values(proposalIds), proposalIds_2_1 = proposalIds_2.next();
                _e.label = 3;
            case 3:
                if (!!proposalIds_2_1.done) return [3 /*break*/, 6];
                i = proposalIds_2_1.value;
                _c = (_b = _proposalStates).unshift;
                return [4 /*yield*/, GovContract.state(i)];
            case 4:
                _c.apply(_b, [_e.sent()]);
                _e.label = 5;
            case 5:
                proposalIds_2_1 = proposalIds_2.next();
                return [3 /*break*/, 3];
            case 6: return [3 /*break*/, 9];
            case 7:
                e_2_1 = _e.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 9];
            case 8:
                try {
                    if (proposalIds_2_1 && !proposalIds_2_1.done && (_d = proposalIds_2.return)) _d.call(proposalIds_2);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 9: return [2 /*return*/, _proposalStates];
        }
    });
}); };
var loadFees = function () { return __awaiter(_this, void 0, void 0, function () {
    var _a, abiUsm, addressUsm, contract, fetchedFees, burnFee, mintFee, transferFee, transactionFee, defundFee, result;
    var _this = this;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = usmAddressAndAbi(), abiUsm = _a.abiUsm, addressUsm = _a.addressUsm;
                return [4 /*yield*/, makeContract(addressUsm, abiUsm)];
            case 1:
                contract = _b.sent();
                fetchedFees = {};
                if (!contract) return [3 /*break*/, 3];
                burnFee = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var data, error_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, contract.burnFee()];
                            case 1:
                                data = _a.sent();
                                resolve(ethers_1.ethers.utils.formatEther(data));
                                return [3 /*break*/, 3];
                            case 2:
                                error_2 = _a.sent();
                                reject(error_2);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                mintFee = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var data, error_3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, contract.mintFee()];
                            case 1:
                                data = _a.sent();
                                resolve(ethers_1.ethers.utils.formatEther(data));
                                return [3 /*break*/, 3];
                            case 2:
                                error_3 = _a.sent();
                                reject(error_3);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                transferFee = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var data, error_4;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, contract.transferFee()];
                            case 1:
                                data = _a.sent();
                                resolve(ethers_1.ethers.utils.formatEther(data));
                                return [3 /*break*/, 3];
                            case 2:
                                error_4 = _a.sent();
                                reject(error_4);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                transactionFee = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var data, error_5;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, contract.transactionTax()];
                            case 1:
                                data = _a.sent();
                                resolve(ethers_1.ethers.utils.formatEther(data));
                                return [3 /*break*/, 3];
                            case 2:
                                error_5 = _a.sent();
                                reject(error_5);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                defundFee = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var data, error_6;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, contract.defundFee()];
                            case 1:
                                data = _a.sent();
                                resolve(ethers_1.ethers.utils.formatEther(data));
                                return [3 /*break*/, 3];
                            case 2:
                                error_6 = _a.sent();
                                reject(error_6);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                return [4 /*yield*/, Promise.all([
                        burnFee,
                        mintFee,
                        transferFee,
                        transactionFee,
                        defundFee
                    ])];
            case 2:
                result = _b.sent();
                fetchedFees = {
                    burnFee: result[0],
                    mintFee: result[1],
                    transferFee: result[2],
                    transactionFee: result[3],
                    defundFee: result[4]
                };
                _b.label = 3;
            case 3: return [2 /*return*/, fetchedFees];
        }
    });
}); };
var createProposal = function (targets, values, signatures, calldatas, description) { return __awaiter(_this, void 0, void 0, function () {
    var _a, abi, address, _b, addressComp, abiComp, governorAlphaContract, CompContract, loggedInAddress, delegatedVotes, proposal, result, idCount, e_3;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 10, , 11]);
                _a = govAddressAndAbi(), abi = _a.abi, address = _a.address;
                _b = compAddressAndAbi(), addressComp = _b.addressComp, abiComp = _b.abiComp;
                return [4 /*yield*/, makeContract(address, abi)];
            case 1:
                governorAlphaContract = _c.sent();
                return [4 /*yield*/, makeContract(addressComp, abiComp)];
            case 2:
                CompContract = _c.sent();
                return [4 /*yield*/, signer.getAddress()];
            case 3:
                loggedInAddress = _c.sent();
                return [4 /*yield*/, CompContract.getCurrentVotes(loggedInAddress)];
            case 4:
                delegatedVotes = _c.sent();
                delegatedVotes = Number(ethers_1.ethers.utils.formatEther(delegatedVotes));
                if (delegatedVotes < 100000)
                    throw new Error("You don't have sufficient delegated votes to create proposal !");
                return [4 /*yield*/, governorAlphaContract.propose(targets, values, signatures, calldatas, description)];
            case 5:
                proposal = _c.sent();
                if (!proposal) return [3 /*break*/, 9];
                return [4 /*yield*/, provider.waitForTransaction(proposal.hash)];
            case 6:
                result = _c.sent();
                if (!result.status) return [3 /*break*/, 8];
                return [4 /*yield*/, governorAlphaContract.proposalCount()];
            case 7:
                idCount = _c.sent();
                return [2 /*return*/, Number(idCount)];
            case 8: throw new Error('Proposal failed !');
            case 9: return [3 /*break*/, 11];
            case 10:
                e_3 = _c.sent();
                if (String(e_3).includes('found an already active proposal'))
                    throw new Error("Found already active proposal");
                else if (String(e_3).includes('Error Occured ! cannot estimate gas; transaction may fail or may require manual gas limit (error={"code":-32603,'))
                    throw new Error("Something went wrong!");
                else if (String(e_3).includes('proposer votes below proposal threshold'))
                    throw new Error("User dosen\u2019t have enough tokens delegated to create a proposal");
                else if ((e_3 === null || e_3 === void 0 ? void 0 : e_3.code) === 4001)
                    throw new Error("User denied Transactions.");
                else
                    throw new Error("Error Occured ! Execution Failed");
                return [3 /*break*/, 11];
            case 11: return [2 /*return*/];
        }
    });
}); };
var fetchDelegateVotes = function () { return __awaiter(_this, void 0, void 0, function () {
    var loggedInAddress, _a, abiComp, addressComp, CompContract, delegatedVotes;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, signer.getAddress()];
            case 1:
                loggedInAddress = _b.sent();
                _a = compAddressAndAbi(), abiComp = _a.abiComp, addressComp = _a.addressComp;
                return [4 /*yield*/, makeContract(addressComp, abiComp)];
            case 2:
                CompContract = _b.sent();
                return [4 /*yield*/, CompContract.getCurrentVotes(loggedInAddress)];
            case 3:
                delegatedVotes = _b.sent();
                return [2 /*return*/, Number(ethers_1.ethers.utils.formatEther(delegatedVotes))];
        }
    });
}); };
var createDelegate = function (delegateLink) { return __awaiter(_this, void 0, void 0, function () {
    var delegateToAddress, _a, abi, address, compContract, delegateComp;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                delegateToAddress = ethers_1.ethers.utils.getAddress(delegateLink);
                _a = compAddressAndAbi(), abi = _a.abiComp, address = _a.addressComp;
                return [4 /*yield*/, makeContract(address, abi)];
            case 1:
                compContract = _b.sent();
                window.compContract = compContract;
                return [4 /*yield*/, compContract.delegate(delegateToAddress)];
            case 2:
                delegateComp = _b.sent();
                return [2 /*return*/, provider.waitForTransaction(delegateComp.hash)];
        }
    });
}); };
var voteProposal = function (contractId, approvalState) { return __awaiter(_this, void 0, void 0, function () {
    var _a, addressComp, abiComp, _b, address, abi, CompContract, GovContract, signerAddress, delegatedVotes, proposal, hash, e_4;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = compAddressAndAbi(), addressComp = _a.addressComp, abiComp = _a.abiComp;
                _b = govAddressAndAbi(), address = _b.address, abi = _b.abi;
                return [4 /*yield*/, makeContract(addressComp, abiComp)];
            case 1:
                CompContract = _c.sent();
                return [4 /*yield*/, makeContract(address, abi)];
            case 2:
                GovContract = _c.sent();
                return [4 /*yield*/, signer.getAddress()];
            case 3:
                signerAddress = _c.sent();
                return [4 /*yield*/, CompContract.getCurrentVotes(signerAddress)];
            case 4:
                delegatedVotes = _c.sent();
                if (delegatedVotes < 1)
                    throw new Error("You don't have suffficient delegated votes to vote in a proposal");
                _c.label = 5;
            case 5:
                _c.trys.push([5, 7, , 8]);
                return [4 /*yield*/, GovContract.castVote(contractId, approvalState)];
            case 6:
                proposal = _c.sent();
                hash = proposal.hash;
                return [2 /*return*/, provider.waitForTransaction(hash)];
            case 7:
                e_4 = _c.sent();
                if (e_4.code === 4001)
                    throw new Error("User denied transaction signature.");
                if (String(e_4).includes('proposer votes below proposal threshold'))
                    throw new Error("User dosen\u2019t have enough tokens delegated to create a proposal");
                else
                    throw new Error("You have already voted for this Proposal.");
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
var queueProposal = function (contractId) { return __awaiter(_this, void 0, void 0, function () {
    var _a, address, abi, GovContract, queue, e_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = govAddressAndAbi(), address = _a.address, abi = _a.abi;
                return [4 /*yield*/, makeContract(address, abi)];
            case 1:
                GovContract = _b.sent();
                _b.label = 2;
            case 2:
                _b.trys.push([2, 4, , 5]);
                return [4 /*yield*/, GovContract.queue(contractId)];
            case 3:
                queue = _b.sent();
                return [2 /*return*/, provider.waitForTransaction(queue.hash)];
            case 4:
                e_5 = _b.sent();
                if (e_5.code === 4001)
                    throw new Error('User denied transaction.');
                if (String(e_5).includes('proposal can only be queued if it is succeeded'))
                    throw new Error('You have already voted for this proposal.');
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
var executeProposal = function (contractId) { return __awaiter(_this, void 0, void 0, function () {
    var _a, address, abi, GovContract, executiongov, e_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = govAddressAndAbi(), address = _a.address, abi = _a.abi;
                return [4 /*yield*/, makeContract(address, abi)];
            case 1:
                GovContract = _b.sent();
                _b.label = 2;
            case 2:
                _b.trys.push([2, 4, , 5]);
                return [4 /*yield*/, GovContract.execute(contractId)];
            case 3:
                executiongov = _b.sent();
                return [2 /*return*/, provider.waitForTransaction(executiongov.hash)];
            case 4:
                e_6 = _b.sent();
                if (e_6.code === 4001)
                    throw new Error('User denied transaction signature.');
                else
                    throw new Error("We request you to wait for a while to Execute.");
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
var Governance = {
    createProposal: createProposal,
    loadProposals: loadProposals,
    loadProposalStates: loadProposalStates,
    initiateGovernance: initiateGovernance,
    createDelegate: createDelegate,
    loadFees: loadFees,
    fetchDelegateVotes: fetchDelegateVotes,
    voteProposal: voteProposal,
    queueProposal: queueProposal,
    executeProposal: executeProposal,
    network: network,
    signer: signer,
    infura_provider: infura_provider,
    provider: provider
};
exports.Governance = Governance;
//# sourceMappingURL=governance.js.map