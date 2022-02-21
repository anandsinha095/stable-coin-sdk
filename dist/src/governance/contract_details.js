Object.defineProperty(exports, "__esModule", { value: true });
exports.contractDetails = void 0;
exports.contractDetails = {
    usm: {
        name: 'usm',
        abi: [
            {
                inputs: [
                    {
                        internalType: 'contract Oracle',
                        name: 'oracle_',
                        type: 'address'
                    },
                    {
                        internalType: 'address[]',
                        name: 'addressesYouCantSendThisContractsTokensTo',
                        type: 'address[]'
                    },
                    {
                        internalType: 'address[]',
                        name: 'contractsToAskToRejectSendsToThisContractsAddress',
                        type: 'address[]'
                    },
                    {
                        internalType: 'address',
                        name: '_timelockAddress',
                        type: 'address'
                    },
                    {
                        internalType: 'address payable',
                        name: '_foundationAddress',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'minWithdrawalSeconds',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'nonpayable',
                type: 'constructor'
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'owner',
                        type: 'address'
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'spender',
                        type: 'address'
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'value',
                        type: 'uint256'
                    }
                ],
                name: 'Approval',
                type: 'event'
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'adjustment',
                        type: 'uint256'
                    }
                ],
                name: 'BidAskAdjustmentChanged',
                type: 'event'
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: '_saveUSDAOBurnFee',
                        type: 'uint256'
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: '_saveASSETBurnFee',
                        type: 'uint256'
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: '_saveASSETMintFee',
                        type: 'uint256'
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: '_saveUSDAOMintFee',
                        type: 'uint256'
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: '_saveTransferFee',
                        type: 'uint256'
                    }
                ],
                name: 'Fees',
                type: 'event'
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'user',
                        type: 'address'
                    },
                    {
                        indexed: false,
                        internalType: 'bool',
                        name: 'newStatus',
                        type: 'bool'
                    }
                ],
                name: 'OptOutStatusChanged',
                type: 'event'
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'price',
                        type: 'uint256'
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'oraclePrice',
                        type: 'uint256'
                    }
                ],
                name: 'PriceChanged',
                type: 'event'
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'from',
                        type: 'address'
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'to',
                        type: 'address'
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'value',
                        type: 'uint256'
                    }
                ],
                name: 'Transfer',
                type: 'event'
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: false,
                        internalType: 'bool',
                        name: 'underwater',
                        type: 'bool'
                    }
                ],
                name: 'UnderwaterStatusChanged',
                type: 'event'
            },
            {
                inputs: [],
                name: 'ASSETBurnFee',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'ASSETMintFee',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'BID_ASK_ADJUSTMENT_DECAY_PER_SECOND',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'BID_ASK_ADJUSTMENT_ZERO_OUT_PERIOD',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'DOMAIN_SEPARATOR',
                outputs: [
                    {
                        internalType: 'bytes32',
                        name: '',
                        type: 'bytes32'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'MAX_DEBT_RATIO',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'MINIMUM_DELAY',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'MIN_FUM_BUY_PRICE_DECAY_PER_SECOND',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'PERMIT_TYPEHASH',
                outputs: [
                    {
                        internalType: 'bytes32',
                        name: '',
                        type: 'bytes32'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'PREFUND_END_TIMESTAMP',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'PREFUND_FUM_PRICE_IN_ETH',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'USDAOBurnFee',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'USDAOMintFee',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'USDAOTransferFee',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'WAD',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'enum IUSM.Side',
                        name: 'side',
                        type: 'uint8'
                    },
                    {
                        internalType: 'uint256',
                        name: 'ethUsdPrice',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'adjustment',
                        type: 'uint256'
                    }
                ],
                name: 'adjustedEthUsdPrice',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'price',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'pure',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'owner',
                        type: 'address'
                    },
                    {
                        internalType: 'address',
                        name: 'spender',
                        type: 'address'
                    }
                ],
                name: 'allowance',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'spender',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'wad',
                        type: 'uint256'
                    }
                ],
                name: 'approve',
                outputs: [
                    {
                        internalType: 'bool',
                        name: '',
                        type: 'bool'
                    }
                ],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'guy',
                        type: 'address'
                    }
                ],
                name: 'balanceOf',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'storedTime',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'storedAdjustment',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'currentTime',
                        type: 'uint256'
                    }
                ],
                name: 'bidAskAdjustment',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'adjustment',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'pure',
                type: 'function'
            },
            {
                inputs: [],
                name: 'bidAskAdjustment',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'adjustment',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address payable',
                        name: 'to',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'usmToBurn',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'minEthOut',
                        type: 'uint256'
                    }
                ],
                name: 'burn',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'ethOut',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint8',
                        name: '_newburnFees',
                        type: 'uint8'
                    },
                    {
                        internalType: 'uint32',
                        name: '_base',
                        type: 'uint32'
                    }
                ],
                name: 'changeBurnFee',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint8',
                        name: '_newDefundFees',
                        type: 'uint8'
                    },
                    {
                        internalType: 'uint32',
                        name: '_base',
                        type: 'uint32'
                    }
                ],
                name: 'changeDefundFee',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: '_newFoundationAddress',
                        type: 'address'
                    }
                ],
                name: 'changeFoundationAddress',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint8',
                        name: '_newFundFee',
                        type: 'uint8'
                    },
                    {
                        internalType: 'uint32',
                        name: '_base',
                        type: 'uint32'
                    }
                ],
                name: 'changeFundFee',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint8',
                        name: '_newmintFees',
                        type: 'uint8'
                    },
                    {
                        internalType: 'uint32',
                        name: '_base',
                        type: 'uint32'
                    }
                ],
                name: 'changeMintFee',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint8',
                        name: '_newtransferFees',
                        type: 'uint8'
                    },
                    {
                        internalType: 'uint32',
                        name: '_base',
                        type: 'uint32'
                    }
                ],
                name: 'changeTransferFee',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'timeSystemWentUnderwater',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'ethUsdPrice',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'oracleEthUsdPrice',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'bidAskAdjustmentTimestamp',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'bidAskAdjustment',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'ethPool',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'usmTotalSupply',
                                type: 'uint256'
                            }
                        ],
                        internalType: 'struct IUSM.LoadedState',
                        name: 'ls',
                        type: 'tuple'
                    }
                ],
                name: 'checkForFreshOraclePrice',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'price',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'oraclePrice',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'adjustment',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'usmActualSupply',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'ethPool_',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'ethUsdPrice',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'oldTimeUnderwater',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'currentTime',
                        type: 'uint256'
                    }
                ],
                name: 'checkIfUnderwater',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'timeSystemWentUnderwater_',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'usmSupplyForFumBuys',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'debtRatio_',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'pure',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'ethUsdPrice',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'ethInPool',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'usmSupply',
                        type: 'uint256'
                    }
                ],
                name: 'debtRatio',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'ratio',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'pure',
                type: 'function'
            },
            {
                inputs: [],
                name: 'decimals',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address payable',
                        name: 'to',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'fumToBurn',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'minEthOut',
                        type: 'uint256'
                    }
                ],
                name: 'defund',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'ethOut',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'from',
                        type: 'address'
                    },
                    {
                        internalType: 'address payable',
                        name: 'to',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'fumToBurn',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'minEthOut',
                        type: 'uint256'
                    }
                ],
                name: 'defundFrom',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'ethOut',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'ethUsdPrice',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'ethInPool',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'usmSupply',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bool',
                        name: 'roundUp',
                        type: 'bool'
                    }
                ],
                name: 'ethBuffer',
                outputs: [
                    {
                        internalType: 'int256',
                        name: 'buffer',
                        type: 'int256'
                    }
                ],
                stateMutability: 'pure',
                type: 'function'
            },
            {
                inputs: [
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'timeSystemWentUnderwater',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'ethUsdPrice',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'oracleEthUsdPrice',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'bidAskAdjustmentTimestamp',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'bidAskAdjustment',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'ethPool',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'usmTotalSupply',
                                type: 'uint256'
                            }
                        ],
                        internalType: 'struct IUSM.LoadedState',
                        name: 'ls',
                        type: 'tuple'
                    },
                    {
                        internalType: 'uint256',
                        name: 'usmIn',
                        type: 'uint256'
                    }
                ],
                name: 'ethFromBurn',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'ethOut',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'adjGrowthFactor',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'pure',
                type: 'function'
            },
            {
                inputs: [
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'timeSystemWentUnderwater',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'ethUsdPrice',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'oracleEthUsdPrice',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'bidAskAdjustmentTimestamp',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'bidAskAdjustment',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'ethPool',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'usmTotalSupply',
                                type: 'uint256'
                            }
                        ],
                        internalType: 'struct IUSM.LoadedState',
                        name: 'ls',
                        type: 'tuple'
                    },
                    {
                        internalType: 'uint256',
                        name: 'fumSupply',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'fumIn',
                        type: 'uint256'
                    }
                ],
                name: 'ethFromDefund',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'ethOut',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'adjShrinkFactor',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'pure',
                type: 'function'
            },
            {
                inputs: [],
                name: 'ethPool',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'pool',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'ethUsdPrice',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'ethAmount',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bool',
                        name: 'roundUp',
                        type: 'bool'
                    }
                ],
                name: 'ethToUsm',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'usmOut',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'pure',
                type: 'function'
            },
            {
                inputs: [],
                name: 'foundationAddress',
                outputs: [
                    {
                        internalType: 'address',
                        name: '',
                        type: 'address'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'fum',
                outputs: [
                    {
                        internalType: 'contract IFUM',
                        name: '',
                        type: 'address'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'timeSystemWentUnderwater',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'ethUsdPrice',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'oracleEthUsdPrice',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'bidAskAdjustmentTimestamp',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'bidAskAdjustment',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'ethPool',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'usmTotalSupply',
                                type: 'uint256'
                            }
                        ],
                        internalType: 'struct IUSM.LoadedState',
                        name: 'ls',
                        type: 'tuple'
                    },
                    {
                        internalType: 'uint256',
                        name: 'fumSupply',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'ethIn',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'debtRatio_',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bool',
                        name: 'prefund',
                        type: 'bool'
                    }
                ],
                name: 'fumFromFund',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'fumOut',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'adjGrowthFactor',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'pure',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'enum IUSM.Side',
                        name: 'side',
                        type: 'uint8'
                    },
                    {
                        internalType: 'uint256',
                        name: 'ethUsdPrice',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'ethInPool',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'usmEffectiveSupply',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'fumSupply',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bool',
                        name: 'prefund',
                        type: 'bool'
                    }
                ],
                name: 'fumPrice',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'price',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'pure',
                type: 'function'
            },
            {
                inputs: [],
                name: 'fumTotalSupply',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'supply',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'to',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'minFumOut',
                        type: 'uint256'
                    }
                ],
                name: 'fund',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'fumOut',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'payable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'ethAmount',
                        type: 'uint256'
                    }
                ],
                name: 'getAssetBurnFee',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'tokenAmount',
                        type: 'uint256'
                    }
                ],
                name: 'getAssetMintFee',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'tokenAmount',
                        type: 'uint256'
                    }
                ],
                name: 'getTransferFee',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'ethAmount',
                        type: 'uint256'
                    }
                ],
                name: 'getUSDAOBurnFee',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'tokenAmount',
                        type: 'uint256'
                    }
                ],
                name: 'getUSDAOMintFee',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'isDuringPrefund',
                outputs: [
                    {
                        internalType: 'bool',
                        name: 'duringPrefund',
                        type: 'bool'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'latestPrice',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'price',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'loadState',
                outputs: [
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'timeSystemWentUnderwater',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'ethUsdPrice',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'oracleEthUsdPrice',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'bidAskAdjustmentTimestamp',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'bidAskAdjustment',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'ethPool',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'usmTotalSupply',
                                type: 'uint256'
                            }
                        ],
                        internalType: 'struct IUSM.LoadedState',
                        name: 'ls',
                        type: 'tuple'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'to',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'minUsmOut',
                        type: 'uint256'
                    }
                ],
                name: 'mint',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'usmOut',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'payable',
                type: 'function'
            },
            {
                inputs: [],
                name: 'name',
                outputs: [
                    {
                        internalType: 'string',
                        name: '',
                        type: 'string'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: '',
                        type: 'address'
                    }
                ],
                name: 'nonces',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'optBackIn',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [],
                name: 'optOut',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: '',
                        type: 'address'
                    }
                ],
                name: 'optedOut',
                outputs: [
                    {
                        internalType: 'bool',
                        name: '',
                        type: 'bool'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'oracle',
                outputs: [
                    {
                        internalType: 'contract Oracle',
                        name: '',
                        type: 'address'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'owner',
                        type: 'address'
                    },
                    {
                        internalType: 'address',
                        name: 'spender',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'amount',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'deadline',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint8',
                        name: 'v',
                        type: 'uint8'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'r',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes32',
                        name: 's',
                        type: 'bytes32'
                    }
                ],
                name: 'permit',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [],
                name: 'revenueContract',
                outputs: [
                    {
                        internalType: 'contract Revenue',
                        name: '',
                        type: 'address'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'saveASSETBurnFee',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'saveASSETMintFee',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'saveTransferFee',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'saveUSDAOBurnFee',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'saveUSDAOMintFee',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'storedState',
                outputs: [
                    {
                        internalType: 'uint32',
                        name: 'timeSystemWentUnderwater',
                        type: 'uint32'
                    },
                    {
                        internalType: 'uint64',
                        name: 'ethUsdPrice',
                        type: 'uint64'
                    },
                    {
                        internalType: 'uint64',
                        name: 'oracleEthUsdPrice',
                        type: 'uint64'
                    },
                    {
                        internalType: 'uint32',
                        name: 'bidAskAdjustmentTimestamp',
                        type: 'uint32'
                    },
                    {
                        internalType: 'uint64',
                        name: 'bidAskAdjustment',
                        type: 'uint64'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'symbol',
                outputs: [
                    {
                        internalType: 'string',
                        name: '',
                        type: 'string'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'taxationContract',
                outputs: [
                    {
                        internalType: 'contract Taxation',
                        name: '',
                        type: 'address'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'timeSystemWentUnderwater',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'timestamp',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'timelockAddress',
                outputs: [
                    {
                        internalType: 'address',
                        name: '',
                        type: 'address'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'totalSupply',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'dst',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'wad',
                        type: 'uint256'
                    }
                ],
                name: 'transfer',
                outputs: [
                    {
                        internalType: 'bool',
                        name: '',
                        type: 'bool'
                    }
                ],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'src',
                        type: 'address'
                    },
                    {
                        internalType: 'address',
                        name: 'dst',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'wad',
                        type: 'uint256'
                    }
                ],
                name: 'transferFrom',
                outputs: [
                    {
                        internalType: 'bool',
                        name: '',
                        type: 'bool'
                    }
                ],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'contract Oracle',
                        name: '_newOracle',
                        type: 'address'
                    }
                ],
                name: 'upgradeOracle',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'timeSystemWentUnderwater',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'ethUsdPrice',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'oracleEthUsdPrice',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'bidAskAdjustmentTimestamp',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'bidAskAdjustment',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'ethPool',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'usmTotalSupply',
                                type: 'uint256'
                            }
                        ],
                        internalType: 'struct IUSM.LoadedState',
                        name: 'ls',
                        type: 'tuple'
                    },
                    {
                        internalType: 'uint256',
                        name: 'ethIn',
                        type: 'uint256'
                    }
                ],
                name: 'usmFromMint',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'usmOut',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'adjShrinkFactor',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'pure',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'enum IUSM.Side',
                        name: 'side',
                        type: 'uint8'
                    },
                    {
                        internalType: 'uint256',
                        name: 'ethUsdPrice',
                        type: 'uint256'
                    }
                ],
                name: 'usmPrice',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'price',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'pure',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'ethUsdPrice',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'usmAmount',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bool',
                        name: 'roundUp',
                        type: 'bool'
                    }
                ],
                name: 'usmToEth',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'ethOut',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'pure',
                type: 'function'
            },
            {
                inputs: [],
                name: 'version',
                outputs: [
                    {
                        internalType: 'string',
                        name: '',
                        type: 'string'
                    }
                ],
                stateMutability: 'pure',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'bool',
                        name: 'withdraw_mint_fee',
                        type: 'bool'
                    },
                    {
                        internalType: 'bool',
                        name: 'withdraw_burn_fee',
                        type: 'bool'
                    },
                    {
                        internalType: 'bool',
                        name: 'withdraw_fund_fee',
                        type: 'bool'
                    },
                    {
                        internalType: 'bool',
                        name: 'withdraw_defund_fee',
                        type: 'bool'
                    },
                    {
                        internalType: 'bool',
                        name: 'withdraw_transfer_fee',
                        type: 'bool'
                    }
                ],
                name: 'withdrawFee',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                stateMutability: 'payable',
                type: 'receive'
            }
        ],
        address: {
            1: '0x03eb7Ce2907e202bB70BAE3D7B0C588573d3cECC',
            42: '0x6DEE30518efD2d2b32D8878c494309Ee9c0A4489',
            // 42: '0xCAC1daf45199454d982B818DcC8845B8a1AEE2D9',
            31337: '0x8Ad470569f02E93B7381d568615Dc3AB07fEB3Bd',
            1337: '0x8a3b2Bc31ac6B3835E698B3446e089FE86974FB0',
            4: '0x98F3C460857b9127DF7EDe1246Dd220D63302192'
        }
    },
    //asset
    fum: {
        name: 'fum',
        abi: [
            {
                inputs: [
                    {
                        internalType: 'contract IUSM',
                        name: 'usm_',
                        type: 'address'
                    },
                    {
                        internalType: 'address[]',
                        name: 'optedOut_',
                        type: 'address[]'
                    }
                ],
                stateMutability: 'nonpayable',
                type: 'constructor'
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'owner',
                        type: 'address'
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'spender',
                        type: 'address'
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'value',
                        type: 'uint256'
                    }
                ],
                name: 'Approval',
                type: 'event'
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'previousOwner',
                        type: 'address'
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'newOwner',
                        type: 'address'
                    }
                ],
                name: 'OwnershipTransferred',
                type: 'event'
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'from',
                        type: 'address'
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'to',
                        type: 'address'
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'value',
                        type: 'uint256'
                    }
                ],
                name: 'Transfer',
                type: 'event'
            },
            {
                inputs: [],
                name: 'DOMAIN_SEPARATOR',
                outputs: [
                    {
                        internalType: 'bytes32',
                        name: '',
                        type: 'bytes32'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'PERMIT_TYPEHASH',
                outputs: [
                    {
                        internalType: 'bytes32',
                        name: '',
                        type: 'bytes32'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'owner',
                        type: 'address'
                    },
                    {
                        internalType: 'address',
                        name: 'spender',
                        type: 'address'
                    }
                ],
                name: 'allowance',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'spender',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'wad',
                        type: 'uint256'
                    }
                ],
                name: 'approve',
                outputs: [
                    {
                        internalType: 'bool',
                        name: '',
                        type: 'bool'
                    }
                ],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'guy',
                        type: 'address'
                    }
                ],
                name: 'balanceOf',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: '_holder',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: '_amount',
                        type: 'uint256'
                    }
                ],
                name: 'burn',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [],
                name: 'decimals',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: '_recipient',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: '_amount',
                        type: 'uint256'
                    }
                ],
                name: 'mint',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [],
                name: 'name',
                outputs: [
                    {
                        internalType: 'string',
                        name: '',
                        type: 'string'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: '',
                        type: 'address'
                    }
                ],
                name: 'nonces',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'optBackIn',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [],
                name: 'optOut',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: '',
                        type: 'address'
                    }
                ],
                name: 'optedOut',
                outputs: [
                    {
                        internalType: 'bool',
                        name: '',
                        type: 'bool'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'owner',
                outputs: [
                    {
                        internalType: 'address',
                        name: '',
                        type: 'address'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'owner',
                        type: 'address'
                    },
                    {
                        internalType: 'address',
                        name: 'spender',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'amount',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'deadline',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint8',
                        name: 'v',
                        type: 'uint8'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'r',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes32',
                        name: 's',
                        type: 'bytes32'
                    }
                ],
                name: 'permit',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [],
                name: 'renounceOwnership',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [],
                name: 'symbol',
                outputs: [
                    {
                        internalType: 'string',
                        name: '',
                        type: 'string'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'totalSupply',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'dst',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'wad',
                        type: 'uint256'
                    }
                ],
                name: 'transfer',
                outputs: [
                    {
                        internalType: 'bool',
                        name: '',
                        type: 'bool'
                    }
                ],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'src',
                        type: 'address'
                    },
                    {
                        internalType: 'address',
                        name: 'dst',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'wad',
                        type: 'uint256'
                    }
                ],
                name: 'transferFrom',
                outputs: [
                    {
                        internalType: 'bool',
                        name: '',
                        type: 'bool'
                    }
                ],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'newOwner',
                        type: 'address'
                    }
                ],
                name: 'transferOwnership',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [],
                name: 'usm',
                outputs: [
                    {
                        internalType: 'contract IUSM',
                        name: '',
                        type: 'address'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'version',
                outputs: [
                    {
                        internalType: 'string',
                        name: '',
                        type: 'string'
                    }
                ],
                stateMutability: 'pure',
                type: 'function'
            },
            {
                stateMutability: 'payable',
                type: 'receive'
            }
        ],
        address: {
            1: '0xf04a5D82ff8a801f7d45e9C14CDcf73defF1a394',
            42: '0x0cAe206C124CD82FC79F666402cB7dAe8030b0b6',
            // 42: '0x647Ef2F617dFFD1b1d007Ee4eFc6F62c188C1910',
            31337: '0x267cbD010d7E48421760dc8539898F8f1A866a50',
            1337: '0xbA4523C919633dE2A5590226e6b69dE1a48b2B2C',
            4: '0x95B73E52d261D84f5Ce69314B8E9D55FC6D86892'
        },
        infuraId: {
            1: '',
            42: 'https://rinkeby.infura.io/v3/ad3b219cf3254a9ea9815d52438578d5',
            31337: '',
            1337: '',
            4: 'https://rinkeby.infura.io/v3/0c7a63bd7d2d4b7e9d3dc7032ac1bc6e'
        }
    },
    governorAlpha: {
        name: 'governorAlpha',
        abi: [
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'timelock_',
                        type: 'address'
                    },
                    {
                        internalType: 'address',
                        name: 'comp_',
                        type: 'address'
                    },
                    {
                        internalType: 'address',
                        name: 'guardian_',
                        type: 'address'
                    }
                ],
                stateMutability: 'nonpayable',
                type: 'constructor'
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'id',
                        type: 'uint256'
                    }
                ],
                name: 'ProposalCanceled',
                type: 'event'
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'id',
                        type: 'uint256'
                    },
                    {
                        indexed: false,
                        internalType: 'address',
                        name: 'proposer',
                        type: 'address'
                    },
                    {
                        indexed: false,
                        internalType: 'address[]',
                        name: 'targets',
                        type: 'address[]'
                    },
                    {
                        indexed: false,
                        internalType: 'uint256[]',
                        name: 'values',
                        type: 'uint256[]'
                    },
                    {
                        indexed: false,
                        internalType: 'string[]',
                        name: 'signatures',
                        type: 'string[]'
                    },
                    {
                        indexed: false,
                        internalType: 'bytes[]',
                        name: 'calldatas',
                        type: 'bytes[]'
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'startBlock',
                        type: 'uint256'
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'endBlock',
                        type: 'uint256'
                    },
                    {
                        indexed: false,
                        internalType: 'string',
                        name: 'description',
                        type: 'string'
                    }
                ],
                name: 'ProposalCreated',
                type: 'event'
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'id',
                        type: 'uint256'
                    }
                ],
                name: 'ProposalExecuted',
                type: 'event'
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'id',
                        type: 'uint256'
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'eta',
                        type: 'uint256'
                    }
                ],
                name: 'ProposalQueued',
                type: 'event'
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: false,
                        internalType: 'address',
                        name: 'voter',
                        type: 'address'
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'proposalId',
                        type: 'uint256'
                    },
                    {
                        indexed: false,
                        internalType: 'bool',
                        name: 'support',
                        type: 'bool'
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'votes',
                        type: 'uint256'
                    }
                ],
                name: 'VoteCast',
                type: 'event'
            },
            {
                inputs: [],
                name: 'BALLOT_TYPEHASH',
                outputs: [
                    {
                        internalType: 'bytes32',
                        name: '',
                        type: 'bytes32'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'DOMAIN_TYPEHASH',
                outputs: [
                    {
                        internalType: 'bytes32',
                        name: '',
                        type: 'bytes32'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: '__abdicate',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [],
                name: '__acceptAdmin',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'newPendingAdmin',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'eta',
                        type: 'uint256'
                    }
                ],
                name: '__executeSetTimelockPendingAdmin',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'newPendingAdmin',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'eta',
                        type: 'uint256'
                    }
                ],
                name: '__queueSetTimelockPendingAdmin',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'proposalId',
                        type: 'uint256'
                    }
                ],
                name: 'cancel',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'proposalId',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bool',
                        name: 'support',
                        type: 'bool'
                    }
                ],
                name: 'castVote',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'proposalId',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bool',
                        name: 'support',
                        type: 'bool'
                    },
                    {
                        internalType: 'uint8',
                        name: 'v',
                        type: 'uint8'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'r',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes32',
                        name: 's',
                        type: 'bytes32'
                    }
                ],
                name: 'castVoteBySig',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [],
                name: 'comp',
                outputs: [
                    {
                        internalType: 'contract CompInterface',
                        name: '',
                        type: 'address'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'proposalId',
                        type: 'uint256'
                    }
                ],
                name: 'execute',
                outputs: [],
                stateMutability: 'payable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'proposalId',
                        type: 'uint256'
                    }
                ],
                name: 'getActions',
                outputs: [
                    {
                        internalType: 'address[]',
                        name: 'targets',
                        type: 'address[]'
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'values',
                        type: 'uint256[]'
                    },
                    {
                        internalType: 'string[]',
                        name: 'signatures',
                        type: 'string[]'
                    },
                    {
                        internalType: 'bytes[]',
                        name: 'calldatas',
                        type: 'bytes[]'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'proposalId',
                        type: 'uint256'
                    },
                    {
                        internalType: 'address',
                        name: 'voter',
                        type: 'address'
                    }
                ],
                name: 'getReceipt',
                outputs: [
                    {
                        components: [
                            {
                                internalType: 'bool',
                                name: 'hasVoted',
                                type: 'bool'
                            },
                            {
                                internalType: 'bool',
                                name: 'support',
                                type: 'bool'
                            },
                            {
                                internalType: 'uint96',
                                name: 'votes',
                                type: 'uint96'
                            }
                        ],
                        internalType: 'struct GovernorAlpha.Receipt',
                        name: '',
                        type: 'tuple'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'guardian',
                outputs: [
                    {
                        internalType: 'address',
                        name: '',
                        type: 'address'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: '',
                        type: 'address'
                    }
                ],
                name: 'latestProposalIds',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'name',
                outputs: [
                    {
                        internalType: 'string',
                        name: '',
                        type: 'string'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'proposalCount',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'proposalMaxOperations',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'pure',
                type: 'function'
            },
            {
                inputs: [],
                name: 'proposalThreshold',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'pure',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                name: 'proposals',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'id',
                        type: 'uint256'
                    },
                    {
                        internalType: 'address',
                        name: 'proposer',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'eta',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'startBlock',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'endBlock',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'forVotes',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'againstVotes',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bool',
                        name: 'canceled',
                        type: 'bool'
                    },
                    {
                        internalType: 'bool',
                        name: 'executed',
                        type: 'bool'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address[]',
                        name: 'targets',
                        type: 'address[]'
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'values',
                        type: 'uint256[]'
                    },
                    {
                        internalType: 'string[]',
                        name: 'signatures',
                        type: 'string[]'
                    },
                    {
                        internalType: 'bytes[]',
                        name: 'calldatas',
                        type: 'bytes[]'
                    },
                    {
                        internalType: 'string',
                        name: 'description',
                        type: 'string'
                    }
                ],
                name: 'propose',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'proposalId',
                        type: 'uint256'
                    }
                ],
                name: 'queue',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [],
                name: 'quorumVotes',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'pure',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'proposalId',
                        type: 'uint256'
                    }
                ],
                name: 'state',
                outputs: [
                    {
                        internalType: 'enum GovernorAlpha.ProposalState',
                        name: '',
                        type: 'uint8'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'timelock',
                outputs: [
                    {
                        internalType: 'contract TimelockInterface',
                        name: '',
                        type: 'address'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'votingDelay',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'pure',
                type: 'function'
            },
            {
                inputs: [],
                name: 'votingPeriod',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'pure',
                type: 'function'
            }
        ],
        address: {
            1: '',
            42: '0xbffC38542ad545211c28213A4cEE3598f227DC3d',
            // 42: '0x98cDa1b9C670f4530F577508b4139fA31e1BcFF0',
            31337: '',
            1337: '0xc0BFF8A9140EeB7941Fb7C9346679D938343Cb41',
            4: '0xFc036Cf4BE0C00e75A3927fEb58371970ba1b90A'
        }
    },
    comp: {
        name: 'gov',
        abi: [
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'account',
                        type: 'address'
                    }
                ],
                stateMutability: 'nonpayable',
                type: 'constructor'
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'owner',
                        type: 'address'
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'spender',
                        type: 'address'
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'amount',
                        type: 'uint256'
                    }
                ],
                name: 'Approval',
                type: 'event'
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'delegator',
                        type: 'address'
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'fromDelegate',
                        type: 'address'
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'toDelegate',
                        type: 'address'
                    }
                ],
                name: 'DelegateChanged',
                type: 'event'
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'delegate',
                        type: 'address'
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'previousBalance',
                        type: 'uint256'
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'newBalance',
                        type: 'uint256'
                    }
                ],
                name: 'DelegateVotesChanged',
                type: 'event'
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'from',
                        type: 'address'
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'to',
                        type: 'address'
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'amount',
                        type: 'uint256'
                    }
                ],
                name: 'Transfer',
                type: 'event'
            },
            {
                inputs: [],
                name: 'DELEGATION_TYPEHASH',
                outputs: [
                    {
                        internalType: 'bytes32',
                        name: '',
                        type: 'bytes32'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'DOMAIN_TYPEHASH',
                outputs: [
                    {
                        internalType: 'bytes32',
                        name: '',
                        type: 'bytes32'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'account',
                        type: 'address'
                    },
                    {
                        internalType: 'address',
                        name: 'spender',
                        type: 'address'
                    }
                ],
                name: 'allowance',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'spender',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'rawAmount',
                        type: 'uint256'
                    }
                ],
                name: 'approve',
                outputs: [
                    {
                        internalType: 'bool',
                        name: '',
                        type: 'bool'
                    }
                ],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'account',
                        type: 'address'
                    }
                ],
                name: 'balanceOf',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: '',
                        type: 'address'
                    },
                    {
                        internalType: 'uint32',
                        name: '',
                        type: 'uint32'
                    }
                ],
                name: 'checkpoints',
                outputs: [
                    {
                        internalType: 'uint32',
                        name: 'fromBlock',
                        type: 'uint32'
                    },
                    {
                        internalType: 'uint96',
                        name: 'votes',
                        type: 'uint96'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'decimals',
                outputs: [
                    {
                        internalType: 'uint8',
                        name: '',
                        type: 'uint8'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'delegatee',
                        type: 'address'
                    }
                ],
                name: 'delegate',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'delegatee',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'expiry',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint8',
                        name: 'v',
                        type: 'uint8'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'r',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes32',
                        name: 's',
                        type: 'bytes32'
                    }
                ],
                name: 'delegateBySig',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: '',
                        type: 'address'
                    }
                ],
                name: 'delegates',
                outputs: [
                    {
                        internalType: 'address',
                        name: '',
                        type: 'address'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'account',
                        type: 'address'
                    }
                ],
                name: 'getCurrentVotes',
                outputs: [
                    {
                        internalType: 'uint96',
                        name: '',
                        type: 'uint96'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'account',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'blockNumber',
                        type: 'uint256'
                    }
                ],
                name: 'getPriorVotes',
                outputs: [
                    {
                        internalType: 'uint96',
                        name: '',
                        type: 'uint96'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'name',
                outputs: [
                    {
                        internalType: 'string',
                        name: '',
                        type: 'string'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: '',
                        type: 'address'
                    }
                ],
                name: 'nonces',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: '',
                        type: 'address'
                    }
                ],
                name: 'numCheckpoints',
                outputs: [
                    {
                        internalType: 'uint32',
                        name: '',
                        type: 'uint32'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'symbol',
                outputs: [
                    {
                        internalType: 'string',
                        name: '',
                        type: 'string'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'totalSupply',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'dst',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'rawAmount',
                        type: 'uint256'
                    }
                ],
                name: 'transfer',
                outputs: [
                    {
                        internalType: 'bool',
                        name: '',
                        type: 'bool'
                    }
                ],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'src',
                        type: 'address'
                    },
                    {
                        internalType: 'address',
                        name: 'dst',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'rawAmount',
                        type: 'uint256'
                    }
                ],
                name: 'transferFrom',
                outputs: [
                    {
                        internalType: 'bool',
                        name: '',
                        type: 'bool'
                    }
                ],
                stateMutability: 'nonpayable',
                type: 'function'
            }
        ],
        address: {
            1: '',
            42: '0x71AD2957E64fa4A984e896C0C313748214f4781D',
            // 42: '0xDF54967fBfD9fB6F0B14AdB7d3b86D5454c92C04',
            31337: '',
            1337: '0x9d37F9C0Bc044B49F0f36Ab6C477d28543741173',
            4: '0x2cF601eE0f85ed519269f76E824a781542B5B5B4'
        }
    },
    quiz: {
        name: 'quiz',
        abi: [
            {
                inputs: [{ internalType: 'address', name: '_p', type: 'address' }],
                name: 'registerParticipant',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    { internalType: 'bytes32', name: '_qs', type: 'bytes32' },
                    { internalType: 'bytes32', name: '_userOpt', type: 'bytes32' },
                    { internalType: 'uint256', name: 'amount', type: 'uint256' }
                ],
                name: 'userResponse',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    { internalType: 'bytes32[]', name: '_qs', type: 'bytes32[]' },
                    { internalType: 'bytes32[]', name: '_userOpt', type: 'bytes32[]' },
                    { internalType: 'uint256[]', name: 'amount', type: 'uint256[]' }
                ],
                name: 'userResponseArray',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [
                    { internalType: 'address', name: '_usdao', type: 'address' },
                    { internalType: 'bytes32[]', name: '_qs', type: 'bytes32[]' },
                    { internalType: 'bytes32[]', name: '_ans', type: 'bytes32[]' }
                ],
                stateMutability: 'nonpayable',
                type: 'constructor'
            },
            {
                inputs: [],
                name: 'admin',
                outputs: [{ internalType: 'address', name: '', type: 'address' }],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [{ internalType: 'address', name: '_user', type: 'address' }],
                name: 'isRegistered',
                outputs: [
                    { internalType: 'bool', name: 'isUserRegistered', type: 'bool' }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
                name: 'participants',
                outputs: [{ internalType: 'address', name: '', type: 'address' }],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    { internalType: 'address', name: '', type: 'address' },
                    { internalType: 'bytes32', name: '', type: 'bytes32' }
                ],
                name: 'responses',
                outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'totalParticipants',
                outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'usdao',
                outputs: [
                    { internalType: 'contract IERC20', name: '', type: 'address' }
                ],
                stateMutability: 'view',
                type: 'function'
            }
        ],
        address: {
            1: '0x03eb7Ce2907e202bB70BAE3D7B0C588573d3cECC',
            42: '0x6DEE30518efD2d2b32D8878c494309Ee9c0A4489',
            // 42: '0xCAC1daf45199454d982B818DcC8845B8a1AEE2D9',
            31337: '0x8Ad470569f02E93B7381d568615Dc3AB07fEB3Bd',
            1337: '0x8a3b2Bc31ac6B3835E698B3446e089FE86974FB0',
            4: '0xcE8285F6D8e55BFCaA01E030695DBeFC81d26F0A'
        }
    },
    usmView: {
        name: 'USMView',
        abi: [
            {
                inputs: [
                    {
                        internalType: 'contract IUSM',
                        name: 'usm_',
                        type: 'address'
                    }
                ],
                stateMutability: 'nonpayable',
                type: 'constructor'
            },
            {
                inputs: [],
                name: 'WAD',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'bidAskAdjustment',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'adjustment',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'debtRatio',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'ratio',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'bool',
                        name: 'roundUp',
                        type: 'bool'
                    }
                ],
                name: 'ethBuffer',
                outputs: [
                    {
                        internalType: 'int256',
                        name: 'buffer',
                        type: 'int256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'ethAmount',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bool',
                        name: 'roundUp',
                        type: 'bool'
                    }
                ],
                name: 'ethToUsm',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'usmOut',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'fumToBurn',
                        type: 'uint256'
                    }
                ],
                name: 'fumDeFund',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'ethOut',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'adjShrinkFactor',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'ethIn',
                        type: 'uint256'
                    }
                ],
                name: 'fumFund',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'fumOut',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'adjGrowthFactor',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'enum IUSM.Side',
                        name: 'side',
                        type: 'uint8'
                    },
                    {
                        internalType: 'bool',
                        name: 'prefund',
                        type: 'bool'
                    }
                ],
                name: 'fumPrice',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'price',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'usm',
                outputs: [
                    {
                        internalType: 'contract IUSM',
                        name: '',
                        type: 'address'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'usmToBurn',
                        type: 'uint256'
                    }
                ],
                name: 'usmBurn',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'price',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'ethOut',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'adjGrowthFactor',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'ethIn',
                        type: 'uint256'
                    }
                ],
                name: 'usmMint',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'price',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'usmOut',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'adjShrinkFactor',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'usmAmount',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bool',
                        name: 'roundUp',
                        type: 'bool'
                    }
                ],
                name: 'usmToEth',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'ethOut',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            }
        ],
        address: {
            1: '',
            42: '0xa9F8eC6a621aD5A53f7281F80bfc1965cD95ed2f',
            // 42: '0x684592d53ae1DB855E20e10e95dC95f9F172f9d0',
            31337: '0x17219EB39ff85de43F397d030E2D687Da9e94768',
            1337: '0x725D5eA7eF06093e7a548D7Ab1C81C1a82Ee2079',
            4: '0x1555Ed6eb3ea4726F5C78E05047aF62B004dB4b9'
        }
    },
    tokenSale: {
        name: 'tokenSale',
        abi: [
            {
                "inputs": [
                    {
                        "internalType": "contract ICOMP",
                        "name": "comp_",
                        "type": "address"
                    },
                    {
                        "internalType": "contract IUSM",
                        "name": "usm_",
                        "type": "address"
                    },
                    {
                        "internalType": "contract IFUM",
                        "name": "_fum",
                        "type": "address"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "stateMutability": "payable",
                "type": "fallback"
            },
            {
                "inputs": [],
                "name": "EthPrice",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "Stop_ICO",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "_price_tokn",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "allowed",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "comp",
                "outputs": [
                    {
                        "internalType": "contract ICOMP",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "currentTotalTokens",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "end_ICO",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "ethPrice",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "foundationAddress",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "fum",
                "outputs": [
                    {
                        "internalType": "contract IFUM",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "fundUSDAOPool",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getASSETBalance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "getDAOGOVBalance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getEthBalance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "ico_enddate",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "ico_startdate",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "locked",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "no_of_tokens",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "stage",
                "outputs": [
                    {
                        "internalType": "enum TokenSale.Stages",
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "stages",
                "outputs": [
                    {
                        "internalType": "enum TokenSale.Stages",
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenPrice",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_termSale",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endsIn",
                        "type": "uint256"
                    }
                ],
                "name": "start_ICO",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "termSale",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "termSaleBal",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalTokensAvailabe",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "transferAsset",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "unlocked",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "usm",
                "outputs": [
                    {
                        "internalType": "contract IUSM",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_to",
                        "type": "address"
                    }
                ],
                "name": "withdrawAllTestAsset",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_to",
                        "type": "address"
                    }
                ],
                "name": "withdrawAllTestEth",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "stateMutability": "payable",
                "type": "receive"
            }
        ],
        address: {
            1: '',
            42: '0xFE08F3b4dfd3B921A34c275B3A2530B3FfD2Ccb6',
            // 42: '0xDF54967fBfD9fB6F0B14AdB7d3b86D5454c92C04',
            31337: '',
            1337: '0x9d37F9C0Bc044B49F0f36Ab6C477d28543741173',
            4: '0x6Fd31a85A07D16573ddCa8e0676a6A4E38d9F870'
        }
    },
    stake: {
        name: 'stake',
        abi: [
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "usmContract",
                        "type": "address"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_stakId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_nextMinute",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_status",
                        "type": "uint256"
                    }
                ],
                "name": "Claim",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "holder",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "StakeId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_startTime",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_time",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_reward",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "_stakingtype",
                        "type": "bool"
                    }
                ],
                "name": "Lock",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "Received",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_stakId",
                        "type": "uint256"
                    }
                ],
                "name": "Unlock",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "BufferPoolBalance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "TVL",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_stakId",
                        "type": "uint256"
                    }
                ],
                "name": "_calculateReward",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_stakId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "_sType",
                        "type": "bool"
                    }
                ],
                "name": "_calculateRewardF",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_stakId",
                        "type": "uint256"
                    }
                ],
                "name": "_calculateRewardauto",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_stakId",
                        "type": "uint256"
                    }
                ],
                "name": "_getLockAmount",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_stakId",
                        "type": "uint256"
                    }
                ],
                "name": "_getLockEndValidity",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_stakId",
                        "type": "uint256"
                    }
                ],
                "name": "_getLockStartValidity",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_stakId",
                        "type": "uint256"
                    }
                ],
                "name": "_getLockValidity",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "startvalidity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endValidity",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_stakId",
                        "type": "uint256"
                    }
                ],
                "name": "_getLockedData",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "startvalidity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endValidity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "_reward",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "accumulatedFee",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "accumulatedStakingFee",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "balances",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "bufferPoolContract",
                "outputs": [
                    {
                        "internalType": "contract BufferPool",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "bufferTransfer",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_stakId",
                        "type": "uint256"
                    }
                ],
                "name": "calculateReward",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "lockAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "noOfDays",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalReward",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalclaimedAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "plateformFee",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalwithdwableAmount",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_startVal",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_endVal",
                        "type": "uint256"
                    }
                ],
                "name": "calrwd",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_stakId",
                        "type": "uint256"
                    }
                ],
                "name": "claim",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getBufferPoolBalance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_stakId",
                        "type": "uint256"
                    }
                ],
                "name": "getClaimTime",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_stakId",
                        "type": "uint256"
                    }
                ],
                "name": "getLockAmount",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_stakId",
                        "type": "uint256"
                    }
                ],
                "name": "getLockEndTime",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_stakId",
                        "type": "uint256"
                    }
                ],
                "name": "getLockStartTime",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_stakId",
                        "type": "uint256"
                    }
                ],
                "name": "getLockStatus",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_stakId",
                        "type": "uint256"
                    }
                ],
                "name": "getLockType",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_stakId",
                        "type": "uint256"
                    }
                ],
                "name": "getLockValidity",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "startvalidity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endValidity",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_stakId",
                        "type": "uint256"
                    }
                ],
                "name": "getLockedData",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "startvalidity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endValidity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getNoOfweek",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getStakingUSDAOBalance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "getUSDAObalance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "stakeId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_noOfMonth",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "_stype",
                        "type": "bool"
                    }
                ],
                "name": "lock",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "noOfWeek",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "transferUSDAO",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "usm",
                "outputs": [
                    {
                        "internalType": "contract IUSM",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "stateMutability": "payable",
                "type": "receive"
            }
        ],
        address: {
            1: '',
            42: '0xFE08F3b4dfd3B921A34c275B3A2530B3FfD2Ccb6',
            // 42: '0xDF54967fBfD9fB6F0B14AdB7d3b86D5454c92C04',
            31337: '',
            1337: '0x9d37F9C0Bc044B49F0f36Ab6C477d28543741173',
            4: '0xd8E42cf157dDA4c1c1279C21B51D66c7FF1dfdEA'
        }
    },
    oracle: {
        name: 'oracle',
        abi: [
            {
                inputs: [
                    {
                        internalType: 'contract AggregatorV3Interface',
                        name: 'aggregator_',
                        type: 'address'
                    }
                ],
                stateMutability: 'nonpayable',
                type: 'constructor'
            },
            {
                inputs: [],
                name: 'CHAINLINK_SCALE_FACTOR',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'chainlinkAggregator',
                outputs: [
                    {
                        internalType: 'contract AggregatorV3Interface',
                        name: '',
                        type: 'address'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'latestPrice',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'price',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'updateTime',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'refreshPrice',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'price',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'updateTime',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                inputs: [],
                name: 'savedPrice',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [],
                name: 'savedUpdateTime',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: '',
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'p',
                        type: 'uint256'
                    }
                ],
                name: 'setPrice',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function'
            }
        ],
        address: {
            1: '',
            42: '0x9813C7032133D3730CE885e8c55eC4E6f0Af9e7c',
            // 42: '0xd395D4267806A6C9db8Ea43a6232Ee93121A1164',
            31337: '0x8893Ea797dbC00a6044430623Cb06b3474320861',
            1337: '0x34eAeF91d6a31fDC9aAeC1d58f77a32A56f471f6',
            4: '0x9D5Ea7770Fdf898eb3A13D76251E92F113fF8229'
        }
    }
};
//# sourceMappingURL=contract_details.js.map