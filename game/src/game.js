import App from 'core/App';
import * as Pixi from 'pixi.js';
import * as display from 'pixi-display';
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

console.log(display);

const container = new Pixi.Container();
const groundGroup = new display.Group(0, (sprite) => {
  sprite.zOrder = -sprite.y;
});
const thingsGroup = new display.Group(1, (sprite) => {
  sprite.zOrder = +sprite.y;
});
container.rotation = 62.05;
app.stage.addChild(container);
app.stage.addChild(new display.Layer(groundGroup));
app.stage.addChild(new display.Layer(thingsGroup));

loader.load((loader, resources) => {
  for (let y = 0; y < 25; y++) {
    for (let x = 25; x > 0; x--) {
      const ground = new Pixi.Sprite(resources.ground.texture);
      ground.scale.set(.2);
      ground.anchor.set(.5);
      const d = 100;
      ground.x = x * d;
      ground.y = y * d;
      ground.parentGroup = groundGroup;

      if (Math.floor(Math.random() * 100)-1 <= 25) {
        const three2 = new Three();
        three2.addTo(ground);
        three2._sprite.rotation = -62.05;
        three2._sprite.x = 141;
        three2._sprite.y = -141;
        three2._sprite.anchor.set(.5);
        three2._sprite.scale.set(6);
        three2.parentGroup = thingsGroup;
      }
      container.addChild(ground);
    }
  }
});

const map = new Map();

window.onkeydown = window.onkeyup = ({ keyCode, type }) => {
  map.set(keyCode, type == "keydown");

  switch (keyCode) {
    case 87: { // W
      if (map.get(65)) {

        app.move({ x: -1, y: -1 });
      } else if (map.get(68)) {

        app.move({ x: 1, y: -1 });
      } else if (map.get(87)) {

        app.move({ y: -1 });
      }
      break;
    };
    case 65: { // A
      if (map.get(87)) {

        app.move({ x: -1, y: -1 });
      } else if (map.get(83)) {

        app.move({ x: -1, y: 1 });
      } else if (map.get(65)) {

        app.move({ x: -1 });
      }
      break;
    };
    case 83: { // S
      if (map.get(65)) {

        app.move({ x: -1, y: 1 });
      } else if (map.get(68)) {

        app.move({ x: 1, y: 1 });
      } else if (map.get(83)) {

        app.move({ y: 1 });
      }
      break;
    };
    case 68: { // D
      if (map.get(87)) {

        app.move({ x: 1, y: -1 });
      } else if (map.get(83)) {

        app.move({ x: 1, y: 1 });
      } else if (map.get(68)) {

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
      if (map.get(189)) {
        app.zoom(-0.3);
      }
      break;
    };
    case 187: { // =
      if (map.get(187)) {
        app.zoom(0.3);
      }
      break;
    };
  }
};

document.body.appendChild(app.view);
