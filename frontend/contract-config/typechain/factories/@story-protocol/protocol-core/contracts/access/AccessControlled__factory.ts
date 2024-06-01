/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  AccessControlled,
  AccessControlledInterface,
} from "../../../../../@story-protocol/protocol-core/contracts/access/AccessControlled";

const _abi = [
  {
    inputs: [],
    name: "AccessControlled__ZeroAddress",
    type: "error",
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
] as const;

export class AccessControlled__factory {
  static readonly abi = _abi;
  static createInterface(): AccessControlledInterface {
    return new utils.Interface(_abi) as AccessControlledInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccessControlled {
    return new Contract(address, _abi, signerOrProvider) as AccessControlled;
  }
}
