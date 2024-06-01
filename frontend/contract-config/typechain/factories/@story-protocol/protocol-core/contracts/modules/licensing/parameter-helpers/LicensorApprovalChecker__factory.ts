/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  LicensorApprovalChecker,
  LicensorApprovalCheckerInterface,
} from "../../../../../../../@story-protocol/protocol-core/contracts/modules/licensing/parameter-helpers/LicensorApprovalChecker";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "ipAccount",
        type: "address",
      },
    ],
    name: "AccessControlled__NotIpAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "AccessControlled__ZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "licenseTermsId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "ipId",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "DerivativeApproved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [],
    name: "ACCESS_CONTROLLER",
    outputs: [
      {
        internalType: "contract IAccessController",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "IP_ACCOUNT_REGISTRY",
    outputs: [
      {
        internalType: "contract IIPAccountRegistry",
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
        name: "parentIpId",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "licenseTermsId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "childIpId",
        type: "address",
      },
    ],
    name: "isDerivativeApproved",
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
        name: "parentIpId",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "licenseTermsId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "childIpId",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class LicensorApprovalChecker__factory {
  static readonly abi = _abi;
  static createInterface(): LicensorApprovalCheckerInterface {
    return new utils.Interface(_abi) as LicensorApprovalCheckerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LicensorApprovalChecker {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LicensorApprovalChecker;
  }
}
