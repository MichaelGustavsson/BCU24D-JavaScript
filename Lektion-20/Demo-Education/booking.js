import { HttpClient } from './httpClient.js';
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
  const httpClient = new HttpClient(
    'http://localhost:3000/courses/' + courseId
  );
  const course = await httpClient.get();

  console.log(course);
};

const verifyStudent = async (email) => {
  const httpClient = new HttpClient(
    'http://localhost:3000/students?email=' + email
  );
  return await httpClient.get();
};

const addToBooked = async (student, id) => {
  const booking = {
    studentEmail: student.email,
    courseId: id,
  };

  try {
    const httpClient = new HttpClient('http://localhost:3000/bookings');
    if (await httpClient.post(booking)) console.log('Det funkade');
  } catch (error) {
    console.log(error);
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
