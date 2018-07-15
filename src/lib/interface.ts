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

export function isFunction(input: any): input is Function {
    return Object.prototype.toString.call(input) === '[object Function]';
}

export function isArray(input: any): input is any[] {
    return Object.prototype.toString.call(input) === '[object Array]';
}
