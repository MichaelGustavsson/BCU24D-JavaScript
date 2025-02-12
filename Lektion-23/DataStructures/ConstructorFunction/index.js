import { User2 } from './user-es6.js';

const initApp = () => {
  const nils = new User2('Nils', 'Nilsson', 'Male', 34);
  console.log(nils);
  console.log(nils.emailDomain);
  User2.prototype.phone = '11111324';
  console.log(nils.getUserEmail());
};

// initApp();
document.addEventListener('DOMContentLoaded', initApp);
