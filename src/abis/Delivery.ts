export const delivery = {
  contractAddress: "0x270b077ABe3B6Fb61E11D2dB05E2f2AFc35181A1",
  abi: [
    {
      inputs: [
        {
          internalType: "address",
          name: "_contractlyAddress",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    { inputs: [], name: "Delivery__InsufficientStakeAmount", type: "error" },
    { inputs: [], name: "Delivery__VendorAlreadyAssigned", type: "error" },
    { inputs: [], name: "Delivery__VendorNotSigned", type: "error" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
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
          internalType: "uint128[]",
          name: "expirationTimes",
          type: "uint128[]",
        },
        {
          indexed: false,
          internalType: "uint256[]",
          name: "totalStakingAmounts",
          type: "uint256[]",
        },
        {
          indexed: false,
          internalType: "address[]",
          name: "customerAddresses",
          type: "address[]",
        },
      ],
      name: "BatchDeliveryCreated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "agreementId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "vendor",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "customer",
          type: "address",
        },
      ],
      name: "DeliveryCreated",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "uint128[]",
          name: "_expirationTimes",
          type: "uint128[]",
        },
        {
          internalType: "uint256[]",
          name: "_totalStakingAmounts",
          type: "uint256[]",
        },
        {
          internalType: "address[]",
          name: "_customerAddresses",
          type: "address[]",
        },
      ],
      name: "batchCreateDelivery",
      outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
      stateMutability: "payable",
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
        { internalType: "uint256", name: "_agreementId", type: "uint256" },
      ],
      name: "checkDeliveryStatus",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "contractly",
      outputs: [
        { internalType: "contract Contractly", name: "", type: "address" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint128", name: "_expirationTime", type: "uint128" },
        {
          internalType: "uint256",
          name: "_totalStakingAmount",
          type: "uint256",
        },
        { internalType: "address", name: "_customerAddress", type: "address" },
        { internalType: "uint256", name: "_awbNumber", type: "uint256" },
      ],
      name: "createDelivery",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "payable",
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
      name: "getAgreementDetails",
      outputs: [
        { internalType: "uint256", name: "id", type: "uint256" },
        { internalType: "address", name: "creator", type: "address" },
        { internalType: "uint256", name: "creationTime", type: "uint256" },
        { internalType: "uint256", name: "expirationTime", type: "uint256" },
        {
          internalType: "uint256",
          name: "disputeWindowDuration",
          type: "uint256",
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
        { internalType: "uint256", name: "_awbNumber", type: "uint256" },
      ],
      name: "getAwbToAgreementId",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_agreementId", type: "uint256" },
      ],
      name: "getHasVendorAssigned",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getLastAutomationUpdate",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_agreementId", type: "uint256" },
        { internalType: "uint256", name: "_amount", type: "uint256" },
      ],
      name: "stakeAgreement",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
  ],
};
