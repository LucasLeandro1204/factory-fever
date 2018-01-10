import * as Pixi from 'pixi.js';
import Three from './items/Three';
import Snowman from './items/Snowman';

const app = new Pixi.Application({
  width: 500,
  height: 500,
  antialias: true,
});

const three = new Three();
const three2 = new Three();
const snowman = new Snowman();

Pixi.loader.load(() => {
  three.addTo(app.stage, 250, 250);
  three2.addTo(app.stage);
  three2.move(150, 50);
  snowman.addTo(app.stage, 300, 100);
});


document.body.appendChild(app.view);
