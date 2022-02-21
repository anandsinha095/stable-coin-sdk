import { ethers } from 'ethers';
import { StakeData } from '../types';
export declare const fetchAvailableBalance: () => Promise<string>;
export declare const TVLAmount: () => Promise<string>;
export declare const fetchStakedAmount: () => Promise<string>;
export declare const fetchStakedRewards: () => Promise<string>;
export declare const ClaimTable: () => Promise<StakeData[]>;
export declare const fetchRewardPercent: () => Promise<number>;
export declare const stakeUsdao: (date: string, amount: string, autoStaked: boolean, availablebalance: string) => Promise<ethers.Contract>;
export declare const claimUsdao: (StakeId: number) => Promise<ethers.Contract>;
//# sourceMappingURL=staking.d.ts.map