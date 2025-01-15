// Deklarera variable i TS...

// Explicit datatypning(annotering)...
let movieTitle: string;
let movieLength: number;
movieTitle = 'Batman';
// movieTitle = 25;
movieLength = 100;
const firstName = 'Michael';
// firstName = "Nisse";

// Implicit(automatisk) datatypning...
let tvTitle = 'La Brea';
let categories = Array<string>;
let movie = {};

// Vi ska försöka undvika till alla kostnader att göra så här:
let director: any;
