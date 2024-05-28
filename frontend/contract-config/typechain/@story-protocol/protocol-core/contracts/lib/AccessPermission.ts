/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface AccessPermissionInterface extends utils.Interface {
  functions: {
    "ABSTAIN()": FunctionFragment;
    "ALLOW()": FunctionFragment;
    "DENY()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ABSTAIN"
      | "ABSTAIN()"
      | "ALLOW"
      | "ALLOW()"
      | "DENY"
      | "DENY()"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "ABSTAIN", values?: undefined): string;
  encodeFunctionData(functionFragment: "ABSTAIN()", values?: undefined): string;
  encodeFunctionData(functionFragment: "ALLOW", values?: undefined): string;
  encodeFunctionData(functionFragment: "ALLOW()", values?: undefined): string;
  encodeFunctionData(functionFragment: "DENY", values?: undefined): string;
  encodeFunctionData(functionFragment: "DENY()", values?: undefined): string;

  decodeFunctionResult(functionFragment: "ABSTAIN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ABSTAIN()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ALLOW", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ALLOW()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "DENY", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "DENY()", data: BytesLike): Result;

  events: {};
}

export interface AccessPermission extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AccessPermissionInterface;

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
    ABSTAIN(overrides?: CallOverrides): Promise<[number]>;

    "ABSTAIN()"(overrides?: CallOverrides): Promise<[number]>;

    ALLOW(overrides?: CallOverrides): Promise<[number]>;

    "ALLOW()"(overrides?: CallOverrides): Promise<[number]>;

    DENY(overrides?: CallOverrides): Promise<[number]>;

    "DENY()"(overrides?: CallOverrides): Promise<[number]>;
  };

  ABSTAIN(overrides?: CallOverrides): Promise<number>;

  "ABSTAIN()"(overrides?: CallOverrides): Promise<number>;

  ALLOW(overrides?: CallOverrides): Promise<number>;

  "ALLOW()"(overrides?: CallOverrides): Promise<number>;

  DENY(overrides?: CallOverrides): Promise<number>;

  "DENY()"(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    ABSTAIN(overrides?: CallOverrides): Promise<number>;

    "ABSTAIN()"(overrides?: CallOverrides): Promise<number>;

    ALLOW(overrides?: CallOverrides): Promise<number>;

    "ALLOW()"(overrides?: CallOverrides): Promise<number>;

    DENY(overrides?: CallOverrides): Promise<number>;

    "DENY()"(overrides?: CallOverrides): Promise<number>;
  };

  filters: {};

  estimateGas: {
    ABSTAIN(overrides?: CallOverrides): Promise<BigNumber>;

    "ABSTAIN()"(overrides?: CallOverrides): Promise<BigNumber>;

    ALLOW(overrides?: CallOverrides): Promise<BigNumber>;

    "ALLOW()"(overrides?: CallOverrides): Promise<BigNumber>;

    DENY(overrides?: CallOverrides): Promise<BigNumber>;

    "DENY()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ABSTAIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ABSTAIN()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ALLOW(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ALLOW()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DENY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "DENY()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}