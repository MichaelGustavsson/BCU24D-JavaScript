"use strict";
// Problem!!!
// let modelYear: number;
// modelYear = 2010;
// modelYear = '2020';
// UnionType låter oss ha alternativa typer för en variabel...
let modelYear;
modelYear = 2010;
modelYear = '2020';
let coord = { x: 10, y: 10 };
coord = { lat: 100.3, long: 400.3 };
let myMovie = { title: 'Batman', length: 134 };
let mySerie = { title: 'The Rookie', episodes: 140 };
// Funktioner
const displayInfo = (info) => {
    // typeof (info);
};
let playing = {
    title: 'The Rookie',
    episodes: 140,
};
displayInfo(playing);
const displayModelYear = (modelYear) => {
    console.log(`Årsmodell ${modelYear}`);
};
displayModelYear(2020);
displayModelYear('2020');
displayModelYear(new Date('2020-01-01').getFullYear());
