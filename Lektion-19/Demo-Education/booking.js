import { addToStorage } from './localstorage.js';

const form = document.querySelector('form');
const details = document.querySelector('#details');

let course = {};

let courseId = 0;
const initApp = () => {
  courseId = location.search.split('=')[1];
  console.log(courseId);
  // Hämta kursen ifrån ditt api...
  getCourse();
};

const getCourse = async () => {
  const url = 'http://localhost:3000/courses/' + courseId;

  const response = await fetch(url);
  if (response.ok) {
    course = await response.json();
  }

  console.log(course);
};

const verifyStudent = async (email) => {
  const url = 'http://localhost:3000/students?email=' + email;
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
};

const addToBooked = async (student, id) => {
  const booking = {
    studentEmail: student.email,
    courseId: id,
  };
  const url = 'http://localhost:3000/bookings';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(booking),
  });

  if (response.ok) {
    console.log('Det funkade');
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const student = await verifyStudent(data.get('email'));
  console.log(student[0]);
  addToBooked(student[0], courseId);
  // addToStorage(course);
};

document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleSubmit);
