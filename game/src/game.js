import App from 'core/App';
import * as Pixi from 'pixi.js';
import { loader } from 'pixi.js';
import IsometricBlock from 'core/IsometricBlock';

const app = new App({
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
});

window.app = app;


class Three extends IsometricBlock {
  //
}

const three = Three.setup('three', [
  'src/assets/sprites/treePineSnow_NE.png',
  'src/assets/sprites/treePineSnow_NW.png',
  'src/assets/sprites/treePineSnow_SE.png',
  'src/assets/sprites/treePineSnow_SW.png',
]);

loader.add('ground', 'src/assets/sprites/ground.png');

const container = new Pixi.Container();
container.rotation = 62.05;
app.stage.addChild(container);

loader.load((loader, resources) => {
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 25; j++) {
      const ground = new Pixi.Sprite(resources.ground.texture);
      ground.scale.set(.2);
      ground.anchor.set(.5);
      const s = 100;
      ground.x = j  * s;
      ground.y = i * s;

      const three2 = new Three();
      three2.addTo(ground);
      three2._sprite.rotation = -62.05;
      three2._sprite.x = 141;
      three2._sprite.y = -141;
      three2._sprite.anchor.set(.5);
      three2._sprite.scale.set(6);
      container.addChild(ground);
    }
  }
});

const map = new Map();

window.onkeydown = window.onkeyup = ({ keyCode, type }) => {
  map.set(keyCode, type == "keydown");

  if (type == "keyup") {
    return;
  }

  switch (keyCode) {
    case 87: { // W
      if (map.get(65)) {

        app.move({ x: -1, y: -1 });
      } else if (map.get(68)) {

        app.move({ x: 1, y: -1 });
      } else {

        app.move({ y: -1 });
      }
      break;
    };
    case 65: { // A
      if (map.get(87)) {

        app.move({ x: -1, y: -1 });
      } else if (map.get(83)) {

        app.move({ x: -1, y: 1 });
      } else {

        app.move({ x: -1 });
      }
      break;
    };
    case 83: { // S
      if (map.get(65)) {

        app.move({ x: -1, y: 1 });
      } else if (map.get(68)) {

        app.move({ x: 1, y: 1 });
      } else {

        app.move({ y: 1 });
      }
      break;
    };
    case 68: { // D
      if (map.get(87)) {

        app.move({ x: 1, y: -1 });
      } else if (map.get(83)) {

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
