import { Application } from 'pixi.js';
import Tween from '@tweenjs/tween.js';

export default class extends Application {
  constructor (opts) {
    super(opts);
  }

  move ({ x = 0, y = 0 }) {
    this.stage.pivot.x += x * 50;
    this.stage.pivot.y += y * 50;
  }

  zoom (amount) {
    this.stage.scale.x += amount / 10;
    this.stage.scale.y += amount / 10;
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
