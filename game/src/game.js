import * as Pixi from 'pixi.js';
import Three from './items/Three';
import Snowman from './items/Snowman';

const app = new Pixi.Application({
  width: 500,
  height: 500,
  antialias: true,
});

Pixi.loader.load(() => {
  //
});


document.body.appendChild(app.view);
