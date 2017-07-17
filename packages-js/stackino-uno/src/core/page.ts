export class Page<T> extends Array<T> {
	constructor(data: T[], number: number, count: number) {
		super();

		this.number = number;
		this.count = count;

		this.push.apply(this, data);
	}

	number: number;
	count: number;
}

export default Page;
