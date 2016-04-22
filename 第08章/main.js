//call()和apply()方法
//trace()函数接受两个参数，一个对象和一个方法名，他将指定的方法替换为一个新方法，这个新方法是“包裹”
//原始方法的另一个“泛函数”，这种动态修改已有方法的做法有时称作“monkey-patching”
// function trace(o, m) {
//     var original = o[m];
//     o[m] = function () {
//         console.log(new Date(),"Entering:",m);
//         var result = original.apply(this);
//         console.log(new Date(),"Exiting:",m);
//         return result;
//     }
// }
// var liu = {
//     age : 24,
//     sayAge : function () {
//         console.log(this.age);
//     }
// };
// trace(liu,"sayAge");
// liu.sayAge(12);

//未完待续
function not(f) {
    return function () {
        var result = f.apply(this,arguments);
        return !result;
    }
}
var even = function (x) {
    return x % 2 === 0;
};
var odd = not(even);
var result = [1,3,5,7,9].every(odd);
console.log(result);

/*
* 8.1 函数定义
*/
//1.函数声明语句
//函数声明语句并不是真正的语句，他们不能出现在循环、条件判断，或者try/catch/finally以及with语句中
function printprops(o) {
    for(var p in o){
        console.log(p + ": " + o[p] + "\n");
    }
}
//2.函数表达式
var square = function (x) {
    return x * x;
};
//3.Function()构造函数
var plusone = new Function("x","return x + 1;");

/*
* 8.2 函数调用
*/

var strict = (function () {
    return this === undefined;
})();
console.log(strict);

//若没有传入参数，则可以省略构造函数之后的括号
var o = new Object();
var o1 = new Object;
console.log(o);
console.log(o1);

/*
* 8.3 函数的实参和形参
*/
function getAgruments() {
    console.log(arguments);
}
getAgruments(1,2,3);

//callee和caller属性
function test() {
    console.log(arguments.callee);
}

/*
* 8.4 作为值的函数
*/
//自定义函数属性
//可用于计算函数一共被调用了几次
uniqueInteger.counter = 0;
function uniqueInteger() {
    return uniqueInteger.counter++;
}
for(var i = 0;i < 10;i++){
    console.log(uniqueInteger());
}
function factorial(n) {
    if(isFinite(n) && n > 0 && n == Math.round(n)){
        if(!(n in factorial)){
            factorial[n] = n * factorial(n - 1);
        }
        return factorial[n];
    }
    else {
        return NaN;
    }
}
factorial[1] = 1;
console.log(factorial(10));

/*
* 8.5 作为命名空间的函数
*/
(function () {
    console.log("Hello Github");
})();

/*
* 8.6 闭包
*/
var scope = "global scope";
function checkscope() {
    var scope = "local scope";
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
    };
}());
for(var i =0;i<10;i++){
    console.log(uniqueInteger());
}

//两个方法都可以访问私有变量n，每次调用counter()都会创建一个新的作用域链和一个新的私有变量，因此，如果调用counter()两次，则会得到两个计数器对象。
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
// console.log(c.count());
// console.log(c.count());
// console.log(c.count());
// console.log(d.count());
// console.log(c.reset());
// console.log(d.count());

function counter(n) {
    return{
        get count(){return n++;},
        set count(m){
            if (m > n) n = m;
            else throw Error("Count can only be set to a larer value");
        }
    }
}
var c = counter(2000);
console.log(c.count);
console.log(c.count);

/*
* 8.7 函数属性、方法和构造函数
*/
//8.7.1 length属性
function check(args) {
    var actual = args.length;
    var expected = args.callee.length;
    if(actual !== expected){
        throw Error("Expected" + expected + "args; got " + actual);
    }
}
function f(x, y, z) {
    check(arguments);
    return x + y + z;
}

//8.7.2 prototype属性
//每一个函数都包含一个prototype属性，这个属性是指向一个对象的引用，这个对象称作“原型对象”。

//8.7.3 call()方法和apply()方法
//通过调用方法的方式间接调用函数
f.call(o);
//完成相同的功能
f.apply(o);
//完成相同的功能
o.m = f;
o.m();
delete o.m;

//call()，第二个参数及之后的参数可以为任意数量
//apply()，第二个参数是一个数组，也可以是类数组对象

//8.7.4 bind()方法
//当在函数f()上调用方法bind()方法并传入一个对象o作为参数，这个方法将返回一个新的函数，调用新的函数将会把原始的函数f()当作o的方法来调用
function f(y) {
    return this.x + y;
}
var o = {x : 1, y : 2};
var g = f.bind(o);
console.log(g(4));  //输出5

//可以使用如下的代码轻易地实现这种绑定
function bind(f, o) {
    if(f.bind) return f.bind(o);
    else return function () {
        return f.apply(o, arguments);
    }
}

var sum = function (x, y) {
    return x + y;
};
var succ = sum.bind(null,1);
console.log(succ(5));

function f(y, z) {
    return this.x + y + z;
}
var g = f.bind({x:1},2);
console.log(g(3));

var scope = "global";
function constructFunction() {
    var scope = "local";
    return new Function("return scope;");
}
console.log(constructFunction()());

/*
* 8.8 函数式编程
*/

//todo:此处有很多地方没有看懂，有时间再回过头来过一遍
