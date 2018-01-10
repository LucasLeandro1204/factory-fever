import { loader, Sprite } from 'pixi.js';
import { TextureCache } from 'pixi.js/lib/core/utils';

export default class {
  constructor (name, paths, { angle = 0 } = {}) {
    this.name = name;
    this._angles = ['NE', 'NW', 'SE', 'SW'];
    this._angle = angle;
    this.sprite = null;
    loader.add(paths.map((path, index) => {
      return {
        name: this.name + '_' + this._angles[index],
        url: path,
      };
    }));
  }

  rotate () {
    this._angle = this._angle >= 3 ? 0 : this._angle + 1;
    this.sprite.texture = this.texture;
  }

  get texture () {
    return TextureCache[this.name + '_' + this._angles[this._angle]];
  }

  add (stage) {
    if (!this.sprite) {
      this.sprite = new Sprite(this.texture);
    }
    stage.addChild(this.sprite);
  }
};
