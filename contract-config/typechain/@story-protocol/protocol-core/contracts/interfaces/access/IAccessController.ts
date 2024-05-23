/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../common";

export declare namespace AccessPermission {
  export type PermissionStruct = {
    ipAccount: PromiseOrValue<string>;
    signer: PromiseOrValue<string>;
    to: PromiseOrValue<string>;
    func: PromiseOrValue<BytesLike>;
    permission: PromiseOrValue<BigNumberish>;
  };

  export type PermissionStructOutput = [
    string,
    string,
    string,
    string,
    number
  ] & {
    ipAccount: string;
    signer: string;
    to: string;
    func: string;
    permission: number;
  };
}

export interface IAccessControllerInterface extends utils.Interface {
  functions: {
    "checkPermission(address,address,address,bytes4)": FunctionFragment;
    "getPermission(address,address,address,bytes4)": FunctionFragment;
    "setBatchPermissions((address,address,address,bytes4,uint8)[])": FunctionFragment;
    "setPermission(address,address,address,bytes4,uint8)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "checkPermission"
      | "checkPermission(address,address,address,bytes4)"
      | "getPermission"
      | "getPermission(address,address,address,bytes4)"
      | "setBatchPermissions"
      | "setBatchPermissions((address,address,address,bytes4,uint8)[])"
      | "setPermission"
      | "setPermission(address,address,address,bytes4,uint8)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "checkPermission",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "checkPermission(address,address,address,bytes4)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getPermission",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getPermission(address,address,address,bytes4)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setBatchPermissions",
    values: [AccessPermission.PermissionStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setBatchPermissions((address,address,address,bytes4,uint8)[])",
    values: [AccessPermission.PermissionStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setPermission",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setPermission(address,address,address,bytes4,uint8)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkPermission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkPermission(address,address,address,bytes4)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPermission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPermission(address,address,address,bytes4)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBatchPermissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBatchPermissions((address,address,address,bytes4,uint8)[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPermission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPermission(address,address,address,bytes4,uint8)",
    data: BytesLike
  ): Result;

  events: {
    "PermissionSet(address,address,address,address,bytes4,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PermissionSet"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "PermissionSet(address,address,address,address,bytes4,uint8)"
  ): EventFragment;
}

export interface PermissionSetEventObject {
  ipAccountOwner: string;
  ipAccount: string;
  signer: string;
  to: string;
  func: string;
  permission: number;
}
export type PermissionSetEvent = TypedEvent<
  [string, string, string, string, string, number],
  PermissionSetEventObject
>;

export type PermissionSetEventFilter = TypedEventFilter<PermissionSetEvent>;

export interface IAccessController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAccessControllerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    checkPermission(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "checkPermission(address,address,address,bytes4)"(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    getPermission(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    "getPermission(address,address,address,bytes4)"(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    setBatchPermissions(
      permissions: AccessPermission.PermissionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setBatchPermissions((address,address,address,bytes4,uint8)[])"(
      permissions: AccessPermission.PermissionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPermission(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      permission: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setPermission(address,address,address,bytes4,uint8)"(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      permission: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  checkPermission(
    ipAccount: PromiseOrValue<string>,
    signer: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    func: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<void>;

  "checkPermission(address,address,address,bytes4)"(
    ipAccount: PromiseOrValue<string>,
    signer: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    func: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<void>;

  getPermission(
    ipAccount: PromiseOrValue<string>,
    signer: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    func: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<number>;

  "getPermission(address,address,address,bytes4)"(
    ipAccount: PromiseOrValue<string>,
    signer: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    func: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<number>;

  setBatchPermissions(
    permissions: AccessPermission.PermissionStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setBatchPermissions((address,address,address,bytes4,uint8)[])"(
    permissions: AccessPermission.PermissionStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPermission(
    ipAccount: PromiseOrValue<string>,
    signer: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    func: PromiseOrValue<BytesLike>,
    permission: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setPermission(address,address,address,bytes4,uint8)"(
    ipAccount: PromiseOrValue<string>,
    signer: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    func: PromiseOrValue<BytesLike>,
    permission: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    checkPermission(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    "checkPermission(address,address,address,bytes4)"(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    getPermission(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<number>;

    "getPermission(address,address,address,bytes4)"(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<number>;

    setBatchPermissions(
      permissions: AccessPermission.PermissionStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setBatchPermissions((address,address,address,bytes4,uint8)[])"(
      permissions: AccessPermission.PermissionStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    setPermission(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      permission: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setPermission(address,address,address,bytes4,uint8)"(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      permission: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "PermissionSet(address,address,address,address,bytes4,uint8)"(
      ipAccountOwner?: null,
      ipAccount?: PromiseOrValue<string> | null,
      signer?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      func?: null,
      permission?: null
    ): PermissionSetEventFilter;
    PermissionSet(
      ipAccountOwner?: null,
      ipAccount?: PromiseOrValue<string> | null,
      signer?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      func?: null,
      permission?: null
    ): PermissionSetEventFilter;
  };

  estimateGas: {
    checkPermission(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkPermission(address,address,address,bytes4)"(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPermission(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPermission(address,address,address,bytes4)"(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setBatchPermissions(
      permissions: AccessPermission.PermissionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setBatchPermissions((address,address,address,bytes4,uint8)[])"(
      permissions: AccessPermission.PermissionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPermission(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      permission: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setPermission(address,address,address,bytes4,uint8)"(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      permission: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkPermission(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkPermission(address,address,address,bytes4)"(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPermission(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPermission(address,address,address,bytes4)"(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setBatchPermissions(
      permissions: AccessPermission.PermissionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setBatchPermissions((address,address,address,bytes4,uint8)[])"(
      permissions: AccessPermission.PermissionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPermission(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      permission: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setPermission(address,address,address,bytes4,uint8)"(
      ipAccount: PromiseOrValue<string>,
      signer: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      permission: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
