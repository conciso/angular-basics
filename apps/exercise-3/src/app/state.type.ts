import { SupplyContract } from './supply-contracts/supply-contracts.type';

export interface SupplyContractState { contract: SupplyContract | undefined; }

export const initialState: SupplyContractState = {
  contract: undefined
};
