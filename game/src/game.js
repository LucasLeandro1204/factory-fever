import { app } from 'core/app';
import { AmbientLight, Plane } from 'whs';
import { MeshPhongMaterial } from 'three';
import { addMultipleTo } from 'core/helpers';

addMultipleTo(app,
  new AmbientLight({
    intensity: 0.3,
  }),
  new Plane({
    geometry: {
      width: 100,
      height: 100
    },
    material: new MeshPhongMaterial({ color: 0x447F8B }),
    rotation: {
      x: -Math.PI / 2,
    },
  }),
);

app.start();
