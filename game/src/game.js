import App from 'core/App';
import * as Pixi from 'pixi.js';
import { loader } from 'pixi.js';
import World from 'core/World';

const app = new App({
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
  backgroundColor: 0x010441,
});
loader.add('grass', 'src/assets/sprites/grass.png');
loader.add('sand' , 'src/assets/sprites/sand.png' );

const container = new Pixi.Container();
container.rotation = 62.05;
container.interactive = true;
app.stage.addChild(container);

/*const onDragStart = (event) => {
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
  .on('touchmove', onDragMove);*/

loader.load((loader, resources) => {
  let world = new World(resources);
  world.generateTo(container);
});

app.init(window);

document.body.appendChild(app.view);
