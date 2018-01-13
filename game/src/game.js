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
 const ground = new Pixi.extras.TilingSprite(resources.ground.texture, 5000, 5000);
 app.stage.addChild(ground);
});

document.body.addEventListener('keydown', ({ keyCode }) => {
  console.log(keyCode);
  switch (keyCode) {
    case 65: {
      app.move({ x: -1 });
      break;
    };
    case 87: {
      app.move({ y: -1 });
      break;
    };
    case 68: {
      app.move({ x: 1 });
      break;
    };
    case 83: {
      app.move({ y: 1 });
      break;
    };
    case 81: {
      app.rotateCounterClockwise();
      break;
    };
    case 69: {
      app.rotateClockwise();
      break;
    };
    case 189: {
      app.zoom(-1);
      break;
    };
    case 187: {
      app.zoom(1);
      break;
    };
  }
});

document.body.addEventListener('keyup', ({ keyCode }) => {
  app.stopMoving();
});

document.body.appendChild(app.view);
