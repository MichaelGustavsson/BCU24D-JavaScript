const initApp = () => {
  // Fejkar klick på en kurslänk på sidan...
  getCourseInfo(3);
};

const getCourseInfo = async (courseId) => {
  const url = 'http://localhost:3000/bookings?courseId=' + courseId;
  const response = await fetch(url);
  if (response.ok) {
    const bookings = await response.json();
    displayCourseInfo(bookings);
  }
};

const displayCourseInfo = (bookings) => {
  console.log(bookings);
};

document.addEventListener('DOMContentLoaded', initApp);
