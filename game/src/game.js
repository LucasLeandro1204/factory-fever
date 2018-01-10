import * as Pixi from 'pixi.js';
import Three from './items/Three';

const app = new Pixi.Application({
  width: 500,
  height: 500,
  antialias: true,
});

const three = window.three = new Three();
const three2 = window.three2 = new Three();

Pixi.loader.load(() => {
  three.addTo(app.stage, 250, 250);
  three2.addTo(app.stage);
  three2.move(150, 50);
});


document.body.appendChild(app.view);
