import { ethers } from 'ethers';
import { AllFees } from '../types';
export declare const getMetaMask: () => ethers.providers.Web3Provider;
export declare const fetchInitialWeb3Data: () => Promise<{
    assetBalance: string;
    usmBalanceFormatted: string;
    etherBalanceFormatted: string;
}>;
export declare const loadAllFees: () => Promise<AllFees>;
export declare const buyUsdao: (amount: string) => Promise<void>;
export declare const sellUsdao: (amount: string, balance: string) => Promise<void>;
export declare const buyAsset: (amount: string, balance: string) => Promise<void>;
export declare const sellAsset: (amount: string, balance: string) => Promise<void>;
export declare const sendUsdao: (address: string, amount: string, balance: string) => Promise<void>;
export declare const sendAsset: (address: string, amount: string, balance: string) => Promise<void>;
//# sourceMappingURL=home-functions.d.ts.map