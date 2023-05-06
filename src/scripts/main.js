'use strict';

const addLabels = (form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach(input => {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.textContent = input.name;
    label.setAttribute('for', input.id);

    input.placeholder = input.name;
    input.before(label);
  });
};

const forms = document.querySelectorAll('form');
const signOnForm = forms[0];
const signInForm = forms[1];

addLabels(signInForm);
addLabels(signOnForm);
