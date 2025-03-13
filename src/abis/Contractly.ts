export const contractly = {
  contractAddress: "0xbDF351d76823A8714EE78e94abd4ff19Bbe5bcD8",
  abi: [
    {
      inputs: [{ internalType: "address", name: "_owner", type: "address" }],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    { inputs: [], name: "AgreementNotExpired", type: "error" },
    { inputs: [], name: "AgreementNotFound", type: "error" },
    { inputs: [], name: "AlreadySigned", type: "error" },
    { inputs: [], name: "AlreadyStaked", type: "error" },
    { inputs: [], name: "ConditionsNotMet", type: "error" },
    { inputs: [], name: "FundsDistributionFailed", type: "error" },
    { inputs: [], name: "FundsReturnFailed", type: "error" },
    { inputs: [], name: "FundsTransferFailed", type: "error" },
    { inputs: [], name: "FutureExpirationRequired", type: "error" },
    { inputs: [], name: "InvalidStakingAmount", type: "error" },
    { inputs: [], name: "NotAgreementParty", type: "error" },
    { inputs: [], name: "NotLockedStatus", type: "error" },
    { inputs: [], name: "NotPendingStatus", type: "error" },
    { inputs: [], name: "OnlyOwner", type: "error" },
    { inputs: [], name: "PartyNotFound", type: "error" },
    { inputs: [], name: "StakeRatioTooHigh", type: "error" },
    { inputs: [], name: "StakingNotRequired", type: "error" },
    { inputs: [], name: "TotalStakeRatioExceeds100", type: "error" },
    { inputs: [], name: "UnauthorizedContract", type: "error" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "agreementId",
          type: "uint256",
        },
      ],
      name: "AgreementActivated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "agreementId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "breachingParty",
          type: "address",
        },
      ],
      name: "AgreementBreached",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "agreementId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "creator",
          type: "address",
        },
      ],
      name: "AgreementCreated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "agreementId",
          type: "uint256",
        },
      ],
      name: "AgreementFulfilled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "agreementId",
          type: "uint256",
        },
      ],
      name: "AgreementLocked",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "agreementId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "party",
          type: "address",
        },
      ],
      name: "AgreementSigned",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "agreementId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "party",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "FundsReleased",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "agreementId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "party",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "FundsStaked",
      type: "event",
    },
    {
      inputs: [
        { internalType: "address", name: "_contractAddress", type: "address" },
      ],
      name: "addAuthorizedContract",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_agreementId", type: "uint256" },
        { internalType: "address", name: "_partyAddress", type: "address" },
        { internalType: "bool", name: "_requiresSignature", type: "bool" },
        { internalType: "bool", name: "_requiresStaking", type: "bool" },
        { internalType: "uint8", name: "_stakeRatio", type: "uint8" },
      ],
      name: "addParty",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "agreementCount",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "agreements",
      outputs: [
        { internalType: "uint256", name: "id", type: "uint256" },
        { internalType: "address", name: "creator", type: "address" },
        { internalType: "uint128", name: "creationTime", type: "uint128" },
        { internalType: "uint128", name: "expirationTime", type: "uint128" },
        {
          internalType: "uint128",
          name: "disputeWindowDuration",
          type: "uint128",
        },
        {
          internalType: "uint256",
          name: "totalStakingAmount",
          type: "uint256",
        },
        {
          internalType: "enum Contractly.AgreementStatus",
          name: "status",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "authorizedContracts",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_agreementId", type: "uint256" },
        { internalType: "address", name: "_breachingParty", type: "address" },
      ],
      name: "breachAgreement",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "_creator", type: "address" },
        { internalType: "uint128", name: "_expirationTime", type: "uint128" },
        {
          internalType: "uint256",
          name: "_totalStakingAmount",
          type: "uint256",
        },
      ],
      name: "createAgreement",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_agreementId", type: "uint256" },
      ],
      name: "fulfillAgreement",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_agreementId", type: "uint256" },
      ],
      name: "getAgreement",
      outputs: [
        { internalType: "uint256", name: "id", type: "uint256" },
        { internalType: "address", name: "creator", type: "address" },
        { internalType: "uint128", name: "creationTime", type: "uint128" },
        { internalType: "uint128", name: "expirationTime", type: "uint128" },
        {
          internalType: "uint128",
          name: "disputeWindowDuration",
          type: "uint128",
        },
        {
          internalType: "uint256",
          name: "totalStakingAmount",
          type: "uint256",
        },
        {
          internalType: "enum Contractly.AgreementStatus",
          name: "status",
          type: "uint8",
        },
        {
          internalType: "address[]",
          name: "partyAddresses",
          type: "address[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_agreementId", type: "uint256" },
      ],
      name: "getAgreementStatus",
      outputs: [
        {
          internalType: "enum Contractly.AgreementStatus",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_agreementId", type: "uint256" },
        { internalType: "address", name: "_partyAddress", type: "address" },
      ],
      name: "getParty",
      outputs: [
        { internalType: "bool", name: "requiresStaking", type: "bool" },
        { internalType: "uint256", name: "stakeRatio", type: "uint256" },
        { internalType: "bool", name: "hasSigned", type: "bool" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_agreementId", type: "uint256" },
        { internalType: "uint256", name: "_index", type: "uint256" },
      ],
      name: "getPartyAddressAtIndex",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_agreementId", type: "uint256" },
      ],
      name: "getPartyAddresses",
      outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_agreementId", type: "uint256" },
      ],
      name: "getPartyCount",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_agreementId", type: "uint256" },
        { internalType: "address", name: "_partyAddress", type: "address" },
      ],
      name: "getPartyHasSigned",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_agreementId", type: "uint256" },
        { internalType: "address", name: "_partyAddress", type: "address" },
      ],
      name: "getPartyRequiresStaking",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_agreementId", type: "uint256" },
        { internalType: "address", name: "_partyAddress", type: "address" },
      ],
      name: "getPartyStakeAmount",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_agreementId", type: "uint256" },
        { internalType: "address", name: "_partyAddress", type: "address" },
      ],
      name: "getPartyStakeRatio",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_agreementId", type: "uint256" },
        { internalType: "address", name: "_party", type: "address" },
      ],
      name: "getStakedAmount",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "_contractAddress", type: "address" },
      ],
      name: "isAuthorizedContract",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_agreementId", type: "uint256" },
      ],
      name: "lockAgreement",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "_contractAddress", type: "address" },
      ],
      name: "removeAuthorizedContract",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_agreementId", type: "uint256" },
        { internalType: "address", name: "_signer", type: "address" },
      ],
      name: "signAgreement",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_agreementId", type: "uint256" },
        { internalType: "address", name: "_sender", type: "address" },
      ],
      name: "stakeAgreement",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "address", name: "", type: "address" },
      ],
      name: "stakedFunds",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
  ],
};
