import IsometricBlock from 'core/IsometricBlock';

class Three extends IsometricBlock {
  constructor () {
    super('three');
  }
}

export default Three.setup('three', [
  'src/assets/sprites/treePineSnow_NE.png',
  'src/assets/sprites/treePineSnow_NW.png',
  'src/assets/sprites/treePineSnow_SE.png',
  'src/assets/sprites/treePineSnow_SW.png',
]);
