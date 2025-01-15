// Explicit typade listor...
const numbersList: number[] = [1, 2, 3, 4, 5];
numbersList[0] = 100;

// Implicit typa en lista...
const numbers = [1, 2, 3, 4, 5];
numbers[1] = 25;
numbers.push(1);

// Alternativt sätt, oftast det bättre sättet...
const movieCategories: Array<string> = [];
movieCategories.push('Action');
