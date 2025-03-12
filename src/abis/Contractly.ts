export const contractly = {
  contractAddress: "0x4CFFa8B237E6230715E68ebb964b660077bBbEEa",
  abi: [
    {
      type: "constructor",
      inputs: [{ name: "_owner", type: "address", internalType: "address" }],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "addAuthorizedContract",
      inputs: [
        { name: "_contractAddress", type: "address", internalType: "address" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "addParty",
      inputs: [
        { name: "_agreementId", type: "uint256", internalType: "uint256" },
        { name: "_partyAddress", type: "address", internalType: "address" },
        { name: "_requiresSignature", type: "bool", internalType: "bool" },
        { name: "_requiresStaking", type: "bool", internalType: "bool" },
        { name: "_stakeRatio", type: "uint8", internalType: "uint8" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "agreementCount",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "agreements",
      inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      outputs: [
        { name: "id", type: "uint256", internalType: "uint256" },
        { name: "creator", type: "address", internalType: "address" },
        { name: "creationTime", type: "uint128", internalType: "uint128" },
        { name: "expirationTime", type: "uint128", internalType: "uint128" },
        {
          name: "disputeWindowDuration",
          type: "uint128",
          internalType: "uint128",
        },
        {
          name: "totalStakingAmount",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "status",
          type: "uint8",
          internalType: "enum Contractly.AgreementStatus",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "authorizedContracts",
      inputs: [{ name: "", type: "address", internalType: "address" }],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "breachAgreement",
      inputs: [
        { name: "_agreementId", type: "uint256", internalType: "uint256" },
        { name: "_breachingParty", type: "address", internalType: "address" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "createAgreement",
      inputs: [
        { name: "_creator", type: "address", internalType: "address" },
        { name: "_expirationTime", type: "uint128", internalType: "uint128" },
        {
          name: "_totalStakingAmount",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "fulfillAgreement",
      inputs: [
        { name: "_agreementId", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "getAgreement",
      inputs: [
        { name: "_agreementId", type: "uint256", internalType: "uint256" },
      ],
      outputs: [
        { name: "id", type: "uint256", internalType: "uint256" },
        { name: "creator", type: "address", internalType: "address" },
        { name: "creationTime", type: "uint128", internalType: "uint128" },
        { name: "expirationTime", type: "uint128", internalType: "uint128" },
        {
          name: "disputeWindowDuration",
          type: "uint128",
          internalType: "uint128",
        },
        {
          name: "totalStakingAmount",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "status",
          type: "uint8",
          internalType: "enum Contractly.AgreementStatus",
        },
        {
          name: "partyAddresses",
          type: "address[]",
          internalType: "address[]",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getAgreementStatus",
      inputs: [
        { name: "_agreementId", type: "uint256", internalType: "uint256" },
      ],
      outputs: [
        {
          name: "",
          type: "uint8",
          internalType: "enum Contractly.AgreementStatus",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getParty",
      inputs: [
        { name: "_agreementId", type: "uint256", internalType: "uint256" },
        { name: "_partyAddress", type: "address", internalType: "address" },
      ],
      outputs: [
        { name: "requiresStaking", type: "bool", internalType: "bool" },
        { name: "stakeRatio", type: "uint256", internalType: "uint256" },
        { name: "hasSigned", type: "bool", internalType: "bool" },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPartyAddressAtIndex",
      inputs: [
        { name: "_agreementId", type: "uint256", internalType: "uint256" },
        { name: "_index", type: "uint256", internalType: "uint256" },
      ],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPartyAddresses",
      inputs: [
        { name: "_agreementId", type: "uint256", internalType: "uint256" },
      ],
      outputs: [{ name: "", type: "address[]", internalType: "address[]" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPartyCount",
      inputs: [
        { name: "_agreementId", type: "uint256", internalType: "uint256" },
      ],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPartyHasSigned",
      inputs: [
        { name: "_agreementId", type: "uint256", internalType: "uint256" },
        { name: "_partyAddress", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPartyRequiresStaking",
      inputs: [
        { name: "_agreementId", type: "uint256", internalType: "uint256" },
        { name: "_partyAddress", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPartyStakeAmount",
      inputs: [
        { name: "_agreementId", type: "uint256", internalType: "uint256" },
        { name: "_partyAddress", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPartyStakeRatio",
      inputs: [
        { name: "_agreementId", type: "uint256", internalType: "uint256" },
        { name: "_partyAddress", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getStakedAmount",
      inputs: [
        { name: "_agreementId", type: "uint256", internalType: "uint256" },
        { name: "_party", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "isAuthorizedContract",
      inputs: [
        { name: "_contractAddress", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "lockAgreement",
      inputs: [
        { name: "_agreementId", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "owner",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "removeAuthorizedContract",
      inputs: [
        { name: "_contractAddress", type: "address", internalType: "address" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "signAgreement",
      inputs: [
        { name: "_agreementId", type: "uint256", internalType: "uint256" },
        { name: "_signer", type: "address", internalType: "address" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "stakeAgreement",
      inputs: [
        { name: "_agreementId", type: "uint256", internalType: "uint256" },
        { name: "_sender", type: "address", internalType: "address" },
      ],
      outputs: [],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "stakedFunds",
      inputs: [
        { name: "", type: "uint256", internalType: "uint256" },
        { name: "", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "event",
      name: "AgreementActivated",
      inputs: [
        {
          name: "agreementId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "AgreementBreached",
      inputs: [
        {
          name: "agreementId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "breachingParty",
          type: "address",
          indexed: false,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "AgreementCreated",
      inputs: [
        {
          name: "agreementId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "creator",
          type: "address",
          indexed: false,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "AgreementFulfilled",
      inputs: [
        {
          name: "agreementId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "AgreementLocked",
      inputs: [
        {
          name: "agreementId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "AgreementSigned",
      inputs: [
        {
          name: "agreementId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "party",
          type: "address",
          indexed: false,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "FundsReleased",
      inputs: [
        {
          name: "agreementId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "party",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "FundsStaked",
      inputs: [
        {
          name: "agreementId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "party",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    { type: "error", name: "AgreementNotExpired", inputs: [] },
    { type: "error", name: "AgreementNotFound", inputs: [] },
    { type: "error", name: "AlreadySigned", inputs: [] },
    { type: "error", name: "AlreadyStaked", inputs: [] },
    { type: "error", name: "ConditionsNotMet", inputs: [] },
    { type: "error", name: "FundsDistributionFailed", inputs: [] },
    { type: "error", name: "FundsReturnFailed", inputs: [] },
    { type: "error", name: "FundsTransferFailed", inputs: [] },
    { type: "error", name: "FutureExpirationRequired", inputs: [] },
    { type: "error", name: "InvalidStakingAmount", inputs: [] },
    { type: "error", name: "NotAgreementParty", inputs: [] },
    { type: "error", name: "NotLockedStatus", inputs: [] },
    { type: "error", name: "NotPendingStatus", inputs: [] },
    { type: "error", name: "OnlyOwner", inputs: [] },
    { type: "error", name: "PartyNotFound", inputs: [] },
    { type: "error", name: "StakeRatioTooHigh", inputs: [] },
    { type: "error", name: "StakingNotRequired", inputs: [] },
    { type: "error", name: "TotalStakeRatioExceeds100", inputs: [] },
    { type: "error", name: "UnauthorizedContract", inputs: [] },
  ],
};
