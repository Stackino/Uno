function getRandomString(length, characters) {
    if (length === void 0) { length = 64; }
    if (characters === void 0) { characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'; }
    var result = '';
    var array;
    if ('Uint8Array' in global && 'crypto' in global) {
        array = new Uint8Array(length);
        crypto.getRandomValues(array);
    }
    else {
        array = new Array(length);
        for (var i = 0; i < length; i++) {
            array[i] = Math.floor(Math.random() * characters.length);
        }
    }
    for (var i = 0; i < length; i++) {
        result += characters.charAt(array[i] % characters.length);
    }
    return result;
}
export default getRandomString;
export { getRandomString };
//# sourceMappingURL=get-random-string.js.map