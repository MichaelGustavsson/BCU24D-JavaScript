import { formatEther } from 'https://esm.sh/viem';
import { createClient } from './helpers/explorer.js';
import { createElement, createTextElement } from './dom.js';

const blockList = document.querySelector('#list');
const subTitle = document.querySelector('h4');

let client = undefined;

const initApp = () => {
  client = createClient();
  getBalance();
  listAllBlocks();
};

const getBalance = async () => {
  const balance = await client.getBalance({
    address: '0x437E71E9db8FD66167aCbbAd1390B518f4c64964',
  });

  subTitle.innerText = `Current Balance: ${parseFloat(
    formatEther(balance)
  ).toFixed(2)}`;
};

const listAllBlocks = async () => {
  const blocks = await client.getBlockNumber();

  for (let i = blocks; i >= 0; i--) {
    // Hämta block med blocknummer
    const block = await client.getBlock({ blockNumber: i });

    // Generera html...
    const div = createElement('div');
    div.classList.add('section');

    // Lägg till blocknummer...
    div.appendChild(createTextElement('div', block.number));
    // Lägg till block hash...
    div.appendChild(createTextElement('div', block.hash));
    // Lägg till blocket timestamp...
    div.appendChild(
      createTextElement(
        'div',
        new Date(parseInt(block.timestamp * 1000n)).toLocaleString()
      )
    );
    // Lägg till en knapp för att navigera till transaktion detaljer...
    const button = createElement('a');
    button.innerText = 'Show';
    button.classList.add('btn');
    button.classList.add('btn-rounded');
    button.style.width = '100px';
    button.href = `../pages/transaction.html?hash=${block.hash}`;

    div.appendChild(button);

    blockList.appendChild(div);
  }
};

document.addEventListener('DOMContentLoaded', initApp);
