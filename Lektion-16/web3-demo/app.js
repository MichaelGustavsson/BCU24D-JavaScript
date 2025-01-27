import {
  ethers,
  formatEther,
} from 'https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.min.js';

const currrentBalance = document.querySelector('#currentBalance');

let provider = undefined;

const initApp = () => {
  console.log('App is running');
  provider = new ethers.JsonRpcProvider('http://localhost:7545');
  console.log(provider);
  getCurrentBalance();
  listAllBlocks();
};

const getCurrentBalance = async () => {
  const balance = await provider.getBalance(
    '0x437E71E9db8FD66167aCbbAd1390B518f4c64964'
  );

  currrentBalance.innerHTML = `Aktuellt saldo: ${formatEther(balance)}`;
};

const listAllBlocks = async () => {
  const numberOfBlocks = await provider.getBlockNumber();
  const blockSection = document.querySelector('#blocks');

  for (let i = 0; i <= numberOfBlocks; i++) {
    let block = await provider.getBlock(i);
    const blockElem = document.createElement('div');
    blockElem.appendChild(
      document.createTextNode(
        `Block nr: ${i} - Skapad ${new Date(
          block.timestamp * 1000
        ).toLocaleString()}`
      )
    );
    blockSection.appendChild(blockElem);
  }
};

document.addEventListener('DOMContentLoaded', initApp);
