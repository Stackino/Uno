let _counter: number = 0x1000;

export function getUid(): number {
	return _counter++;
}

export default getUid;
