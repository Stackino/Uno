const topbarImpl = require<any>('topbar');

let depth = 0;

// topbar
class TopBar {
	private static hideInternal() {
		if (depth > 0) {
			return;
		}

		topbarImpl.hide();
	}

	static show() {
		depth++;

		if (depth === 1) {
			topbarImpl.show();
		}

		return this.hide;
	}

	static hide() {
		if (depth <= 0) {
			return;
		}

		depth--;

		if (depth === 0) {
			// delay hide for a bit in case we would just immediately show again
			setTimeout(this.hideInternal, 100);
		}
	}
}

export default TopBar;
export { TopBar };
