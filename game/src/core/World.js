import * as Pixi from 'pixi.js'
import Three from 'items/Three';
import Config from 'core/Config';

export default class {
	constructor(resources) {
		this.resources = resources;
		this.ground = null;
	}

	generateTo(container) {

		for (let y = 0; y < Config.WORLD_SIZE.y+1; y++) {
	    for (let x = Config.WORLD_SIZE.x; x > 0; x--) {

	    	if (x == Config.WORLD_SIZE.x || x == Config.WORLD_SIZE.x-1 || x == Config.WORLD_SIZE.x-2) {

	    		switch(x) {
	    			case Config.WORLD_SIZE.x: {
	    				this.ground = this.genGround("sand", x, y);
	    				break;
	    			};
	    			case Config.WORLD_SIZE.x-1: {
	    				if (this.randomWithChanceOf(80)) {
	    					this.ground = this.genGround("sand", x, y);
	    					break;
	    				} else if (this.logic(x, y)) {
	    					this.ground = this.genGrassGround(x, y);
	    					break;
	    				}
	    				this.ground = this.genGround("sand", x, y);
	    				break;
	    			};
	    			case Config.WORLD_SIZE.x-2: {
	    				if (this.randomWithChanceOf(15)) {
	    					this.ground = this.genGround("sand", x, y);
	    					break;
	    				} else if (this.logic(x, y)) {
	    					this.ground = this.genGrassGround(x, y);
	    					break;
	    				}
	    				this.ground = this.genGround("sand", x, y);
	    				break;
	    			};
	    		}
	    	} else if (y == Config.WORLD_SIZE.y || y == Config.WORLD_SIZE.y-1 || y == Config.WORLD_SIZE.y-2) {

	    		switch(y) {
	    			case Config.WORLD_SIZE.y: {
	    				this.ground = this.genGround("sand", x, y);
	    				break;
	    			};
	    			case Config.WORLD_SIZE.y-1: {
	    				if (this.randomWithChanceOf(80)) {
	    					this.ground = this.genGround("sand", x, y);
	    					break;
	    				} else if (this.logic(x, y)) {
	    					this.ground = this.genGrassGround(x, y);
	    					break;
	    				}
	    				this.ground = this.genGround("sand", x, y);
	    				break;
	    			};
	    			case Config.WORLD_SIZE.y-2: {
	    				if (this.randomWithChanceOf(15)) {
	    					this.ground = this.genGround("sand", x, y);
	    					break;
	    				} else if (this.logic(x, y)) {
	    					this.ground = this.genGrassGround(x, y);
	    					break;
	    				}
	    				this.ground = this.genGround("sand", x, y);
	    				break;
	    			};
	    		}
	    	} else if (x == 1 || x == 2 || x == 3) {

	    		switch(x) {
	    			case 1: {
	    				this.ground = this.genGround("sand", x, y);
	    				break;
	    			};
	    			case 2: {
	    				if (this.randomWithChanceOf(80)) {
	    					this.ground = this.genGround("sand", x, y);
	    					break;
	    				} else if (this.logic(x, y)) {
	    					this.ground = this.genGrassGround(x, y);
	    					break;
	    				}
	    				this.ground = this.genGround("sand", x, y);
	    				break;
	    			};
	    			case 3: {
	    				if (this.randomWithChanceOf(15)) {
	    					this.ground = this.genGround("sand", x, y);
	    					break;
	    				} else if (this.logic(x, y)) {
	    					this.ground = this.genGrassGround(x, y);
	    					break;
	    				}
	    				this.ground = this.genGround("sand", x, y);
	    				break;
	    			};
	    		}
	    	} else if (y == 0 || y == 1 || y == 2) {

	    		switch(y) {
	    			case 0: {
	    				this.ground = this.genGround("sand", x, y);
	    				break;
	    			};
	    			case 1: {
	    				if (this.randomWithChanceOf(80)) {
	    					this.ground = this.genGround("sand", x, y);
	    					break;
	    				} else if (this.logic(x, y)) {
	    					this.ground = this.genGrassGround(x, y);
	    					break;
	    				}
	    				this.ground = this.genGround("sand", x, y);
	    				break;
	    			};
	    			case 2: {
	    				if (this.randomWithChanceOf(15)) {
	    					this.ground = this.genGround("sand", x, y);
	    					break;
	    				} else if (this.logic(x, y)) {
	    					this.ground = this.genGrassGround(x, y);
	    					break;
	    				}
	    				this.ground = this.genGround("sand", x, y);
	    				break;
	    			};
	    		}
	    	} else {

	    		this.ground = this.genGrassGround(x, y, 25);
	    	}

	    	if (!this.ground) continue;

	      container.addChild(this.ground);
	    }
	  }
	}

	logic(x, y) {
		if ((Config.WORLD_SIZE.x   == x && 0                     == y) || // x=1, y=1   xxx
			  (Config.WORLD_SIZE.x   == x && 1                     == y) || // x=1, y=2     x
			  (Config.WORLD_SIZE.x   == x && 2                     == y) || // x=1, y=3     x (cornor top right fucking logic :D)
			  (Config.WORLD_SIZE.x-1 == x && 0                     == y) || // x=2, y=1   
			  (Config.WORLD_SIZE.x-2 == x && 0                     == y) || // x=3, y=1
				//-----------------------------------------------------------------------
				(3                     == x && 0                     == y) || // x=3, y=1   xxx
			  (3                     == x && 1                     == y) || // x=3, y=2   x
			  (3                     == x && 2                     == y) || // x=3, y=3   x   (cornor top left fucking logic :D)
			  (2                     == x && 0                     == y) || // x=2, y=1   
			  (1                     == x && 0                     == y) || // x=1, y=1
				//-----------------------------------------------------------------------
				(Config.WORLD_SIZE.x   == x && Config.WORLD_SIZE.y   == y) || // x=1, y=1     x
			  (Config.WORLD_SIZE.x   == x && Config.WORLD_SIZE.y-1 == y) || // x=1, y=2     x
			  (Config.WORLD_SIZE.x   == x && Config.WORLD_SIZE.y-2 == y) || // x=1, y=3   xxx (cornor bottom right fucking logic :D)
			  (Config.WORLD_SIZE.x-1 == x && Config.WORLD_SIZE.y-2 == y) || // x=2, y=3   
			  (Config.WORLD_SIZE.x-2 == x && Config.WORLD_SIZE.y-2 == y) || // x=3, y=3
				//-----------------------------------------------------------------------
				(3                     == x && Config.WORLD_SIZE.y   == y) || // x=3, y=1   x
			  (3                     == x && Config.WORLD_SIZE.y-1 == y) || // x=3, y=2   x
			  (1                     == x && Config.WORLD_SIZE.y-2 == y) || // x=1, y=3   xxx (cornor bottom left fucking logic :D)
			  (2                     == x && Config.WORLD_SIZE.y-2 == y) || // x=2, y=3   
			  (3                     == x && Config.WORLD_SIZE.y-2 == y)    // x=3, y=3
				//-----------------------------------------------------------------------
			 ) {
			return false;
		}
		return true;
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

	genGrassGround(x, y, treeChance) {
		const ground = this.genGround("grass", x, y);

		if (this.randomWithChanceOf(treeChance)) {
			this.genTreeTo(ground);
		}
		return ground;
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

	randomWithChanceOf(chance) {
		return Math.floor(Math.random() * 100)-1 <= chance;
	}
}