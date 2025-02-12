// En vanlig funktion?
// En constructor function!😳

// KLASS!!!
export function User(firstName, lastName, gender, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = gender;
  this.age = age;
}

User.prototype.emailDomain = '@itslearning.com';
// (this) fungerar inte med arrow functions
// User.prototype.getUserEmail = () => {
//   return (
//     this.firstName.toLowerCase() +
//     '.' +
//     this.lastName.toLowerCase() +
//     this.emailDomain
//   );
// };

User.prototype.getUserEmail = function () {
  return (
    this.firstName.toLowerCase() +
    '.' +
    this.lastName.toLowerCase() +
    this.emailDomain
  );
};
