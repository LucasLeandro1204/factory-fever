import {
  App,
  SceneModule,
  DefineModule,
  ElementModule,
  RenderingModule,
  PerspectiveCamera,
  OrbitControlsModule,
} from 'whs';

export const app = new App([
  new ElementModule(),
  new DefineModule('camera', new PerspectiveCamera({
    fov: 75,
    far: 1000,
    position: new THREE.Vector3(0, 40, 200),
  })),
  new SceneModule(),
  new RenderingModule({
    antialias: true,
    shadowMap: {
      type: THREE.PCFSoftShadowMap,
    },
  }, {
    shadow: true,
  }),
  new OrbitControlsModule(),
]);
