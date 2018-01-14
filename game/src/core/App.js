import Config from 'core/Config';
import { Application } from 'pixi.js';

export default class extends Application {
  constructor (opts) {
    super(opts);
    this.keymap = new Map();
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
}
