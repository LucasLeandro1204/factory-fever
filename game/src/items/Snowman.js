import IsometricBlock from 'core/IsometricBlock';

const name = 'snowman';

class Snowman extends IsometricBlock {
  constructor () {
    super(name);
  }
}

export default Snowman.setup(name, [
  'src/assets/sprites/snowmanFancy_NE.png',
  'src/assets/sprites/snowmanFancy_NW.png',
  'src/assets/sprites/snowmanFancy_SE.png',
  'src/assets/sprites/snowmanFancy_SW.png',
]);
