// Steg 1. Importera det som behövs...
// ethers bas funktionalitet...
import { ethers, formatEther, parseEther } from 'ethers';

// Steg 2. Skapa en kommunikation till vår lokal server(ganache)
const provider = new ethers.JsonRpcProvider('http:localhost:7545');
// const block = await provider.getBlockNumber();

let balance = await provider.getBalance(
  '0x437E71E9db8FD66167aCbbAd1390B518f4c64964'
);

console.log('Balance', balance);
console.log('Ether', formatEther(balance));

let transactionList = await provider.getTransactionCount(
  '0x437E71E9db8FD66167aCbbAd1390B518f4c64964'
);

console.log('Antal transaktioner', transactionList);

const signer = await provider.getSigner(
  '0x437E71E9db8FD66167aCbbAd1390B518f4c64964'
);

console.log('Avsändare', signer);

const trx = await signer.sendTransaction({
  to: '0x2a5d1EF6e8bA437C3a0d300D1BAa3fB8883b24fC',
  value: parseEther('1'),
});

const receipt = await trx.wait();

console.log('Kvittens', receipt);

balance = await provider.getBalance(
  '0x437E71E9db8FD66167aCbbAd1390B518f4c64964'
);
console.log('Avsändarens saldo:', formatEther(balance));

balance = await provider.getBalance(
  '0x2a5d1EF6e8bA437C3a0d300D1BAa3fB8883b24fC'
);
console.log('Mottagarens saldo:', formatEther(balance));

transactionList = await provider.getTransactionCount(
  '0x437E71E9db8FD66167aCbbAd1390B518f4c64964'
);

console.log('Antal transaktioner efter', transactionList);

const block = await provider.getBlockNumber();
console.log('Aktuellt block', block);
