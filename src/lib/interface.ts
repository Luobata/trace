/**
 * @description interface entry
 */

export type traceInput = Iinput;

export interface Iinput {
    [key: string]: any;
}

export function isObject(input: any): input is object {
    return Object.prototype.toString.call(input) === '[object Object]';
}
