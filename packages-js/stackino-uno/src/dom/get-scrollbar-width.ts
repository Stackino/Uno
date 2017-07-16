let scrollbarWidth: { vertical: number, horizontal: number } | null = null;

function detectScrollbarWidth() {
	const testElement = document.createElement('div');
	testElement.style.cssText = `
		width: 50px !important;
		height: 50px !important;
		overflow: scroll !important;
		position: absolute !important;
		top: 9999px !important;
		left: 9999px !important;
	`;

	document.body.appendChild(testElement);

	const vertical = testElement.offsetWidth - testElement.clientWidth;
	const horizontal = testElement.offsetHeight - testElement.clientHeight;

	document.body.removeChild(testElement);

	return {
		vertical,
		horizontal,
	};
}

function getScrollbarWidth() {
	if (scrollbarWidth === null) {
		scrollbarWidth = detectScrollbarWidth();
	}
	return scrollbarWidth;
}

export default getScrollbarWidth;
export { getScrollbarWidth };
