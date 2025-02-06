// Data är ett objekt {id:1,title:"JavaScript beginner"}
export const addToStorage = (data) => {
  localStorage.setItem('bookedCourses', JSON.stringify(data));
};
