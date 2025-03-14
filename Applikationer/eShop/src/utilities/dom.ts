export const createPageHeader = (text: string): HTMLHeadingElement => {
  const header = document.createElement('h1');
  header.appendChild(document.createTextNode(text));
  return header;
};

export const createText = (text: string): HTMLDivElement => {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(text));
  return div;
};

export const createRow = (className: string): HTMLDivElement => {
  const row = document.createElement('div');
  row.classList.add(className);

  return row;
};

export const createRowItem = (options: {
  text?: string;
  classNames?: string[];
  width?: string;
}): HTMLSpanElement => {
  const item = document.createElement('span');
  item.appendChild(document.createTextNode(options.text ? options.text : ''));

  if (options.classNames) {
    options.classNames.forEach((className) => {
      item.classList.add(className);
    });
  }

  if (options.width) item.style.width = options.width;

  return item;
};
