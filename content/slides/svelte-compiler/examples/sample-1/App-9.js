let count = 0, double = count * 2;

const text = document.createTextNode(`${count} x 2 = ${double}`);
parent.appendChild(text);

const button = document.createElement('button');
button.textContent = 'Increment';
button.addEventListener('click', () => count++);
parent.appendChild(button);
