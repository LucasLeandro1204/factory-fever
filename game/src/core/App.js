import Config from 'core/Config';
import { Application } from 'pixi.js';

export default class extends Application {
  constructor (opts) {
    super(opts);
    this.keymap = new Map();
    this.last_position = {};
    this.onDragMove = this.onDragMove.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  move ({ x = 0, y = 0 }) {
    this.stage.pivot.x += x * Config.MOVE_SPEED;
    this.stage.pivot.y += y * Config.MOVE_SPEED;
  }

  zoom (amount) {
    this.stage.scale.x += amount * Config.ZOOM_SPEED;
    this.stage.scale.y += amount * Config.ZOOM_SPEED;
  }

  init (global) {
    global.onkeydown = global.onkeyup = ({ keyCode, type }) => {
      if (type == 'keyup') {
        this.onKeyup(keyCode);
      } else {
        this.onKeydown(keyCode);
      }
    };

    global
      .container
        .on('mousedown',       this.onDragStart )
        .on('touchstart',      this.onDragStart )
        .on('mouseup',         this.onDragEnd   )
        .on('mouseupoutside',  this.onDragEnd   )
        .on('touchend',        this.onDragEnd   )
        .on('touchendoutside', this.onDragEnd   )
        .on('mousemove',       this.onDragMove  )
        .on('touchmove',       this.onDragMove  );

    // this.ticker.add((delta) => {
    //   //
    // });
  }

  getDirection (a, b) {
    return a ? 1 : b ? -1 : 0;
  }

  onKeyup (key) {
    this.keymap.set(key, false);
  }

  onKeydown (key) {
    this.keymap.set(key, true);

    switch (key) {
      case 87: { // W
        this.move({ x: this.getDirection(this.keymap.get(68), this.keymap.get(65)) , y: -1 });
        break;
      };
      case 65: { // A
        this.move({ x: -1, y: this.getDirection(this.keymap.get(83), this.keymap.get(87)) });
        break;
      };
      case 83: { // S
        this.move({ x: this.getDirection(this.keymap.get(68), this.keymap.get(65)), y: 1 });
        break;
      };
      case 68: { // D
        this.move({ x: 1, y: this.getDirection(this.keymap.get(83), this.keymap.get(87))});
        break;
      };
      case 81: { // Q
        this.rotate(-1);
        break;
      };
      case 69: { // E
        this.rotate(1);
        break;
      };
      case 189: { // -
        this.zoom(-1);
        break;
      };
      case 187: { // =
        this.zoom(1);
        break;
      };
    }
  }

  onDragStart(event) {
    this.data = event.data;
    this.dragging = true;
  }
  
  onDragEnd() {
    this.dragging = false;
    this.data = null;
  }

  onDragMove() {
    if (this.dragging) {

      if (this.last_position.x) {
        let deltaX = this.last_position.x - this.data.global.x;
        let deltaY = this.last_position.y - this.data.global.y;

        if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0) { //left
          this.stage.pivot.x += Config.DRAG_SPEED;
        } else if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) { //right
          this.stage.pivot.x -= Config.DRAG_SPEED;
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) { //up
          this.stage.pivot.y += Config.DRAG_SPEED;
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) { //down
          this.stage.pivot.y -= Config.DRAG_SPEED;
        }
      }
      this.last_position = {
        x: this.data.global.x,
        y: this.data.global.y,
      };
    }
  }
}
