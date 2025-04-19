import { BrowserProvider, Contract } from "ethers";
import chatABI from "./ChatABI.json";

const CHAT_CONTRACT_ADDRESS = "0x3bB4FcE4669cA71F05B903113233fA12BBeb47B6"; 

export async function getChatContract() {
  if (!window.ethereum) {
    console.error("MetaMask is not installed");
    return null;
  }

  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  return new Contract(CHAT_CONTRACT_ADDRESS, chatABI.abi, signer);
}
