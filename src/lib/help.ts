/**
 * @description help function
 */

export const getFcuntionName = (func: Function): string => {
    if (typeof func == 'function' || typeof func == 'object') {
        var name = ('' + func).match(/function\s*([\w\$]*)\s*\(/);
    }
    return name && name[1];
};
