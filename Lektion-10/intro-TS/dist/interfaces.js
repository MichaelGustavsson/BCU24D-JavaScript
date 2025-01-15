"use strict";
// Interface använder vi för att strukturera våra objekt...
var MovieCategoryEnum;
(function (MovieCategoryEnum) {
    MovieCategoryEnum[MovieCategoryEnum["ACTION"] = 0] = "ACTION";
    MovieCategoryEnum[MovieCategoryEnum["DRAMA"] = 1] = "DRAMA";
    MovieCategoryEnum[MovieCategoryEnum["COMEDY"] = 2] = "COMEDY";
    MovieCategoryEnum[MovieCategoryEnum["HORROR"] = 3] = "HORROR";
    MovieCategoryEnum[MovieCategoryEnum["ADVENTURE"] = 4] = "ADVENTURE";
    MovieCategoryEnum[MovieCategoryEnum["THRILLER"] = 5] = "THRILLER";
})(MovieCategoryEnum || (MovieCategoryEnum = {}));
const läderlappen = {
    id: 1,
    title: 'Batman',
    releaseYear: 2005,
    length: 134,
    categories: [MovieCategoryEnum.ACTION, MovieCategoryEnum.ADVENTURE],
    displayInfo: function () {
        return `Filmtitel ${this.title} premiär ${this.releaseYear}`;
    },
};
läderlappen.title = 'Batman och Robin';
const robin = {
    id: 1,
    title: 'Batman och Robin',
    releaseYear: 2005,
    length: 134,
    categories: [MovieCategoryEnum.ACTION, MovieCategoryEnum.ADVENTURE],
    language: 'EN',
    subtitles: true,
    displayInfo: function () {
        return `Filmtitel ${this.title} premiär ${this.releaseYear}`;
    },
};
const ford = {
    regNumber: '',
    model: '',
    mileage: 0,
    id: 0,
    manufacturer: '',
    modelYear: 0,
};
const monark = {
    hasFootBreak: false,
    id: 0,
    manufacturer: '',
    modelYear: 0,
};
const truck = {
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
