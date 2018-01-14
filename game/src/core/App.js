import Config from 'core/Config';
import { Application } from 'pixi.js';

export default class extends Application {
  constructor (opts) {
    super(opts);
  }

  move ({ x = 0, y = 0 }) {
    this.stage.pivot.x += x * Config.MOVE_SPEED;
    this.stage.pivot.y += y * Config.MOVE_SPEED;
  }

  zoom (amount) {
    this.stage.scale.x += amount * Config.ZOOM_SPEED;
    this.stage.scale.y += amount * Config.ZOOM_SPEED;
  }

  stopMoving () {
    this.moving = false;
  }

  init () {
    this.ticker.add((delta) => {
      //
    });
  }
}
