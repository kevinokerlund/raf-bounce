console.log('Wow');

class Bouncer {
	constructor(callback) {
		this.callback = callback;
		this.ticking = false;
	}

	update(args) {
		this.callback && this.callback(...args);
		this.ticking = false;
	}

	requestTick(args) {
		if (!this.ticking) {
			this.ticking = true;
			window.requestAnimationFrame(this.update.bind(this, args));
		}
	}

	handle(...args) {
		this.requestTick(args);
	}
}

export default function RafBounce(callback) {
	const instance = new Bouncer(callback);
	return instance.handle.bind(instance);
}
