/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IRoyaltyModule,
  IRoyaltyModuleInterface,
} from "../../../../../../../@story-protocol/protocol-core/contracts/interfaces/modules/royalty/IRoyaltyModule";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiverIpId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "payerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LicenseMintingFeePaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiverIpId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "payerIpId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RoyaltyPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "royaltyPolicy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "RoyaltyPolicyWhitelistUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "RoyaltyTokenWhitelistUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "royaltyPolicy",
        type: "address",
      },
    ],
    name: "isWhitelistedRoyaltyPolicy",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "isWhitelistedRoyaltyToken",
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
  {
    inputs: [],
    name: "licensingModule",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
        internalType: "address",
        name: "ipId",
        type: "address",
      },
      {
        internalType: "address",
        name: "royaltyPolicy",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "licenseData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "externalData",
        type: "bytes",
      },
    ],
    name: "onLicenseMinting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ipId",
        type: "address",
      },
      {
        internalType: "address",
        name: "royaltyPolicy",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "parentIpIds",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "licenseData",
        type: "bytes[]",
      },
      {
        internalType: "bytes",
        name: "externalData",
        type: "bytes",
      },
    ],
    name: "onLinkToParents",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiverIpId",
        type: "address",
      },
      {
        internalType: "address",
        name: "payerAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "licenseRoyaltyPolicy",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "payLicenseMintingFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiverIpId",
        type: "address",
      },
      {
        internalType: "address",
        name: "payerIpId",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "payRoyaltyOnBehalf",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ipId",
        type: "address",
      },
    ],
    name: "royaltyPolicies",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "licensing",
        type: "address",
      },
    ],
    name: "setLicensingModule",
    outputs: [],
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
  {
    inputs: [
      {
        internalType: "address",
        name: "royaltyPolicy",
        type: "address",
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "whitelistRoyaltyPolicy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "whitelistRoyaltyToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IRoyaltyModule__factory {
  static readonly abi = _abi;
  static createInterface(): IRoyaltyModuleInterface {
    return new utils.Interface(_abi) as IRoyaltyModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRoyaltyModule {
    return new Contract(address, _abi, signerOrProvider) as IRoyaltyModule;
  }
}
