// Steg 1. Importera det som behövs...
// ethers bas funktionalitet...
import { ethers, formatEther, parseEther } from 'ethers';

// Steg 2. Skapa en kommunikation till vår lokala server(ganache)
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

let blockNumber = await provider.getBlockNumber();
console.log('Aktuellt blocknummer', blockNumber);

let block = await provider.getBlock(
  '0xd2d1e3526acec583ed57d1b28583bce5d828ae261269136587212e3ec3fef3cf'
);

console.log('Block info', block);

console.log('Transaktioner', block.transactions);

const transaction = await block.getTransaction(
  '0xdfd949a6c64318c574c32a565c6417ea2c861bf30f4978d67c7a901e9b86fc97'
);

console.log('Transaktions info', transaction);
console.log('Transaktions info', transaction.value);

// Loopa igenom all block som finns just nu...
const blocks = await provider.getBlockNumber();
for (let i = 0; i <= blocks; i++) {
  let b = await provider.getBlock(i);
  let transactions = b.transactions;
  console.log(
    `Block[${i}] - Mined On ${new Date(
      b.timestamp * 1000
    ).toLocaleString()} - Gas Used ${b.gasUsed}`
  );

  // Visa upp transaktionerna för varje block...
  for (let t of transactions) {
    const trx = await b.getTransaction(t);
    console.log(`Till: ${trx.to} Från: ${trx.from} Value: ${trx.value}`);
  }
}
