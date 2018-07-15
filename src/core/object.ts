/**
 * @description trace object
 */

import { Iinput, isObject, isFunction, isArray } from '@/lib/interface';
import traceFun from '@/core/function';

const walk = (input: Iinput): void => {
    const keys: string[] = Object.keys(input);

    for (const i of keys) {
        // type switch
        if (isObject(input[i])) {
            walk(input[i]);
        } else if (isFunction) {
            traceFun(input, i, input[i]);
        } else if (isArray(input[i])) {
            for (const j of input[i]) {
                walk(j);
            }
        } else {
            defineProperty(input, i, input[i]);
        }
    }
};

const defineProperty: Function = (obj: Iinput, key: string, val: any): void => {
    const property: PropertyDescriptor = Object.getOwnPropertyDescriptor(
        obj,
        key,
    );
    const getter: Function = property.get;
    const setter: Function = property.set;

    Object.defineProperty(obj, key, {
        configurable: property.configurable,
        enumerable: property.enumerable,
        get() {
            const value = getter ? getter.call(obj) : val;

            return value;
        },
        set(data: any) {
            const value = getter ? getter.call(obj) : val;

            if (data === value) {
                return;
            }

            if (setter) {
                setter.call(data);
            } else {
                // logger(data);
                console.trace(`key: ${key}, value: ${data}`);
                val = data;
            }
        },
    });
};

// strict mode can't use callee
const logger: Function = function(data: any) {
    console.trace(data);
    // const stack = [];
    // console.log(arguments);
    // let caller = arguments.callee.caller;
    // while (caller) {
    //     stack.unshift(getFcuntionName(caller));
    //     caller = caller && caller.caller;
    // }
    // console.log('functions on stack:' + '\n' + stack.join('\n'));
};

export default walk;
