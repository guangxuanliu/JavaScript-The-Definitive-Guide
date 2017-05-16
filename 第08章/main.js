console.log('作为值的函数');
function square(x) {
    return x * x;
}
console.log(square(4));
var o = {
    square:function (x) {
        return x * x;
    }
};
console.log(o.square(4));
var a = [
    function (x) {
        return x * x;
    },
    4
];
console.log(a[0](a[1]));

console.warn('自定义函数属性');
uniqueInteger.counter = 0;
function uniqueInteger() {
    return uniqueInteger.counter ++;
}

console.warn('闭包');
var scope = 'global scope';
function checkscope() {
    var scope = 'local scope';
    function f() {
        return scope;
    }
    return f;
}
console.log(checkscope()());

var uniqueInteger = (function () {
    var counter = 0;
    return function () {
        return counter++;
    }
}());
console.log(uniqueInteger());

function counter() {
    var n = 0;
    return {
        count : function () {
            return n++;
        },
        reset : function () {
            return n = 0;
        }
    }
}
var c = counter(),d = counter();
console.log(c.count());
console.log(c.count());
console.log(d.count());
console.log(d.count());
console.log(c.reset());
console.log(c.count());
console.log(d.count());
//
// function constfunc(v) {
//     return function () {
//         return v;
//     }
// }
// var func = [];
// for(var i = 0;i < 10;i++){
//     func[i] = constfunc(i);
// }
// for(var i = 0;i < func.length;i++){
//     console.log(func[i]());
// }

console.warn('8.7 函数属性、方法和构造函数');
function check(arg) {
    var actual = arg.length;
    var expected = arg.callee.length;
    if(actual !== expected){
        throw Error('Expected ' + expected + ' args; got ' + actual);
    }
}
function f(x, y, z) {
    check(arguments);
    return x + y + z;
}
console.log(f);
console.log(Math.max(1,2,3,4,5));
console.log(Math.max.apply(Math,[1,2,3,4,5]));
function trace(o, m) {
    var origin = o[m];
    o[m] = function () {
        console.log(new Date(), 'Entering:',m);
        var result = origin.apply(this,arguments);
        console.log(new Date(),'Exiting:',m);
        return result;
    };
}
console.log(Math.max.toString());