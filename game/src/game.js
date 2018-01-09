import { app } from 'core/app';
import { AmbientLight, Plane, Importer } from 'whs';
import { addMultipleTo } from 'core/helpers';
import {resolve} from 'path';

const scene = new THREE.Scene();

const log = (...args) => console.log(args);
const loader = new THREE.FBXLoader(new THREE.LoadingManager());

addMultipleTo(app,
  new AmbientLight({
    intensity: 0.3,
  }),
  new Plane({
    geometry: {
      width: 100,
      height: 100
    },
    material: new THREE.MeshPhongMaterial({ color: 0x447F8B }),
    rotation: {
      x: -Math.PI / 2,
    },
  }),
  new Importer({
    loader: new THREE.FBXLoader(new THREE.LoadingManager()),
    url: resolve(__dirname, 'game/src/assets/esse_vai.fbx'),

    parser(geometry, material) {
      log(geometry);
      log(material);
      return new THREE.Mesh(geometry, material);
    },
    position: [0, 100, 0],
  }),
);

app.start();
