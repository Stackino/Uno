let styleElement: HTMLStyleElement | null = null;
let styleSheet: CSSStyleSheet | null = null;

function createStyleElement() {
	const style = document.createElement('style');
	style.appendChild(document.createTextNode(''));
	document.head.appendChild(style);
	return style;
}

function injectCssRule(rule: string) {
	if (styleElement === null || styleSheet === null) {
		styleElement = createStyleElement();
		styleSheet = styleElement.sheet as CSSStyleSheet;
	}

	styleSheet.insertRule(rule, styleSheet.cssRules.length);
}

export default injectCssRule;
export { injectCssRule };
