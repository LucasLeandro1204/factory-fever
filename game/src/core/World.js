import Config from 'core/Config';
import { Container } from 'pixi.js';
import Dirt from 'items/ground/Dirt';

const mapEvents = {
  mouseup: 'onDragEnd',
  touchend: 'onDragEnd',
  mousemove: 'onDragMove',
  touchmove: 'onDragMove',
  mousedown: 'onDragStart',
  touchstart: 'onDragStart',
  mouseupoutside: 'onDragEnd',
  touchendoutside: 'onDragEnd',
};

export default class {
  constructor (stage) {
    this.container = new Container();
    this.drag = {};
    this.stage = stage;
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd   = this.onDragEnd.bind(this);
    this.onDragMove  = this.onDragMove.bind(this);
  }

  init () {
    this.container.rotation = 62.05;
    this.container.interactive = true;
    this.generate();

    Object.keys(mapEvents).forEach((event) => {
      this.container.on(event, e => this[mapEvents[event]](e));
    });

    this.stage.addChild(this.container);
  }

  onDragStart(event) {
    this.drag.pos = event.data.global;
    this.drag.run = true;
  }

  onDragEnd() {
    this.drag.pos = {};
    this.drag.run = false;
  }

  onDragMove() {
    if (!this.drag.run) {
      return;
    }

    if (this.drag.last) {
      const deltaX = this.drag.last.x - this.drag.pos.x;
      const deltaY = this.drag.last.y - this.drag.pos.y;

      if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0) { // left
        this.stage.pivot.x += Config.DRAG_SPEED;
      } else if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) { // right
        this.stage.pivot.x -= Config.DRAG_SPEED;
      } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) { // up
        this.stage.pivot.y += Config.DRAG_SPEED;
      } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) { // down
        this.stage.pivot.y -= Config.DRAG_SPEED;
      }
    }

    this.drag.last = { 
      x: this.drag.pos.x, 
      y: this.drag.pos.y,
    };
  }

  generate () {
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 25; j++) {
        const ground = new Dirt();
        ground.addTo(this.container, { x: i * 100, y: j * 100});
        // ground.on('mouseover', (e) => console.log(e));
      }
    }
  }
};
