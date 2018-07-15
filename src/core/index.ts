/**
 * @description trace entry
 */
import { traceInput, isObject } from 'Lib/interface';
import traceObj from '@/core/object';

export default (input: traceInput): void => {
    if (isObject(input)) {
        traceObj(input);
    }
};
