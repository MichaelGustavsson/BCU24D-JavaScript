import {
  createPublicClient,
  createWalletClient,
  http,
} from 'https://esm.sh/viem';
import { localhost, sepolia } from 'https://esm.sh/viem/chains';

export const createClient = () => {
  return createPublicClient({
    chain: sepolia,
    transport: http('https://localhost:7545'),
  });
};

export const createWallet = () => {
  return createWalletClient({
    chain: localhost,
    transport: http('http://localhost:7545'),
  });
};
