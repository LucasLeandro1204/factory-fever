import { loader, Sprite } from 'pixi.js';
import { TextureCache } from 'pixi.js/lib/core/utils';

export default class {
  constructor ({ rotation = -1, corner = '' } = {}) {
    this._rotation = rotation;
    this._corner = corner;
    this._sprite = null;
  }

  get _name () {
    return this.constructor.name.toLowerCase() + this._corner;
  }

  get _texture () {
    const sufix = this._corner ? 'Corner' : '';

    return TextureCache[this._name + sufix];
  }

  addTo (stage, pos) {
    if (!this._sprite) {
      const sprite = new Sprite(this._texture);
      const rotation = (this._rotation + 1)  % 4;
      sprite.rotation = rotation * 62.05;
      sprite.interactive = true;

      this._sprite = sprite;
    }

    this.move(pos);
    stage.addChild(this._sprite);
  }

  move (pos) {
    this._sprite.x = pos.x;
    this._sprite.y = pos.y;
  }

  on (event, callback) {
    this._sprite.on(event, callback);
  }

  static setup (paths) {
    const array = Object.keys(paths)
      .map((name) => ({
        name,
        url: paths[name],
      }));

    loader.add(array);

    return this;
  }
};
