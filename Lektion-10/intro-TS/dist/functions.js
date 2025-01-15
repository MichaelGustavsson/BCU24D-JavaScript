"use strict";
const sayHello = () => {
    console.log('Vem är du?');
};
const sayGoodbye = (name) => {
    return `Hejdå ${name}`;
};
const sayGoodnight = (name, age) => {
    return `Godnatt ${name}, ja du är så gammal ${age} så du behöver din sömnsömn😁`;
};
sayHello();
const message = sayGoodbye('Kalle');
console.log(message);
const goodnight = sayGoodnight('Kalle', 44);
console.log(goodnight);
// returtypen Never...
// Felhantering...
const throwException = (error, errorCode) => {
    throw new Error(error);
    // return
};
throwException('Det blev fel', 400);
function mainLoop() {
    while (true) {
        console.log('Håll på tills jag dör...');
    }
}
