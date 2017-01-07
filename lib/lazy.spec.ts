import { Lazy } from './lazy';

describe('Lazy', () => {
    let expectedResult: any = {
        testValue: 'result val'
    };
    let target: Lazy<any> = undefined;

    beforeEach(() => {
        target = new Lazy<any>(() => expectedResult);
    });

    it('should provide correct value', () => {
        const result = target.value;
        expect(result).toBe(expectedResult);
    });

    it('should provide same value when evaluated multible times', () => {
        const result = target.value;
        const result2 = target.value;
        expect(result).toBe(result2);
    });

    it('should have value created after value is requested', () => {
        const result = target.value;
        expect(target.isValueCreated).toBe(true);
    });

    it('should not have value created before value is requested', () => {
        expect(target.isValueCreated).toBe(false);
    });
});
