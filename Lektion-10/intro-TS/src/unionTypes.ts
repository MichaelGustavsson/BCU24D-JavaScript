// Problem!!!
// let modelYear: number;

// modelYear = 2010;
// modelYear = '2020';

// UnionType låter oss ha alternativa typer för en variabel...
let modelYear: number | string;

modelYear = 2010;
modelYear = '2020';

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coord: Point | Loc = { x: 10, y: 10 };
coord = { lat: 100.3, long: 400.3 };

type Movie1 = {
  title: string;
  length: number;
};

type Show = {
  title: string;
  episodes: number;
};

let myMovie: Movie1 | Show = { title: 'Batman', length: 134 };
let mySerie: Movie1 | Show = { title: 'The Rookie', episodes: 140 };

// Funktioner
const displayInfo = (info: Movie1 | Show) => {
  // typeof (info);
};

let playing: Show = {
  title: 'The Rookie',
  episodes: 140,
};

displayInfo(playing);

const displayModelYear = (modelYear: number | string): void => {
  console.log(`Årsmodell ${modelYear}`);
};

displayModelYear(2020);
displayModelYear('2020');
displayModelYear(new Date('2020-01-01').getFullYear());
