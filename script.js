"use strict";

function showFirstMessage(a, b) {
    return (a + b);
}

const a = function(a, b) {
    return a + b;
};

const b = (a, b) => {return a + b;};

console.log(b(1, 20));

