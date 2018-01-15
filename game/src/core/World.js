import * as Pixi from 'pixi.js'
import Three from 'items/Three';
import Config from 'core/Config';

export default class {
	constructor(resources) {
		this.resources = resources;
	}

	generateTo(container) {

		const borders  = [
			{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 },
			{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 },
			{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 },

			{ x: Config.WORLD_SIZE.x-1, y: Config.WORLD_SIZE.y-1 }, { x: Config.WORLD_SIZE.x-1, y: Config.WORLD_SIZE.y-2 }, { x: Config.WORLD_SIZE.x-1, y: Config.WORLD_SIZE.y-3 }, 
			{ x: Config.WORLD_SIZE.x-2, y: Config.WORLD_SIZE.x-1 }, { x: Config.WORLD_SIZE.x-2, y: Config.WORLD_SIZE.y-2 }, { x: Config.WORLD_SIZE.x-2, y: Config.WORLD_SIZE.y-3 }, 
			{ x: Config.WORLD_SIZE.x-3, y: Config.WORLD_SIZE.x-1 }, { x: Config.WORLD_SIZE.x-3, y: Config.WORLD_SIZE.y-2 }, { x: Config.WORLD_SIZE.x-3, y: Config.WORLD_SIZE.y-3 }, 
	  ];

		for (let y = 0; y < Config.WORLD_SIZE.y; y++) {
	    for (let x = Config.WORLD_SIZE.x; x > 0; x--) {

	    	const position = { x, y };
	    	let sand;
	    	let ground;

	    	for (let i = 0; i < borders.length; i++) {
	    		console.log(`x: ${x}, y: ${y}, border: ${JSON.stringify(borders[i])}`);
	    		if (JSON.stringify(borders[i]) == JSON.stringify(position)) {
	    			sand = true;
	    			break;
	    		}
	    	}

	    	if (sand) {
	    		if (this.randomWithChangeOf(80)) {
	    			ground = this.genGround("sand", x, y);
	    		} else {
	    			ground = this.genGround("grass", x, y);

		      	if (this.randomWithChangeOf(25)) {
		       		this.genTreeTo(ground);
		      	}
	    		}
	    	} else {
	    		ground = this.genGround("grass", x, y);

		      if (this.randomWithChangeOf(25)) {
		        this.genTreeTo(ground);
		      }
		    }
	      container.addChild(ground);
	    }
	  }
	}

	genTreeTo(ground) {
		const three = new Three();
		three.addTo(ground);
		three._sprite.rotation = -62.05;
		three._sprite.x = 141;
		three._sprite.y = -141;
		three._sprite.anchor.set(.5);
		three._sprite.scale.set(6);
	}

	genGround(type, x, y) {
		const ground = new Pixi.Sprite(this.resources[type].texture);
		ground.scale.set(.2);
		ground.anchor.set(.5);
		const d = 100;
		ground.x = x * d;
		ground.y = y * d;
		return ground;
	}

	randomWithChangeOf(chance) {
		return Math.floor(Math.random() * 100)-1 <= chance;
	}
}