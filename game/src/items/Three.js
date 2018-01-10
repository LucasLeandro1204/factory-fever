import IsometricBlock from 'core/IsometricBlock';

export default class extends IsometricBlock {
  constructor () {
    super('three', [
      'src/assets/sprites/treePineSnow_NE.png',
      'src/assets/sprites/treePineSnow_NW.png',
      'src/assets/sprites/treePineSnow_SE.png',
      'src/assets/sprites/treePineSnow_SW.png',
    ]);
  }
}
