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
} from "../../../../../../common";

export interface ILicenseTemplateInterface extends utils.Interface {
  functions: {
    "exists(uint256)": FunctionFragment;
    "getEarlierExpireTime(uint256[],uint256)": FunctionFragment;
    "getExpireTime(uint256,uint256)": FunctionFragment;
    "getLicenseTermsURI(uint256)": FunctionFragment;
    "getMetadataURI()": FunctionFragment;
    "getRoyaltyPolicy(uint256)": FunctionFragment;
    "isLicenseTransferable(uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "toJson(uint256)": FunctionFragment;
    "totalRegisteredLicenseTerms()": FunctionFragment;
    "verifyCompatibleLicenses(uint256[])": FunctionFragment;
    "verifyMintLicenseToken(uint256,address,address,uint256)": FunctionFragment;
    "verifyRegisterDerivative(address,address,uint256,address)": FunctionFragment;
    "verifyRegisterDerivativeForAllParents(address,address[],uint256[],address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "exists"
      | "exists(uint256)"
      | "getEarlierExpireTime"
      | "getEarlierExpireTime(uint256[],uint256)"
      | "getExpireTime"
      | "getExpireTime(uint256,uint256)"
      | "getLicenseTermsURI"
      | "getLicenseTermsURI(uint256)"
      | "getMetadataURI"
      | "getMetadataURI()"
      | "getRoyaltyPolicy"
      | "getRoyaltyPolicy(uint256)"
      | "isLicenseTransferable"
      | "isLicenseTransferable(uint256)"
      | "name"
      | "name()"
      | "supportsInterface"
      | "supportsInterface(bytes4)"
      | "toJson"
      | "toJson(uint256)"
      | "totalRegisteredLicenseTerms"
      | "totalRegisteredLicenseTerms()"
      | "verifyCompatibleLicenses"
      | "verifyCompatibleLicenses(uint256[])"
      | "verifyMintLicenseToken"
      | "verifyMintLicenseToken(uint256,address,address,uint256)"
      | "verifyRegisterDerivative"
      | "verifyRegisterDerivative(address,address,uint256,address)"
      | "verifyRegisterDerivativeForAllParents"
      | "verifyRegisterDerivativeForAllParents(address,address[],uint256[],address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "exists",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "exists(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getEarlierExpireTime",
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getEarlierExpireTime(uint256[],uint256)",
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getExpireTime",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getExpireTime(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getLicenseTermsURI",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getLicenseTermsURI(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMetadataURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMetadataURI()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoyaltyPolicy",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoyaltyPolicy(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isLicenseTransferable",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isLicenseTransferable(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "name()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface(bytes4)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "toJson",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "toJson(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalRegisteredLicenseTerms",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalRegisteredLicenseTerms()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "verifyCompatibleLicenses",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyCompatibleLicenses(uint256[])",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyMintLicenseToken",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyMintLicenseToken(uint256,address,address,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyRegisterDerivative",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyRegisterDerivative(address,address,uint256,address)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyRegisterDerivativeForAllParents",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyRegisterDerivativeForAllParents(address,address[],uint256[],address)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exists(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEarlierExpireTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEarlierExpireTime(uint256[],uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExpireTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExpireTime(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLicenseTermsURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLicenseTermsURI(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMetadataURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMetadataURI()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoyaltyPolicy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoyaltyPolicy(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isLicenseTransferable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isLicenseTransferable(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface(bytes4)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "toJson", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "toJson(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalRegisteredLicenseTerms",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalRegisteredLicenseTerms()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyCompatibleLicenses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyCompatibleLicenses(uint256[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyMintLicenseToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyMintLicenseToken(uint256,address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyRegisterDerivative",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyRegisterDerivative(address,address,uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyRegisterDerivativeForAllParents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyRegisterDerivativeForAllParents(address,address[],uint256[],address)",
    data: BytesLike
  ): Result;

  events: {
    "LicenseTermsRegistered(uint256,address,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LicenseTermsRegistered"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "LicenseTermsRegistered(uint256,address,bytes)"
  ): EventFragment;
}

export interface LicenseTermsRegisteredEventObject {
  licenseTermsId: BigNumber;
  licenseTemplate: string;
  licenseTerms: string;
}
export type LicenseTermsRegisteredEvent = TypedEvent<
  [BigNumber, string, string],
  LicenseTermsRegisteredEventObject
>;

export type LicenseTermsRegisteredEventFilter =
  TypedEventFilter<LicenseTermsRegisteredEvent>;

export interface ILicenseTemplate extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ILicenseTemplateInterface;

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
    exists(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "exists(uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getEarlierExpireTime(
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      start: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getEarlierExpireTime(uint256[],uint256)"(
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      start: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getExpireTime(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      start: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getExpireTime(uint256,uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      start: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getLicenseTermsURI(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getLicenseTermsURI(uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getMetadataURI(overrides?: CallOverrides): Promise<[string]>;

    "getMetadataURI()"(overrides?: CallOverrides): Promise<[string]>;

    getRoyaltyPolicy(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, string] & {
        royaltyPolicy: string;
        royaltyData: string;
        mintingLicenseFee: BigNumber;
        currencyToken: string;
      }
    >;

    "getRoyaltyPolicy(uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, string] & {
        royaltyPolicy: string;
        royaltyData: string;
        mintingLicenseFee: BigNumber;
        currencyToken: string;
      }
    >;

    isLicenseTransferable(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isLicenseTransferable(uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    "name()"(overrides?: CallOverrides): Promise<[string]>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsInterface(bytes4)"(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    toJson(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "toJson(uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    totalRegisteredLicenseTerms(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "totalRegisteredLicenseTerms()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    verifyCompatibleLicenses(
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "verifyCompatibleLicenses(uint256[])"(
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    verifyMintLicenseToken(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      licensee: PromiseOrValue<string>,
      licensorIpId: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "verifyMintLicenseToken(uint256,address,address,uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      licensee: PromiseOrValue<string>,
      licensorIpId: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verifyRegisterDerivative(
      childIpId: PromiseOrValue<string>,
      parentIpId: PromiseOrValue<string>,
      licenseTermsId: PromiseOrValue<BigNumberish>,
      licensee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "verifyRegisterDerivative(address,address,uint256,address)"(
      childIpId: PromiseOrValue<string>,
      parentIpId: PromiseOrValue<string>,
      licenseTermsId: PromiseOrValue<BigNumberish>,
      licensee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verifyRegisterDerivativeForAllParents(
      childIpId: PromiseOrValue<string>,
      parentIpId: PromiseOrValue<string>[],
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      childIpOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "verifyRegisterDerivativeForAllParents(address,address[],uint256[],address)"(
      childIpId: PromiseOrValue<string>,
      parentIpId: PromiseOrValue<string>[],
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      childIpOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  exists(
    licenseTermsId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "exists(uint256)"(
    licenseTermsId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getEarlierExpireTime(
    licenseTermsIds: PromiseOrValue<BigNumberish>[],
    start: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getEarlierExpireTime(uint256[],uint256)"(
    licenseTermsIds: PromiseOrValue<BigNumberish>[],
    start: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getExpireTime(
    licenseTermsId: PromiseOrValue<BigNumberish>,
    start: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getExpireTime(uint256,uint256)"(
    licenseTermsId: PromiseOrValue<BigNumberish>,
    start: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getLicenseTermsURI(
    licenseTermsId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "getLicenseTermsURI(uint256)"(
    licenseTermsId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getMetadataURI(overrides?: CallOverrides): Promise<string>;

  "getMetadataURI()"(overrides?: CallOverrides): Promise<string>;

  getRoyaltyPolicy(
    licenseTermsId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, string] & {
      royaltyPolicy: string;
      royaltyData: string;
      mintingLicenseFee: BigNumber;
      currencyToken: string;
    }
  >;

  "getRoyaltyPolicy(uint256)"(
    licenseTermsId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, string] & {
      royaltyPolicy: string;
      royaltyData: string;
      mintingLicenseFee: BigNumber;
      currencyToken: string;
    }
  >;

  isLicenseTransferable(
    licenseTermsId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isLicenseTransferable(uint256)"(
    licenseTermsId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  toJson(
    licenseTermsId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "toJson(uint256)"(
    licenseTermsId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  totalRegisteredLicenseTerms(overrides?: CallOverrides): Promise<BigNumber>;

  "totalRegisteredLicenseTerms()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  verifyCompatibleLicenses(
    licenseTermsIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  "verifyCompatibleLicenses(uint256[])"(
    licenseTermsIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifyMintLicenseToken(
    licenseTermsId: PromiseOrValue<BigNumberish>,
    licensee: PromiseOrValue<string>,
    licensorIpId: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "verifyMintLicenseToken(uint256,address,address,uint256)"(
    licenseTermsId: PromiseOrValue<BigNumberish>,
    licensee: PromiseOrValue<string>,
    licensorIpId: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verifyRegisterDerivative(
    childIpId: PromiseOrValue<string>,
    parentIpId: PromiseOrValue<string>,
    licenseTermsId: PromiseOrValue<BigNumberish>,
    licensee: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "verifyRegisterDerivative(address,address,uint256,address)"(
    childIpId: PromiseOrValue<string>,
    parentIpId: PromiseOrValue<string>,
    licenseTermsId: PromiseOrValue<BigNumberish>,
    licensee: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verifyRegisterDerivativeForAllParents(
    childIpId: PromiseOrValue<string>,
    parentIpId: PromiseOrValue<string>[],
    licenseTermsIds: PromiseOrValue<BigNumberish>[],
    childIpOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "verifyRegisterDerivativeForAllParents(address,address[],uint256[],address)"(
    childIpId: PromiseOrValue<string>,
    parentIpId: PromiseOrValue<string>[],
    licenseTermsIds: PromiseOrValue<BigNumberish>[],
    childIpOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    exists(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "exists(uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getEarlierExpireTime(
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      start: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getEarlierExpireTime(uint256[],uint256)"(
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      start: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getExpireTime(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      start: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getExpireTime(uint256,uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      start: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLicenseTermsURI(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "getLicenseTermsURI(uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getMetadataURI(overrides?: CallOverrides): Promise<string>;

    "getMetadataURI()"(overrides?: CallOverrides): Promise<string>;

    getRoyaltyPolicy(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, string] & {
        royaltyPolicy: string;
        royaltyData: string;
        mintingLicenseFee: BigNumber;
        currencyToken: string;
      }
    >;

    "getRoyaltyPolicy(uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, string] & {
        royaltyPolicy: string;
        royaltyData: string;
        mintingLicenseFee: BigNumber;
        currencyToken: string;
      }
    >;

    isLicenseTransferable(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isLicenseTransferable(uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    toJson(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "toJson(uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    totalRegisteredLicenseTerms(overrides?: CallOverrides): Promise<BigNumber>;

    "totalRegisteredLicenseTerms()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyCompatibleLicenses(
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verifyCompatibleLicenses(uint256[])"(
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyMintLicenseToken(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      licensee: PromiseOrValue<string>,
      licensorIpId: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verifyMintLicenseToken(uint256,address,address,uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      licensee: PromiseOrValue<string>,
      licensorIpId: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyRegisterDerivative(
      childIpId: PromiseOrValue<string>,
      parentIpId: PromiseOrValue<string>,
      licenseTermsId: PromiseOrValue<BigNumberish>,
      licensee: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verifyRegisterDerivative(address,address,uint256,address)"(
      childIpId: PromiseOrValue<string>,
      parentIpId: PromiseOrValue<string>,
      licenseTermsId: PromiseOrValue<BigNumberish>,
      licensee: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyRegisterDerivativeForAllParents(
      childIpId: PromiseOrValue<string>,
      parentIpId: PromiseOrValue<string>[],
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      childIpOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verifyRegisterDerivativeForAllParents(address,address[],uint256[],address)"(
      childIpId: PromiseOrValue<string>,
      parentIpId: PromiseOrValue<string>[],
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      childIpOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "LicenseTermsRegistered(uint256,address,bytes)"(
      licenseTermsId?: PromiseOrValue<BigNumberish> | null,
      licenseTemplate?: PromiseOrValue<string> | null,
      licenseTerms?: null
    ): LicenseTermsRegisteredEventFilter;
    LicenseTermsRegistered(
      licenseTermsId?: PromiseOrValue<BigNumberish> | null,
      licenseTemplate?: PromiseOrValue<string> | null,
      licenseTerms?: null
    ): LicenseTermsRegisteredEventFilter;
  };

  estimateGas: {
    exists(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exists(uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEarlierExpireTime(
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      start: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getEarlierExpireTime(uint256[],uint256)"(
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      start: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getExpireTime(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      start: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getExpireTime(uint256,uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      start: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLicenseTermsURI(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getLicenseTermsURI(uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMetadataURI(overrides?: CallOverrides): Promise<BigNumber>;

    "getMetadataURI()"(overrides?: CallOverrides): Promise<BigNumber>;

    getRoyaltyPolicy(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoyaltyPolicy(uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isLicenseTransferable(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isLicenseTransferable(uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    toJson(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toJson(uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalRegisteredLicenseTerms(overrides?: CallOverrides): Promise<BigNumber>;

    "totalRegisteredLicenseTerms()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyCompatibleLicenses(
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verifyCompatibleLicenses(uint256[])"(
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyMintLicenseToken(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      licensee: PromiseOrValue<string>,
      licensorIpId: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "verifyMintLicenseToken(uint256,address,address,uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      licensee: PromiseOrValue<string>,
      licensorIpId: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verifyRegisterDerivative(
      childIpId: PromiseOrValue<string>,
      parentIpId: PromiseOrValue<string>,
      licenseTermsId: PromiseOrValue<BigNumberish>,
      licensee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "verifyRegisterDerivative(address,address,uint256,address)"(
      childIpId: PromiseOrValue<string>,
      parentIpId: PromiseOrValue<string>,
      licenseTermsId: PromiseOrValue<BigNumberish>,
      licensee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verifyRegisterDerivativeForAllParents(
      childIpId: PromiseOrValue<string>,
      parentIpId: PromiseOrValue<string>[],
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      childIpOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "verifyRegisterDerivativeForAllParents(address,address[],uint256[],address)"(
      childIpId: PromiseOrValue<string>,
      parentIpId: PromiseOrValue<string>[],
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      childIpOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    exists(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "exists(uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEarlierExpireTime(
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      start: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getEarlierExpireTime(uint256[],uint256)"(
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      start: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getExpireTime(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      start: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getExpireTime(uint256,uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      start: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLicenseTermsURI(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getLicenseTermsURI(uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMetadataURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getMetadataURI()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoyaltyPolicy(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRoyaltyPolicy(uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isLicenseTransferable(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isLicenseTransferable(uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toJson(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "toJson(uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalRegisteredLicenseTerms(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalRegisteredLicenseTerms()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyCompatibleLicenses(
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verifyCompatibleLicenses(uint256[])"(
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyMintLicenseToken(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      licensee: PromiseOrValue<string>,
      licensorIpId: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "verifyMintLicenseToken(uint256,address,address,uint256)"(
      licenseTermsId: PromiseOrValue<BigNumberish>,
      licensee: PromiseOrValue<string>,
      licensorIpId: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verifyRegisterDerivative(
      childIpId: PromiseOrValue<string>,
      parentIpId: PromiseOrValue<string>,
      licenseTermsId: PromiseOrValue<BigNumberish>,
      licensee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "verifyRegisterDerivative(address,address,uint256,address)"(
      childIpId: PromiseOrValue<string>,
      parentIpId: PromiseOrValue<string>,
      licenseTermsId: PromiseOrValue<BigNumberish>,
      licensee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verifyRegisterDerivativeForAllParents(
      childIpId: PromiseOrValue<string>,
      parentIpId: PromiseOrValue<string>[],
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      childIpOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "verifyRegisterDerivativeForAllParents(address,address[],uint256[],address)"(
      childIpId: PromiseOrValue<string>,
      parentIpId: PromiseOrValue<string>[],
      licenseTermsIds: PromiseOrValue<BigNumberish>[],
      childIpOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
