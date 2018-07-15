/**
 * @description trace function
 */

import { Iinput } from '@/lib/interface';

export default (obj: Iinput, key: string, fun: Function): void => {
    const old: Function = fun;

    obj[key] = function() {
        console.trace(`function key: ${key}`);
        old(...arguments);
    };
};
