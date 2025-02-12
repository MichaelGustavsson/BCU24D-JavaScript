export class User2 {
  constructor(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.emailDomain = '@itslearning.com';
  }

  getUserEmail = function () {
    return (
      this.firstName.toLowerCase() +
      '.' +
      this.lastName.toLowerCase() +
      this.emailDomain
    );
  };
}
