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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface IIPAccountStorageInterface extends utils.Interface {
  functions: {
    "getBytes(bytes32)": FunctionFragment;
    "getBytes(bytes32,bytes32)": FunctionFragment;
    "getBytes32(bytes32,bytes32)": FunctionFragment;
    "getBytes32(bytes32)": FunctionFragment;
    "setBytes(bytes32,bytes)": FunctionFragment;
    "setBytes32(bytes32,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getBytes(bytes32)"
      | "getBytes(bytes32,bytes32)"
      | "getBytes32(bytes32,bytes32)"
      | "getBytes32(bytes32)"
      | "setBytes"
      | "setBytes(bytes32,bytes)"
      | "setBytes32"
      | "setBytes32(bytes32,bytes32)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getBytes(bytes32)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBytes(bytes32,bytes32)",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBytes32(bytes32,bytes32)",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBytes32(bytes32)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setBytes",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setBytes(bytes32,bytes)",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setBytes32",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setBytes32(bytes32,bytes32)",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getBytes(bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBytes(bytes32,bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBytes32(bytes32,bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBytes32(bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBytes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBytes(bytes32,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBytes32", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBytes32(bytes32,bytes32)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IIPAccountStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IIPAccountStorageInterface;

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
    "getBytes(bytes32)"(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getBytes(bytes32,bytes32)"(
      namespace: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getBytes32(bytes32,bytes32)"(
      namespace: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getBytes32(bytes32)"(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setBytes(
      key: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setBytes(bytes32,bytes)"(
      key: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBytes32(
      key: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setBytes32(bytes32,bytes32)"(
      key: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  "getBytes(bytes32)"(
    key: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  "getBytes(bytes32,bytes32)"(
    namespace: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  "getBytes32(bytes32,bytes32)"(
    namespace: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  "getBytes32(bytes32)"(
    key: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  setBytes(
    key: PromiseOrValue<BytesLike>,
    value: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setBytes(bytes32,bytes)"(
    key: PromiseOrValue<BytesLike>,
    value: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBytes32(
    key: PromiseOrValue<BytesLike>,
    value: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setBytes32(bytes32,bytes32)"(
    key: PromiseOrValue<BytesLike>,
    value: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    "getBytes(bytes32)"(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "getBytes(bytes32,bytes32)"(
      namespace: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "getBytes32(bytes32,bytes32)"(
      namespace: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "getBytes32(bytes32)"(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    setBytes(
      key: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setBytes(bytes32,bytes)"(
      key: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setBytes32(
      key: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setBytes32(bytes32,bytes32)"(
      key: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    "getBytes(bytes32)"(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBytes(bytes32,bytes32)"(
      namespace: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBytes32(bytes32,bytes32)"(
      namespace: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBytes32(bytes32)"(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setBytes(
      key: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setBytes(bytes32,bytes)"(
      key: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBytes32(
      key: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setBytes32(bytes32,bytes32)"(
      key: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "getBytes(bytes32)"(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBytes(bytes32,bytes32)"(
      namespace: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBytes32(bytes32,bytes32)"(
      namespace: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBytes32(bytes32)"(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setBytes(
      key: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setBytes(bytes32,bytes)"(
      key: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBytes32(
      key: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setBytes32(bytes32,bytes32)"(
      key: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}