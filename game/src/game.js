import * as Pixi from 'pixi.js';
import Three from './items/Three';

const app = new Pixi.Application({
  width: 500,
  height: 500,
  antialias: true,
});

const three = window.three = new Three();

Pixi.loader.load(() => {
  three.add(app.stage);
});


document.body.appendChild(app.view);
