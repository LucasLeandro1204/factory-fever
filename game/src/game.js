import { app } from 'core/app';
import { AmbientLight, Plane } from 'whs';
import { addMultipleTo } from 'core/helpers';
import {resolve} from 'path';

const scene = new THREE.Scene();

const log = (...args) => console.log(args);
const loader = new THREE.FBXLoader(new THREE.LoadingManager());

loader.load(resolve(__dirname, 'game/src/assets/mais1test (1).fbx'), (obj) => {
  scene.add(obj);
}, log,log);

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
);
app.setScene(scene);

app.start();
