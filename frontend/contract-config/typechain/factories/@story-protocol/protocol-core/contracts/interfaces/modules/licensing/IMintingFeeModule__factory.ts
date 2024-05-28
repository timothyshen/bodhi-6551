/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IMintingFeeModule,
  IMintingFeeModuleInterface,
} from "../../../../../../../@story-protocol/protocol-core/contracts/interfaces/modules/licensing/IMintingFeeModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "ipId",
        type: "address",
      },
      {
        internalType: "address",
        name: "licenseTemplate",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "licenseTermsId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getMintingFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IMintingFeeModule__factory {
  static readonly abi = _abi;
  static createInterface(): IMintingFeeModuleInterface {
    return new utils.Interface(_abi) as IMintingFeeModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMintingFeeModule {
    return new Contract(address, _abi, signerOrProvider) as IMintingFeeModule;
  }
}