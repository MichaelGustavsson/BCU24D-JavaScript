export const createElement = (elem) => {
  return document.createElement(elem);
};
export const createTextElement = (elem, text) => {
  const element = document.createElement(elem);
  element.appendChild(document.createTextNode(text));
  return element;
};
