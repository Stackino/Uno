let _counter: number = 0x1000;

function getUid(): number {
	return _counter++;
}

export default getUid;
export { getUid };
