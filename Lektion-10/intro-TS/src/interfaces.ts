// Interface använder vi för att strukturera våra objekt...

enum MovieCategoryEnum {
  ACTION,
  DRAMA,
  COMEDY,
  HORROR,
  ADVENTURE,
  THRILLER,
}

interface IMovie {
  readonly id: number;
  title: string;
  releaseYear: number;
  length?: number;
  categories: Array<MovieCategoryEnum>;
  // categories: MovieCategoryEnum[];
  displayInfo(): string;
}

const läderlappen: IMovie = {
  id: 1,
  title: 'Batman',
  releaseYear: 2005,
  length: 134,
  categories: [MovieCategoryEnum.ACTION, MovieCategoryEnum.ADVENTURE],
  displayInfo: function (): string {
    return `Filmtitel ${this.title} premiär ${this.releaseYear}`;
  },
};

läderlappen.title = 'Batman och Robin';
// läderlappen.id = 48;

// Reopening an interface to extend it...
interface IMovie {
  language?: string;
  subtitles?: boolean;
}

const robin: IMovie = {
  id: 1,
  title: 'Batman och Robin',
  releaseYear: 2005,
  length: 134,
  categories: [MovieCategoryEnum.ACTION, MovieCategoryEnum.ADVENTURE],
  language: 'EN',
  subtitles: true,
  displayInfo: function (): string {
    return `Filmtitel ${this.title} premiär ${this.releaseYear}`;
  },
};

/*********************************************************************************/
// Utöka ett interface är arv(utökning) av befintlig interface

// Grund interface...
interface IVehicle {
  readonly id: number;
  manufacturer: string;
  modelYear: number;
}

interface ICar extends IVehicle {
  regNumber: string;
  model: string;
  mileage: number;
}

const ford: ICar = {
  regNumber: '',
  model: '',
  mileage: 0,
  id: 0,
  manufacturer: '',
  modelYear: 0,
};

interface IBike extends IVehicle {
  hasFootBreak: boolean;
}

const monark: IBike = {
  hasFootBreak: false,
  id: 0,
  manufacturer: '',
  modelYear: 0,
};

interface ITruck extends IVehicle, ICar {
  tara: number;
  wheelbase: number;
  length: number;
}

const truck: ITruck = {
  tara: 0,
  wheelbase: 0,
  length: 0,
  id: 0,
  manufacturer: '',
  modelYear: 0,
  regNumber: '',
  model: '',
  mileage: 0,
};

// class VehicleClass {
//   readonly id: number;
//   manufacturer: string;
//   modelYear: number;
//   constructor(id:number, manufacturer:string) {
//     this.id = id;
//     this.manufacturer = manufacturer;
//     this.modelYear = 2019;
//   }

//   displayInfo = () => {
//     console.log('Information');
//   };
// }

// const fiat: VehicleClass = new VehicleClass(1, 'Fiat');
