import { content } from './content.js';

const container = document.getElementById('text-files-container');

function displayText(file, container) {
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
}

function displayImage(file, container) {
  const section = document.createElement('section');
  const img = document.createElement('img');
  img.src = file;
  img.alt = file;
  img.style.maxWidth = '100%';
  img.onerror = () => {
    section.innerHTML = `<h2>${file}</h2><p style="color:red;">Could not load this image.</p>`;
  };
  section.appendChild(img);
  container.appendChild(section);
}

content.forEach(file => {
  const fileExtension = file.split('.').pop().toLowerCase();
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp'];
  
  if (fileExtension === 'txt') {
    displayText(file, container);
  } else if (imageExtensions.includes(fileExtension)) {
    displayImage(file, container);
  }
});