/**
 * @description error output
 */

export default (input: string): void => {
    if (console.error) {
        console.error(input);
    } else {
        throw new Error(input);
    }
};
