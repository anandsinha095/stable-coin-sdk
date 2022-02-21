import { FeesType } from '../types';
declare global {
    interface Window {
        compContract: any;
        ethereum: any;
        web3: any;
        usm: any;
    }
}
declare const Governance: {
    createProposal: (targets: string, values: any, signatures: string, calldatas: any, description: string) => Promise<number>;
    loadProposals: (proposalIds: Array<number>) => Promise<any>;
    loadProposalStates: (proposalIds: Array<number>) => Promise<Array<any>>;
    initiateGovernance: (infuraUrl: string) => Promise<{
        provider: any;
        signer: any;
        network: any;
        infura_provider: any;
    }>;
    createDelegate: (delegateLink: string) => Promise<any>;
    loadFees: () => Promise<FeesType | {}>;
    fetchDelegateVotes: () => Promise<number>;
    voteProposal: (contractId: string, approvalState: boolean) => Promise<any>;
    queueProposal: (contractId: string) => Promise<any>;
    executeProposal: (contractId: string) => Promise<any>;
    network: any;
    signer: any;
    infura_provider: any;
    provider: any;
};
export { Governance };
//# sourceMappingURL=governance.d.ts.map