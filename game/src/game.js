import App from 'core/App';
import Three from 'items/Three';
import * as Pixi from 'pixi.js';
import { loader } from 'pixi.js';

const app = new App({
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
});
loader.add('ground', 'src/assets/sprites/ground.png');

const container = new Pixi.Container();
container.rotation = 62.05;
app.stage.addChild(container);

loader.load((loader, resources) => {
  for (let y = 0; y < 25; y++) {
    for (let x = 25; x > 0; x--) {
      const ground = new Pixi.Sprite(resources.ground.texture);
      ground.scale.set(.2);
      ground.anchor.set(.5);
      const d = 100;
      ground.x = x * d;
      ground.y = y * d;

      if (Math.floor(Math.random() * 100)-1 <= 25) {
        const three = new Three();
        three.addTo(ground);
        three._sprite.rotation = -62.05;
        three._sprite.x = 141;
        three._sprite.y = -141;
        three._sprite.anchor.set(.5);
        three._sprite.scale.set(6);
      }
      container.addChild(ground);
    }
  }
});

app.init(window);

document.body.appendChild(app.view);
