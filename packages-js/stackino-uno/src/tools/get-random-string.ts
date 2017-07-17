declare var global: Window;

export function getRandomString(length = 64, characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-') {
	let result = '';

	let array: Uint8Array | number[];
	if ('Uint8Array' in global && 'crypto' in global) {
		array = new Uint8Array(length);
		crypto.getRandomValues(array);
	} else {
		array = new Array(length);

		for (let i = 0; i < length; i++) {
			array[i] = Math.floor(Math.random() * characters.length);
		}
	}

	for (let i = 0; i < length; i++) {
		result += characters.charAt(array[i] % characters.length);
	}

	return result;
}

export default getRandomString;
