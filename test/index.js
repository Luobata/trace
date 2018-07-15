import trace from '../src/index';
import { log } from 'util';

window.onload = () => {
    const a = {
        b: 1,
        c: a => {
            console.log(a);
        },
    };

    trace(a);

    setTimeout(() => {
        a.c(231);
    }, 2000);
};
