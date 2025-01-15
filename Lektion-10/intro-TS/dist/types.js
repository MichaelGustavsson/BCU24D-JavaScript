"use strict";
function validateInput(movie) {
    if (movie.title.length === 0) {
        throw new Error();
    }
}
const batman = {
    title: 'Batman',
    releaseYear: 2005,
    director: 'Christopher Nolan',
    length: 134,
    // info: function (): {} {
    //   // Ropa på en annan funktion =>
    //   return this.title;
    // },
};
// Kan använda en typ som argument i en annan funktion...
const displayMovieInfo = (movie) => {
    return `Filmtitel${movie.title}`;
};
const movieInfo = displayMovieInfo(batman);
const kia = {
    id: 1,
    regNo: 'ABC123',
};
const volvo = {
    id: 2,
    regNo: 'AAA111',
    color: 'Vit',
};
const ferrari = {
    id: 3,
    regNo: 'WWW123',
    color: 'Röd',
    numberOfGears: 8,
    gearType: 'Paddlar',
};
const koenigsegg = {
    id: 4,
    regNo: 'TYR555',
    color: 'Svart',
    numberOfGears: 12,
    gearType: 'Steptronic',
    horsePower: 1200,
};
// Tips!!!
// Funktioner är för att manipulera eller förändra eller göra något
// Type (databärande struktur) den ofta endast består av egenskaper
// Hanterar värden på variabler/egenskaper
// Hantering av tillstånd...
