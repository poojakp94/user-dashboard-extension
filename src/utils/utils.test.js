import { convert24To12 } from './index';
// import { isForXStatement } from '@babel/types';

describe('Utils', () => {
    describe('Convert 24 hours time string to 12', () => {
        it('should convert 24 hours time string to 12', () => {
            expect(typeof convert24To12("18:45")).toBe('string');
            expect(convert24To12('18:45')).toEqual('06:45 PM');
            expect(convert24To12("11:05")).toEqual("11:05 AM");
            expect(convert24To12('17:05')).toEqual('05:05 PM');
            expect(convert24To12('11:00')).toEqual('11:00 AM');
            expect(convert24To12('12:00')).toEqual('12:00 PM');
            expect(convert24To12('00:00')).toEqual('12:00 AM');
            expect(convert24To12('15:00')).toEqual('03:00 PM');
            expect(convert24To12('21:00')).toEqual('09:00 PM');
            expect(convert24To12('00:01')).toEqual('12:01 AM');
        });
    });
});