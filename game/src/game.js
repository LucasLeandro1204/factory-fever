import App from 'core/App';
import * as Pixi from 'pixi.js';
import { loader } from 'pixi.js';
import World from 'core/World';

const app = new App({
  antialias: true,
  width: window.innerWidth,
  backgroundColor: 0x010441,
  height: window.innerHeight,
});

loader.load(() => app.init(window));

document.body.appendChild(app.view);
