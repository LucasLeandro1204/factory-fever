import { loader, Sprite } from 'pixi.js';
import { TextureCache } from 'pixi.js/lib/core/utils';

const angles = ['NE', 'NW', 'SE', 'SW'];

export default class {
  constructor (angle = 0) {
    this._angle = 0;
    this._name = this.constructor.name.toLowerCase();
    this.ready = false;
    this._sprite = null;
  }

  rotate () {
    if (!this.ready) {
      return;
    }

    this._angle = this._angle >= 3 ? 0 : this._angle + 1;
    this._sprite.texture = this._texture;
  }

  addTo (stage, x = 0, y = 0) {
    if (!this._sprite) {
      const sprite = new Sprite(this._texture);
      sprite.interactive = true;
      sprite.buttonMode = true;
      sprite.on('click', () => this.rotate());
      this._sprite = sprite;
      this.ready = true;
    }

    this.move(x, y);
    stage.addChild(this._sprite);
  }

  move (x, y) {
    this._sprite.x = x;
    this._sprite.y = y;
  }

  get _texture () {
    return TextureCache[this._name + '_' + angles[this._angle]];
  }

  static setup (name, paths) {
    if (paths.length != 4) {
      throw new Error('Must have 4 angles');
    }

    const object_array = paths.map((url, index) => ({
      name: name + '_' + angles[index],
      url,
    }));

    loader.add(object_array);

    return this;
  }
};
