export class Lazy<T> {
    private val: T = undefined;

    /**
     *  Creates a new lazy object
     */
    constructor(private func: () => T) {
    }

    public get value(): T {
        if (!this.isValueCreated) {
            this.val = this.func();
        }

        return this.val;
    }

    public get isValueCreated(): boolean {
        return this.val !== undefined;
    }
}
