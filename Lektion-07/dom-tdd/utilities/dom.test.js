import fs from 'fs';
import path from 'path';
import { Window } from 'happy-dom';

import { beforeEach, it, vi } from 'vitest';
import { createErrorMessage, updateUI } from './dom';

const docPath = path.join(process.cwd(), 'index.html');
const docContent = fs.readFileSync(docPath).toString();

const window = new Window();
const document = window.document;

// document.write(docContent);

vi.stubGlobal('document', document);

beforeEach(() => {
  document.body.innerHTML = '';
  document.write(docContent);
});

describe('Error message', () => {
  it('should add a div element to the element with classname .message-container', () => {
    // Arrange...
    createErrorMessage('Det gick fel!!!');
    const elem = document.querySelector('.message-container');

    // Act...
    const div = elem.firstElementChild;

    // Assert...
    expect(div).not.toBeNull();
  });

  it('should not contain an error div initially', () => {
    // Arrange...
    const elem = document.querySelector('.message-container');

    // Act...
    const div = elem.firstElementChild;

    // Assert...
    expect(div).toBeNull();
  });

  it('should contain the correct errormessage', () => {
    // Arrange...
    const message = 'Ett inköp måste anges';
    createErrorMessage(message);
    const elem = document.querySelector('.message-container');

    // Act...
    const div = elem.firstElementChild;

    // Assert...
    expect(div.textContent).toBe(message);
  });
});

describe('Update UI', () => {
  it('should clear the input element', () => {
    // Arrange...
    const input = document.querySelector('#item-input');

    // Act...
    updateUI();

    // Assert...
    expect(input.value).toBe('');
  });

  it('should hide the clear button if grocery list is empty', () => {
    // Arrange...
    const clearButton = document.querySelector('#clear');

    // Act...
    updateUI();

    // Assert...
    expect(clearButton.style.display).toBe('none');
  });

  it('should hide the filter input if grocery list is empty', () => {
    // Arrange...
    const filterInput = document.querySelector('#filter');

    // Act...
    updateUI();

    // Assert...
    expect(filterInput.style.display).toBe('none');
  });
});
