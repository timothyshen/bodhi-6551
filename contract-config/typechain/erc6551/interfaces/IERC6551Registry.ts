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
} from "../../common";

export interface IERC6551RegistryInterface extends utils.Interface {
  functions: {
    "account(address,bytes32,uint256,address,uint256)": FunctionFragment;
    "createAccount(address,bytes32,uint256,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "account"
      | "account(address,bytes32,uint256,address,uint256)"
      | "createAccount"
      | "createAccount(address,bytes32,uint256,address,uint256)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "account",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "account(address,bytes32,uint256,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createAccount",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createAccount(address,bytes32,uint256,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "account", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "account(address,bytes32,uint256,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAccount(address,bytes32,uint256,address,uint256)",
    data: BytesLike
  ): Result;

  events: {
    "ERC6551AccountCreated(address,address,bytes32,uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ERC6551AccountCreated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ERC6551AccountCreated(address,address,bytes32,uint256,address,uint256)"
  ): EventFragment;
}

export interface ERC6551AccountCreatedEventObject {
  account: string;
  implementation: string;
  salt: string;
  chainId: BigNumber;
  tokenContract: string;
  tokenId: BigNumber;
}
export type ERC6551AccountCreatedEvent = TypedEvent<
  [string, string, string, BigNumber, string, BigNumber],
  ERC6551AccountCreatedEventObject
>;

export type ERC6551AccountCreatedEventFilter =
  TypedEventFilter<ERC6551AccountCreatedEvent>;

export interface IERC6551Registry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC6551RegistryInterface;

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
    account(
      implementation: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { account: string }>;

    "account(address,bytes32,uint256,address,uint256)"(
      implementation: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { account: string }>;

    createAccount(
      implementation: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "createAccount(address,bytes32,uint256,address,uint256)"(
      implementation: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  account(
    implementation: PromiseOrValue<string>,
    salt: PromiseOrValue<BytesLike>,
    chainId: PromiseOrValue<BigNumberish>,
    tokenContract: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "account(address,bytes32,uint256,address,uint256)"(
    implementation: PromiseOrValue<string>,
    salt: PromiseOrValue<BytesLike>,
    chainId: PromiseOrValue<BigNumberish>,
    tokenContract: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  createAccount(
    implementation: PromiseOrValue<string>,
    salt: PromiseOrValue<BytesLike>,
    chainId: PromiseOrValue<BigNumberish>,
    tokenContract: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "createAccount(address,bytes32,uint256,address,uint256)"(
    implementation: PromiseOrValue<string>,
    salt: PromiseOrValue<BytesLike>,
    chainId: PromiseOrValue<BigNumberish>,
    tokenContract: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    account(
      implementation: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "account(address,bytes32,uint256,address,uint256)"(
      implementation: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    createAccount(
      implementation: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "createAccount(address,bytes32,uint256,address,uint256)"(
      implementation: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "ERC6551AccountCreated(address,address,bytes32,uint256,address,uint256)"(
      account?: null,
      implementation?: PromiseOrValue<string> | null,
      salt?: null,
      chainId?: null,
      tokenContract?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): ERC6551AccountCreatedEventFilter;
    ERC6551AccountCreated(
      account?: null,
      implementation?: PromiseOrValue<string> | null,
      salt?: null,
      chainId?: null,
      tokenContract?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): ERC6551AccountCreatedEventFilter;
  };

  estimateGas: {
    account(
      implementation: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "account(address,bytes32,uint256,address,uint256)"(
      implementation: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createAccount(
      implementation: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "createAccount(address,bytes32,uint256,address,uint256)"(
      implementation: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    account(
      implementation: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "account(address,bytes32,uint256,address,uint256)"(
      implementation: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createAccount(
      implementation: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "createAccount(address,bytes32,uint256,address,uint256)"(
      implementation: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}