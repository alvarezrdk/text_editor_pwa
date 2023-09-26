import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';
import { registerSW } from './register-sw';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
// if ('serviceWorker' in navigator) {
//   // register workbox service worker
//   const workboxSW = new Workbox('/src-ws.js');
//   workboxSW.register();
// } else {
//   console.error('Service workers are not supported in this browser.');
// }

// Call registerSW method
registerSW();

window.editText = async (e) => {
  e.preventDefault()
  const id = parseInt(e.target.children[0].id)
  const text = e.target.children[0].value
    console.log(e.target.children[0].id);
    console.log(e.target.children[0].value);
    putDb(id, text)
    fetchList();
  };