interface Input {
    indexed?: boolean;
    internalType: string;
    name: string;
    type: string;
    components?: Array<any>;
}
interface Output extends Input {
    components?: Array<Input>;
}
interface Abi {
    anonymous?: boolean;
    inputs: Array<Input>;
    stateMutability?: string;
    type: string;
    name?: string;
    outputs?: Array<Output>;
}
interface AbiWithoutInputs {
    anonymous?: boolean;
    inputs?: Array<Input>;
    stateMutability?: string;
    type: string;
    name?: string;
    outputs?: Array<Output>;
}
interface Address {
    [key: string]: any;
}
export declare type FetchStakedAmountFN = {
    chk: any;
    loggedInAddress: string;
    unchk: any;
    StakeContract: any;
    claim: any;
};
export declare type StakeData = {
    address: any;
    amount: string;
    timeperiod: number;
    rewardtimeperiod: string;
    unixdate: number;
    stakingType: any;
    startTime: string;
    StakeId: number;
    claimed: boolean;
    claim_enableTime: string;
};
export declare type PromiseFeesType = [
    number,
    string,
    number,
    number,
    number,
    string,
    string,
    string
];
export declare type AllFees = {
    supply: {
        govSupply: string;
        assetSupply: string;
        usmSupply: string;
    };
    prices: {
        stakedBalance: number;
        debtRatio: string;
        marketPrice: number;
        totalBuffer: number;
        totalCollateral: number;
    };
};
export type { Abi, Input, Address, AbiWithoutInputs };
//# sourceMappingURL=common.d.ts.map