import App from 'core/App';
import Three from 'items/Three';
import * as Pixi from 'pixi.js';
import { loader } from 'pixi.js';
import Config from 'core/Config';

const app = new App({
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
});
loader.add('ground', 'src/assets/sprites/ground.png');

const container = new Pixi.Container();
container.rotation = 62.05;
container.interactive = true;
app.stage.addChild(container);

const onDragStart = (event) => {
  this.data = event.data;
  this.dragging = true;
};
const onDragEnd = () => {
  this.dragging = false;
  this.data = null;
};
const onDragMove = () => {
  if (this.dragging) {

    app.stage.pivot.y = -this.data.global.y;
    app.stage.pivot.x = -this.data.global.x;
  }
};

container
  .on('mousedown', onDragStart)
  .on('touchstart', onDragStart)
  .on('mouseup', onDragEnd)
  .on('mouseupoutside', onDragEnd)
  .on('touchend', onDragEnd)
  .on('touchendoutside', onDragEnd)
  .on('mousemove', onDragMove)
  .on('touchmove', onDragMove);

loader.load((loader, resources) => {
  for (let y = 0; y < Config.WORLD_SIZE[1]; y++) {
    for (let x = Config.WORLD_SIZE[0]; x > 0; x--) {
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
