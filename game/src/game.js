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
window.container = container;
app.stage.addChild(container);

loader.load((loader, resources) => {
  let world = new World(resources);
  world.generateTo(container);
});

app.init(window);

document.body.appendChild(app.view);
