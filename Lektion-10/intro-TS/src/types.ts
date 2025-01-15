// Skapa egna datatyper...
// Typ som representar en film...
type Movie = {
  title: string;
  readonly releaseYear: number;
  director: string;
  length: number;
  // info: () => {};
};

function validateInput(movie: Movie) {
  if (movie.title.length === 0) {
    throw new Error();
  }
}

const batman: Movie = {
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
const displayMovieInfo = (movie: Movie): string => {
  return `Filmtitel${movie.title}`;
};

const movieInfo = displayMovieInfo(batman);
// const info = batman.info();
// movieInfo kommer nu att innehålla strängen "Batman"

// Går inte releaseYear är skrivskyddat
// batman.releaseYear = 2006

type Vehicle = {
  id: number;
  readonly regNo: string;
};

const kia: Vehicle = {
  id: 1,
  regNo: 'ABC123',
};

// kia.regNo = 'EFG456';
type Car = {
  color: string;
};

type ExtendedCar = Vehicle & Car;
const volvo: ExtendedCar = {
  id: 2,
  regNo: 'AAA111',
  color: 'Vit',
};

type GearType = {
  numberOfGears: number;
  gearType: string;
};

// type SuperCar = Vehicle & Car & GearType;
type SuperCar = ExtendedCar & GearType;
const ferrari: SuperCar = {
  id: 3,
  regNo: 'WWW123',
  color: 'Röd',
  numberOfGears: 8,
  gearType: 'Paddlar',
};

type RacingCar = SuperCar & { horsePower: number };

const koenigsegg: RacingCar = {
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
