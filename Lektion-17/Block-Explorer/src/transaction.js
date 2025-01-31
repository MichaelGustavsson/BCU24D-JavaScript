import { createClient } from './helpers/explorer.js';

const transactionDetailsDisplay = document.querySelector('#transactionDetails');

let client = undefined;

const initApp = () => {
  const hash = location.search.split('=')[1];
  client = createClient();
  displayTransactionDetails(hash);
};

const displayTransactionDetails = async (hash) => {
  const block = await client.getBlock({ blockHash: hash });
  generateBlockInfo(block);

  for (let trx of block.transactions) {
    const transaction = await client.getTransaction({
      hash: trx,
    });

    generateTransactionInfo(transaction);
  }
};

const generateBlockInfo = (block) => {
  let html = '';
  transactionDetailsDisplay.innerHTML = html;

  html = `
    <h2 id="blockNumber">BLOCK NUMBER ${block.number}</h2>
    <article class="trx-details">
      <section>
        <span>Gas Used</span>
        <small>${block.gasUsed}</small>
      </section>
      <section>
        <span>Gas Limit</span>
        <small>${block.gasLimit}</small>
      </section>
      <section>
        <span>Mined On</span>
        <small>${new Date(
          parseInt(block.timestamp * 1000n)
        ).toLocaleString()}</small>
      </section>
      <section>
        <span>Block Hash</span>
        <small>${block.hash}</small>
      </section>
    </article>
  `;

  transactionDetailsDisplay.innerHTML = html;
};

const generateTransactionInfo = (transaction) => {
  console.log(transaction);
  let html = '';

  html = `
    <h2 id="trxHash">TX Hash ${transaction.hash}</h2>
    <article class="trx-details">
      <section>
        <span>From</span>
        <small>${transaction.from}</small>
      </section>
      <section>
        <span>To</span>
        <small>${transaction.to}</small>
      </section>
      <section>
        <span>Gas Used</span>
        <small>${transaction.gas}</small>
      </section>
      <section>
        <span>Value</span>
        <small>${transaction.value}</small>
      </section>
    </article>
  `;

  transactionDetailsDisplay.insertAdjacentHTML('beforeend', html);
  // transactionDetailsDisplay.innerHTML += html;
};

document.addEventListener('DOMContentLoaded', initApp);
