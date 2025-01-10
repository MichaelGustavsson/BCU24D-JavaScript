const createIconButton = (buttonClasses, iconClasses) => {
  const button = document.createElement('button');
  const classList = buttonClasses.split(' ');

  classList.forEach((c) => button.classList.add(c));

  const icon = createIcon(iconClasses);
  button.appendChild(icon);

  return button;
};

const createIcon = (classes) => {
  const icon = document.createElement('i');
  const classList = classes.split(' ');

  classList.forEach((c) => icon.classList.add(c));

  return icon;
};

// Default export
export default createIconButton;
