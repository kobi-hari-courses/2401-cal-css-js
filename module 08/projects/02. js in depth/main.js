var z1 = 10;
var z2 = 20;
var z3 = z1 + z2;

var x1 = "Hello";
var x2 = 'Hello';
var x3 = `${z1} + ${z2} = ${z3}`;


var a = "Hello".toUpperCase(); // "HELLO"

var o = {};

o.myself = o;

function max(a, b) {
    if (a < b) return b;
    return a;
}

function crazy() {
    return function() {
        console.log('WOW');
    }
}

var r = crazy();
r();

var res = max(10, 20);
console.log('res = ', res);


function doSomething() {
    console.log('Bla Bla Bla');
}

res = doSomething();

var doSomething = function() {
    console.log('bla bla bla');
}


var doSomethingElse = doSomething;

doSomething();
doSomethingElse();

