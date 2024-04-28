/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC1155Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Errors__factory>;
    getContractFactory(
      name: "IERC20Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Errors__factory>;
    getContractFactory(
      name: "IERC721Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Errors__factory>;
    getContractFactory(
      name: "IERC4906",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC4906__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURI__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721URIStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721URIStorage__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Math",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Math__factory>;
    getContractFactory(
      name: "ReentrancyGuard",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReentrancyGuard__factory>;
    getContractFactory(
      name: "Strings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Strings__factory>;
    getContractFactory(
      name: "AccessControlled",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlled__factory>;
    getContractFactory(
      name: "Governable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Governable__factory>;
    getContractFactory(
      name: "IGovernable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernable__factory>;
    getContractFactory(
      name: "IGovernance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernance__factory>;
    getContractFactory(
      name: "IAccessController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessController__factory>;
    getContractFactory(
      name: "IIPAccount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IIPAccount__factory>;
    getContractFactory(
      name: "IHookModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IHookModule__factory>;
    getContractFactory(
      name: "IModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IModule__factory>;
    getContractFactory(
      name: "IDisputeModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDisputeModule__factory>;
    getContractFactory(
      name: "IRegistrationModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRegistrationModule__factory>;
    getContractFactory(
      name: "ILicensingModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILicensingModule__factory>;
    getContractFactory(
      name: "IPILPolicyFrameworkManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPILPolicyFrameworkManager__factory>;
    getContractFactory(
      name: "IPolicyFrameworkManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPolicyFrameworkManager__factory>;
    getContractFactory(
      name: "IRoyaltyModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRoyaltyModule__factory>;
    getContractFactory(
      name: "IRoyaltyPolicy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRoyaltyPolicy__factory>;
    getContractFactory(
      name: "IIPAccountRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IIPAccountRegistry__factory>;
    getContractFactory(
      name: "IIPAssetRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IIPAssetRegistry__factory>;
    getContractFactory(
      name: "ILicenseRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILicenseRegistry__factory>;
    getContractFactory(
      name: "IModuleRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IModuleRegistry__factory>;
    getContractFactory(
      name: "IMetadataProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMetadataProvider__factory>;
    getContractFactory(
      name: "IMetadataProviderMigratable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMetadataProviderMigratable__factory>;
    getContractFactory(
      name: "IKeyValueResolver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKeyValueResolver__factory>;
    getContractFactory(
      name: "IResolver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IResolver__factory>;
    getContractFactory(
      name: "AccessPermission",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessPermission__factory>;
    getContractFactory(
      name: "Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Errors__factory>;
    getContractFactory(
      name: "GovernanceLib",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernanceLib__factory>;
    getContractFactory(
      name: "PILFlavors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PILFlavors__factory>;
    getContractFactory(
      name: "PILFrameworkErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PILFrameworkErrors__factory>;
    getContractFactory(
      name: "IPAccountChecker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPAccountChecker__factory>;
    getContractFactory(
      name: "BaseModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseModule__factory>;
    getContractFactory(
      name: "BasePolicyFrameworkManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BasePolicyFrameworkManager__factory>;
    getContractFactory(
      name: "LicensingModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LicensingModule__factory>;
    getContractFactory(
      name: "LicensingModuleAware",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LicensingModuleAware__factory>;
    getContractFactory(
      name: "LicensorApprovalChecker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LicensorApprovalChecker__factory>;
    getContractFactory(
      name: "PILPolicyFrameworkManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PILPolicyFrameworkManager__factory>;
    getContractFactory(
      name: "RoyaltyModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RoyaltyModule__factory>;
    getContractFactory(
      name: "IPAccountRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPAccountRegistry__factory>;
    getContractFactory(
      name: "IPAssetRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPAssetRegistry__factory>;
    getContractFactory(
      name: "MetadataProviderBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MetadataProviderBase__factory>;
    getContractFactory(
      name: "MetadataProviderV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MetadataProviderV1__factory>;
    getContractFactory(
      name: "IPResolver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPResolver__factory>;
    getContractFactory(
      name: "KeyValueResolver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KeyValueResolver__factory>;
    getContractFactory(
      name: "ResolverBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ResolverBase__factory>;
    getContractFactory(
      name: "CopyrightNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CopyrightNFT__factory>;
    getContractFactory(
      name: "ICopyrightNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICopyrightNFT__factory>;
    getContractFactory(
      name: "IPAPolicyCreation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPAPolicyCreation__factory>;
    getContractFactory(
      name: "LicenseNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LicenseNFT__factory>;
    getContractFactory(
      name: "CreaderToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CreaderToken__factory>;
    getContractFactory(
      name: "ICreaderToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICreaderToken__factory>;
    getContractFactory(
      name: "MockERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockERC1155__factory>;
    getContractFactory(
      name: "MockERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockERC20__factory>;
    getContractFactory(
      name: "MockERC721Second",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockERC721Second__factory>;
    getContractFactory(
      name: "Bodhi",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Bodhi__factory>;
    getContractFactory(
      name: "IERC6551Account",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC6551Account__factory>;
    getContractFactory(
      name: "IERC6551Registry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC6551Registry__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "ERC1155TokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155TokenReceiver__factory>;

    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC1155Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Errors>;
    getContractAt(
      name: "IERC20Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Errors>;
    getContractAt(
      name: "IERC721Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Errors>;
    getContractAt(
      name: "IERC4906",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC4906>;
    getContractAt(
      name: "ERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "IERC1155MetadataURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURI>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721URIStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721URIStorage>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "Math",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Math>;
    getContractAt(
      name: "ReentrancyGuard",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ReentrancyGuard>;
    getContractAt(
      name: "Strings",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Strings>;
    getContractAt(
      name: "AccessControlled",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlled>;
    getContractAt(
      name: "Governable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Governable>;
    getContractAt(
      name: "IGovernable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernable>;
    getContractAt(
      name: "IGovernance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernance>;
    getContractAt(
      name: "IAccessController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessController>;
    getContractAt(
      name: "IIPAccount",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IIPAccount>;
    getContractAt(
      name: "IHookModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IHookModule>;
    getContractAt(
      name: "IModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IModule>;
    getContractAt(
      name: "IDisputeModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDisputeModule>;
    getContractAt(
      name: "IRegistrationModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRegistrationModule>;
    getContractAt(
      name: "ILicensingModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILicensingModule>;
    getContractAt(
      name: "IPILPolicyFrameworkManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPILPolicyFrameworkManager>;
    getContractAt(
      name: "IPolicyFrameworkManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPolicyFrameworkManager>;
    getContractAt(
      name: "IRoyaltyModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRoyaltyModule>;
    getContractAt(
      name: "IRoyaltyPolicy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRoyaltyPolicy>;
    getContractAt(
      name: "IIPAccountRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IIPAccountRegistry>;
    getContractAt(
      name: "IIPAssetRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IIPAssetRegistry>;
    getContractAt(
      name: "ILicenseRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILicenseRegistry>;
    getContractAt(
      name: "IModuleRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IModuleRegistry>;
    getContractAt(
      name: "IMetadataProvider",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMetadataProvider>;
    getContractAt(
      name: "IMetadataProviderMigratable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMetadataProviderMigratable>;
    getContractAt(
      name: "IKeyValueResolver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKeyValueResolver>;
    getContractAt(
      name: "IResolver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IResolver>;
    getContractAt(
      name: "AccessPermission",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessPermission>;
    getContractAt(
      name: "Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Errors>;
    getContractAt(
      name: "GovernanceLib",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernanceLib>;
    getContractAt(
      name: "PILFlavors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PILFlavors>;
    getContractAt(
      name: "PILFrameworkErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PILFrameworkErrors>;
    getContractAt(
      name: "IPAccountChecker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPAccountChecker>;
    getContractAt(
      name: "BaseModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseModule>;
    getContractAt(
      name: "BasePolicyFrameworkManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BasePolicyFrameworkManager>;
    getContractAt(
      name: "LicensingModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LicensingModule>;
    getContractAt(
      name: "LicensingModuleAware",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LicensingModuleAware>;
    getContractAt(
      name: "LicensorApprovalChecker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LicensorApprovalChecker>;
    getContractAt(
      name: "PILPolicyFrameworkManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PILPolicyFrameworkManager>;
    getContractAt(
      name: "RoyaltyModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RoyaltyModule>;
    getContractAt(
      name: "IPAccountRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPAccountRegistry>;
    getContractAt(
      name: "IPAssetRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPAssetRegistry>;
    getContractAt(
      name: "MetadataProviderBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MetadataProviderBase>;
    getContractAt(
      name: "MetadataProviderV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MetadataProviderV1>;
    getContractAt(
      name: "IPResolver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPResolver>;
    getContractAt(
      name: "KeyValueResolver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KeyValueResolver>;
    getContractAt(
      name: "ResolverBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ResolverBase>;
    getContractAt(
      name: "CopyrightNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CopyrightNFT>;
    getContractAt(
      name: "ICopyrightNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICopyrightNFT>;
    getContractAt(
      name: "IPAPolicyCreation",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPAPolicyCreation>;
    getContractAt(
      name: "LicenseNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LicenseNFT>;
    getContractAt(
      name: "CreaderToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CreaderToken>;
    getContractAt(
      name: "ICreaderToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICreaderToken>;
    getContractAt(
      name: "MockERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockERC1155>;
    getContractAt(
      name: "MockERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockERC20>;
    getContractAt(
      name: "MockERC721Second",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockERC721Second>;
    getContractAt(
      name: "Bodhi",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Bodhi>;
    getContractAt(
      name: "IERC6551Account",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC6551Account>;
    getContractAt(
      name: "IERC6551Registry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC6551Registry>;
    getContractAt(
      name: "ERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "ERC1155TokenReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155TokenReceiver>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
