/**
	Dok-gamelib engine

	Description: Game engine for producing web games easily using JavaScript and WebGL
	Author: jacklehamster
	Sourcode: https://github.com/jacklehamster/dok-gamelib
	Year: 2020
 */

class FPSTracker {
	constructor(maxCapacity) {
		this.maxCapacity = maxCapacity || 60;
		this.accumulator = [];
		this.index = -1;
	}

	tick() {
		const time = Date.now();
		if (this.accumulator.length < this.maxCapacity) {
			this.accumulator.push(0);
		}
		this.index = (this.index + 1) % this.accumulator.length;
		this.accumulator[this.index] = time;
		return this.frameRate;
	}

	get frameRate() {
		const { accumulator, index } = this;
		if (accumulator.length < 2) {
			return 0;
		}
		const timeDiff =  accumulator[index] - accumulator[(index+1) % accumulator.length];
		return 1000 / (timeDiff / accumulator.length);
	}

	static tick() {
		return instance.tick();
	}

	static get frameRate() {
		return instance.frameRate;
	}
}

const instance = new FPSTracker();


module.exports = {
	FPSTracker,
};
