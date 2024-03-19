/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
} from "../../common";

export interface RightsManagementFactoryInterface extends utils.Interface {
  functions: {
    "AccessTokenRightsManagement(address)": FunctionFragment;
    "createAccessManagement()": FunctionFragment;
    "owner()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "AccessTokenRightsManagement"
      | "AccessTokenRightsManagement(address)"
      | "createAccessManagement"
      | "createAccessManagement()"
      | "owner"
      | "owner()"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "AccessTokenRightsManagement",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "AccessTokenRightsManagement(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "createAccessManagement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createAccessManagement()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner()", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "AccessTokenRightsManagement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AccessTokenRightsManagement(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAccessManagement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAccessManagement()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;

  events: {
    "NewRightsManagement(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewRightsManagement"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "NewRightsManagement(address)"
  ): EventFragment;
}

export interface NewRightsManagementEventObject {
  rightsManagement: string;
}
export type NewRightsManagementEvent = TypedEvent<
  [string],
  NewRightsManagementEventObject
>;

export type NewRightsManagementEventFilter =
  TypedEventFilter<NewRightsManagementEvent>;

export interface RightsManagementFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RightsManagementFactoryInterface;

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
    AccessTokenRightsManagement(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "AccessTokenRightsManagement(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    createAccessManagement(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "createAccessManagement()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;
  };

  AccessTokenRightsManagement(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  "AccessTokenRightsManagement(address)"(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  createAccessManagement(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "createAccessManagement()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    AccessTokenRightsManagement(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    "AccessTokenRightsManagement(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    createAccessManagement(overrides?: CallOverrides): Promise<string>;

    "createAccessManagement()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "NewRightsManagement(address)"(
      rightsManagement?: PromiseOrValue<string> | null
    ): NewRightsManagementEventFilter;
    NewRightsManagement(
      rightsManagement?: PromiseOrValue<string> | null
    ): NewRightsManagementEventFilter;
  };

  estimateGas: {
    AccessTokenRightsManagement(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "AccessTokenRightsManagement(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createAccessManagement(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "createAccessManagement()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    AccessTokenRightsManagement(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "AccessTokenRightsManagement(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createAccessManagement(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "createAccessManagement()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
