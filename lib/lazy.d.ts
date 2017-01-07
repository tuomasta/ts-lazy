export declare class Lazy<T> {
    private func;
    private val;
    /**
     *  Creates a new lazy object
     */
    constructor(func: () => T);
    readonly value: T;
    readonly isValueCreated: boolean;
}
