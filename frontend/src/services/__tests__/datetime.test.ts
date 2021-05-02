import { DisplayTime } from '../datetime';

describe('services/datetime/DisplayTime', () => {
    test('Show 20:00 as 08:00 PM', () => {
        const dateToTest = new Date();
        dateToTest.setHours(20);
        dateToTest.setMinutes(0);
        dateToTest.setSeconds(0);
        dateToTest.setMilliseconds(0);
        const result = DisplayTime(dateToTest);
        const expected = '08:00 PM';
        expect(result).toBe(expected);
    });

    test('Show 00:05 as 12:05 AM', () => {
        const dateToTest = new Date();
        dateToTest.setHours(24);
        dateToTest.setMinutes(5);
        dateToTest.setSeconds(0);
        dateToTest.setMilliseconds(0);
        const result = DisplayTime(dateToTest);
        const expected = '12:05 AM';
        expect(result).toBe(expected);
    });

    test('Show 12:30 as 12:30 PM', () => {
        const dateToTest = new Date();
        dateToTest.setHours(12);
        dateToTest.setMinutes(30);
        dateToTest.setSeconds(0);
        dateToTest.setMilliseconds(0);
        const result = DisplayTime(dateToTest);
        const expected = '12:30 PM';
        expect(result).toBe(expected);
    });
});
