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
} from "../../../../common";

export interface IPAccountRegistryInterface extends utils.Interface {
  functions: {
    "ERC6551_PUBLIC_REGISTRY()": FunctionFragment;
    "IP_ACCOUNT_IMPL()": FunctionFragment;
    "IP_ACCOUNT_SALT()": FunctionFragment;
    "getIPAccountImpl()": FunctionFragment;
    "ipAccount(uint256,address,uint256)": FunctionFragment;
    "registerIpAccount(uint256,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ERC6551_PUBLIC_REGISTRY"
      | "ERC6551_PUBLIC_REGISTRY()"
      | "IP_ACCOUNT_IMPL"
      | "IP_ACCOUNT_IMPL()"
      | "IP_ACCOUNT_SALT"
      | "IP_ACCOUNT_SALT()"
      | "getIPAccountImpl"
      | "getIPAccountImpl()"
      | "ipAccount"
      | "ipAccount(uint256,address,uint256)"
      | "registerIpAccount"
      | "registerIpAccount(uint256,address,uint256)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ERC6551_PUBLIC_REGISTRY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ERC6551_PUBLIC_REGISTRY()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IP_ACCOUNT_IMPL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IP_ACCOUNT_IMPL()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IP_ACCOUNT_SALT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IP_ACCOUNT_SALT()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getIPAccountImpl",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getIPAccountImpl()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ipAccount",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "ipAccount(uint256,address,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "registerIpAccount",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "registerIpAccount(uint256,address,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "ERC6551_PUBLIC_REGISTRY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ERC6551_PUBLIC_REGISTRY()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IP_ACCOUNT_IMPL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IP_ACCOUNT_IMPL()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IP_ACCOUNT_SALT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IP_ACCOUNT_SALT()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIPAccountImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIPAccountImpl()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ipAccount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ipAccount(uint256,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerIpAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerIpAccount(uint256,address,uint256)",
    data: BytesLike
  ): Result;

  events: {
    "IPAccountRegistered(address,address,uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "IPAccountRegistered"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "IPAccountRegistered(address,address,uint256,address,uint256)"
  ): EventFragment;
}

export interface IPAccountRegisteredEventObject {
  account: string;
  implementation: string;
  chainId: BigNumber;
  tokenContract: string;
  tokenId: BigNumber;
}
export type IPAccountRegisteredEvent = TypedEvent<
  [string, string, BigNumber, string, BigNumber],
  IPAccountRegisteredEventObject
>;

export type IPAccountRegisteredEventFilter =
  TypedEventFilter<IPAccountRegisteredEvent>;

export interface IPAccountRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPAccountRegistryInterface;

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
    ERC6551_PUBLIC_REGISTRY(overrides?: CallOverrides): Promise<[string]>;

    "ERC6551_PUBLIC_REGISTRY()"(overrides?: CallOverrides): Promise<[string]>;

    IP_ACCOUNT_IMPL(overrides?: CallOverrides): Promise<[string]>;

    "IP_ACCOUNT_IMPL()"(overrides?: CallOverrides): Promise<[string]>;

    IP_ACCOUNT_SALT(overrides?: CallOverrides): Promise<[string]>;

    "IP_ACCOUNT_SALT()"(overrides?: CallOverrides): Promise<[string]>;

    getIPAccountImpl(overrides?: CallOverrides): Promise<[string]>;

    "getIPAccountImpl()"(overrides?: CallOverrides): Promise<[string]>;

    ipAccount(
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "ipAccount(uint256,address,uint256)"(
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    registerIpAccount(
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "registerIpAccount(uint256,address,uint256)"(
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  ERC6551_PUBLIC_REGISTRY(overrides?: CallOverrides): Promise<string>;

  "ERC6551_PUBLIC_REGISTRY()"(overrides?: CallOverrides): Promise<string>;

  IP_ACCOUNT_IMPL(overrides?: CallOverrides): Promise<string>;

  "IP_ACCOUNT_IMPL()"(overrides?: CallOverrides): Promise<string>;

  IP_ACCOUNT_SALT(overrides?: CallOverrides): Promise<string>;

  "IP_ACCOUNT_SALT()"(overrides?: CallOverrides): Promise<string>;

  getIPAccountImpl(overrides?: CallOverrides): Promise<string>;

  "getIPAccountImpl()"(overrides?: CallOverrides): Promise<string>;

  ipAccount(
    chainId: PromiseOrValue<BigNumberish>,
    tokenContract: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "ipAccount(uint256,address,uint256)"(
    chainId: PromiseOrValue<BigNumberish>,
    tokenContract: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  registerIpAccount(
    chainId: PromiseOrValue<BigNumberish>,
    tokenContract: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "registerIpAccount(uint256,address,uint256)"(
    chainId: PromiseOrValue<BigNumberish>,
    tokenContract: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ERC6551_PUBLIC_REGISTRY(overrides?: CallOverrides): Promise<string>;

    "ERC6551_PUBLIC_REGISTRY()"(overrides?: CallOverrides): Promise<string>;

    IP_ACCOUNT_IMPL(overrides?: CallOverrides): Promise<string>;

    "IP_ACCOUNT_IMPL()"(overrides?: CallOverrides): Promise<string>;

    IP_ACCOUNT_SALT(overrides?: CallOverrides): Promise<string>;

    "IP_ACCOUNT_SALT()"(overrides?: CallOverrides): Promise<string>;

    getIPAccountImpl(overrides?: CallOverrides): Promise<string>;

    "getIPAccountImpl()"(overrides?: CallOverrides): Promise<string>;

    ipAccount(
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "ipAccount(uint256,address,uint256)"(
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    registerIpAccount(
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "registerIpAccount(uint256,address,uint256)"(
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "IPAccountRegistered(address,address,uint256,address,uint256)"(
      account?: PromiseOrValue<string> | null,
      implementation?: PromiseOrValue<string> | null,
      chainId?: PromiseOrValue<BigNumberish> | null,
      tokenContract?: null,
      tokenId?: null
    ): IPAccountRegisteredEventFilter;
    IPAccountRegistered(
      account?: PromiseOrValue<string> | null,
      implementation?: PromiseOrValue<string> | null,
      chainId?: PromiseOrValue<BigNumberish> | null,
      tokenContract?: null,
      tokenId?: null
    ): IPAccountRegisteredEventFilter;
  };

  estimateGas: {
    ERC6551_PUBLIC_REGISTRY(overrides?: CallOverrides): Promise<BigNumber>;

    "ERC6551_PUBLIC_REGISTRY()"(overrides?: CallOverrides): Promise<BigNumber>;

    IP_ACCOUNT_IMPL(overrides?: CallOverrides): Promise<BigNumber>;

    "IP_ACCOUNT_IMPL()"(overrides?: CallOverrides): Promise<BigNumber>;

    IP_ACCOUNT_SALT(overrides?: CallOverrides): Promise<BigNumber>;

    "IP_ACCOUNT_SALT()"(overrides?: CallOverrides): Promise<BigNumber>;

    getIPAccountImpl(overrides?: CallOverrides): Promise<BigNumber>;

    "getIPAccountImpl()"(overrides?: CallOverrides): Promise<BigNumber>;

    ipAccount(
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "ipAccount(uint256,address,uint256)"(
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerIpAccount(
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "registerIpAccount(uint256,address,uint256)"(
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ERC6551_PUBLIC_REGISTRY(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ERC6551_PUBLIC_REGISTRY()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IP_ACCOUNT_IMPL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "IP_ACCOUNT_IMPL()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IP_ACCOUNT_SALT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "IP_ACCOUNT_SALT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIPAccountImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getIPAccountImpl()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ipAccount(
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ipAccount(uint256,address,uint256)"(
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerIpAccount(
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "registerIpAccount(uint256,address,uint256)"(
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
