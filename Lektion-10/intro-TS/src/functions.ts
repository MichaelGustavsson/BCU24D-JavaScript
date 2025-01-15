const sayHello = (): void => {
  console.log('Vem är du?');
};

const sayGoodbye = (name: string): string => {
  return `Hejdå ${name}`;
};

const sayGoodnight = (name: string, age: number): string => {
  return `Godnatt ${name}, ja du är så gammal ${age} så du behöver din sömnsömn😁`;
};

sayHello();
const message = sayGoodbye('Kalle');
console.log(message);

const goodnight = sayGoodnight('Kalle', 44);
console.log(goodnight);

// returtypen Never...
// Felhantering...
const throwException = (error: string, errorCode: number): never => {
  throw new Error(error);
  // return
};

throwException('Det blev fel', 400);

function mainLoop(): never {
  while (true) {
    console.log('Håll på tills jag dör...');
  }
}
