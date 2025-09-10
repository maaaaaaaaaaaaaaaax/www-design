import { txtFiles } from './txtFiles.js';

const container = document.getElementById('text-files-container');

txtFiles.forEach(file => {
  fetch(file)
    .then(response => response.text())
    .then(content => {
      const section = document.createElement('section');
      section.innerHTML = `<pre>${content}</pre>`;
      container.appendChild(section);
    })
    .catch(err => {
      const section = document.createElement('section');
      section.innerHTML = `<h2>${file}</h2><p style="color:red;">Could not load this file. ${err.message}</p>`;
      container.appendChild(section);
    });
});