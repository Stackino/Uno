declare class Page<T> extends Array<T> {
    constructor(data: T[], number: number, count: number);
    number: number;
    count: number;
}
export default Page;
export { Page };
