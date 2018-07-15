/**
 * @description trace entry
 */
import { traceInput, isObject } from 'Lib/interface';
import traceObj from '@/core/object';
import error from 'Lib/error';

export default (input: traceInput): void => {
    if (isObject(input)) {
        traceObj(input);
    } else {
        error('The input is not a object');
    }
    // } else if (isFunction(input)) {
    //     traceFun(input);
    // }
};
