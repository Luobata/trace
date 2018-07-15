import trace from '../src/index';

window.onload = () => {
    const a = {
        b: 1,
    };

    trace(a);

    setTimeout(() => {
        console.log(a.b);
        a.b = 2;
        console.log(a.b);
    }, 2000);
};
