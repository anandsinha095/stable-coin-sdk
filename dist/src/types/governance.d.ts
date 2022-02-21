import { AbiWithoutInputs, Address } from '.';
import { Abi } from './common';
interface ContractType {
    name: string;
    abi: Array<Abi>;
    address: Address;
}
interface UsmContractType {
    name: string;
    abi: Array<AbiWithoutInputs>;
    address: Address;
}
interface FeesType {
    burnFee: number;
    mintFee: number;
    transferFee: number;
    transactionFee: number;
    defundFee: number;
}
export type { ContractType, UsmContractType, FeesType };
//# sourceMappingURL=governance.d.ts.map