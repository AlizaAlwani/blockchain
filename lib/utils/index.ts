import { createThirdwebClient } from "thirdweb";
import { defineChain } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { getContract } from "thirdweb";
import { ethereum } from "thirdweb/chains";

const CLIENT_ID = process.env.THIRDWEB_CLIENT_ID;

export const client = createThirdwebClient({
  clientId: CLIENT_ID as string,
});

export const chain = defineChain(sepolia);

export const contract = getContract({
  client,

  chain,

  address: "0x8712BDBF4e1a3246cC716154BA373Ea857FC1417",

  abi: [
    {
      type: "event",
      name: "StatusUpdated",
      inputs: [
        {
          type: "address",
          name: "_user",
          indexed: false,
          internalType: "address",
        },
        {
          type: "string",
          name: "_status",
          indexed: false,
          internalType: "string",
        },
        {
          type: "uint256",
          name: "_uat",
          indexed: false,
          internalType: "uint256",
        },
      ],
      outputs: [],
      anonymous: false,
    },
    {
      type: "function",
      name: "MAX_STATUS_LENGTH",
      inputs: [],
      outputs: [
        {
          type: "uint256",
          name: "",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getStatus",
      inputs: [
        {
          type: "address",
          name: "_user",
          internalType: "address",
        },
      ],
      outputs: [
        {
          type: "string",
          name: "",
          internalType: "string",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "setStatus",
      inputs: [
        {
          type: "string",
          name: "_status",
          internalType: "string",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "statuses",
      inputs: [
        {
          type: "address",
          name: "",
          internalType: "address",
        },
      ],
      outputs: [
        {
          type: "string",
          name: "",
          internalType: "string",
        },
      ],
      stateMutability: "view",
    },
  ],
});
