var a = [1, 2, 3];
var b = ['Hello', true, {a: 20}, 15];

for (var parit of b) {
    console.log(parit);
}

var o = {x: 20, y: 30, z: 40}
for (var item in o) {
    console.log(item, o[item]);
}

// ------------------------------------------------
// Spread operator

var a1 = [2, 4, 6, 8, 10];
var b1 = [20, 30, 40];

var a2 = [...a1, ...b1, 20.5, 20.8, 21.33, ...a1];

var oNew = {
    ...o, 
    z: 50
}