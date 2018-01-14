import App from 'core/App';
import * as Pixi from 'pixi.js';

import { loader } from 'pixi.js';

const app = new App({
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
});

window.app = app;

loader.add('ground', 'src/assets/sprites/ground.png');

loader.load((loader, resources) => {

  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 25; j++) {
      const ground = new Pixi.Sprite(resources.ground.texture);
      ground.scale.set(.2);
      ground.anchor.set(.5);
      ground.rotation = 62.05;
      const s = 141;
      ground.x = j  * s;
      ground.y = i * s;
      ground.alpha = 0.1;

        if (j == i) {
        }
      app.stage.addChild(ground);
    }
}
});

let map = {};

window.onkeydown = window.onkeyup = ({ keyCode, type }) => {
  map[keyCode] = type == "keydown";
  if (type == "keyup") return app.stopMoving();

  switch (keyCode) {
    case 87: { // W
      if (map[65]) {

        app.move({ x: -1, y: -1 });
      } else if (map[68]) {

        app.move({ x: 1, y: -1 });
      } else {

        app.move({ y: -1 });
      }
      break;
    };
    case 65: { // A
      if (map[87]) {

        app.move({ x: -1, y: -1 });
      } else if (map[83]) {

        app.move({ x: -1, y: 1 });
      } else {

        app.move({ x: -1 });
      }
      break;
    };
    case 83: { // S
      if (map[65]) {

        app.move({ x: -1, y: 1 });
      } else if (map[68]) {

        app.move({ x: 1, y: 1 });
      } else {

        app.move({ y: 1 });
      }
      break;
    };
    case 68: { // D
      if (map[87]) {

        app.move({ x: 1, y: -1 });
      } else if (map[83]) {

        app.move({ x: 1, y: 1 });
      } else {

        app.move({ x: 1 });
      }
      break;
    };
    case 81: { // Q
      app.rotateCounterClockwise();
      break;
    };
    case 69: { // E
      app.rotateClockwise();
      break;
    };
    case 189: { // -
      app.zoom(-1);
      break;
    };
    case 187: { // =
      app.zoom(1);
      break;
    };
  }
};

document.body.appendChild(app.view);
