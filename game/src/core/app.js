import {
  App,
  SceneModule,
  DefineModule,
  ElementModule,
  RenderingModule,
  PerspectiveCamera,
  OrbitControlsModule,
} from 'whs';

import { Vector3, PCFSoftShadowMap } from 'three';

export const app = new App([
  new ElementModule(),
  new DefineModule('camera', new PerspectiveCamera({
    fov: 75,
    far: 1000,
    position: new Vector3(0, 40, 200),
  })),
  new SceneModule(),
  new RenderingModule({
    antialias: true,
    shadowMap: {
      type: PCFSoftShadowMap,
    },
  }, {
    shadow: true,
  }),
  new OrbitControlsModule(),
]);
