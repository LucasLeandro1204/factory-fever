import { Application } from 'pixi.js';

export default class extends Application {
  constructor (opts) {
    super(opts);
  }

  move ({ x = 0, y = 0 }) {
    // add it to var
  }

  stopMoving () {
    this.moving = false;
  }

  init () {
    this.ticker.add((delta) => {
      // use twin to smooth
    });
  }
}
