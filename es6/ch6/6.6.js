'use strict';

const g = function f(stop) {
    if(stop) console.log('f stoped');
    f(true);
};

g(false);
