import IsometricBlock from 'core/IsometricBlock';

const name = 'three';

class Three extends IsometricBlock {
  constructor () {
    super(name);
  }
}

export default Three.setup(name, [
  'src/assets/sprites/treePineSnow_NE.png',
  'src/assets/sprites/treePineSnow_NW.png',
  'src/assets/sprites/treePineSnow_SE.png',
  'src/assets/sprites/treePineSnow_SW.png',
]);
