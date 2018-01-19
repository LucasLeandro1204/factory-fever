import App from 'core/App';
import { loader } from 'pixi.js';

const app = new App({
  antialias: true,
  width: window.innerWidth,
  backgroundColor: 0x010441,
  height: window.innerHeight,
});

loader.load(() => app.init(window));

document.body.appendChild(app.view);
