// console.log(0xff);
// console.log(0xCAFE911);
// console.log(0377);
// console.log(Math.pow(2,53));
// console.log(Math.round(.6));
// console.log(Math.round(0.5));
// console.log(Math.round(0.4));
// console.log(Math.ceil(0.4));
// console.log(Math.ceil(0.1));
// console.log(Math.floor(0.6));
// console.log(Math.floor(0.9));
// console.log(Math.abs(-5));
// console.log(Math.abs(5));
// console.log(Math.max(1,5,8,9,2,1,11));
// console.log(Math.min(-1,-5,-8,-9,-2,-1,-11));
//
// //生成随机数
// function random(min,max) {
//     var ran = Math.floor(min +  (Math.random() * (max - min + 1)));
//     return ran;
// }
// console.log(random(0,100));
//
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.sqrt(3));
// console.log(Math.sqrt(16));
// console.log(Math.pow(3,1/3));
// console.log(Math.pow(4,1/2));
// console.log(Math.pow(16,1/2));
// console.log(Infinity);
// console.log(Number.POSITIVE_INFINITY);
// console.log(1/0);
// console.log(Number.MAX_VALUE + 1);
// console.log(-Infinity);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(-1/0);
// console.log(Number.MIN_VALUE);
// console.log(NaN);
// console.log(0/0);
// console.log(Number.NaN);
// console.log(Number.MIN_VALUE / 2);
// console.log(NaN != NaN);
// console.log(isNaN(0/0));
//
// var x = .3 - .2;
// var y = .2 - .1;
// console.log(x);
// console.log(y);
//
// console.log("two\nlines");

// var s = "hello, world";
// console.log(s.charAt(0));
// console.log(s.charAt(s.length - 1));
// console.log(s.substring(1,4));
// console.log(s.split(","));
// console.log(s.split("e"));
// console.log(s.indexOf("e"));
// console.log(s);
// s[0] = "d";
// console.log(s);

// if(!(false && "" && null && 0 && -0 && NaN && undefined)){
//     console.log("false");
// }
// console.log(null == undefined);
// console.log(null === undefined);

// var s = "text";
// s.len = 4;
// console.log(s.len);

// var s = "test",n = 1,b = true;
// var S = new String("test");
// var N = new Number(1);
// var B = new Boolean(true);
// console.log(s == S);
// console.log(n == N);
// console.log(b == B);
// console.log(typeof s);
// console.log(typeof S);
// S.len = 4;
// console.log(S.len);

// var o = {x:1},p = {x:1};
// console.log(o == p);
// var a = [],b = [];
// console.log(a == b);

// var a = ["a","b","c"],b = [];
// for(var i = 0;i < a.length;i++){
//     b[i] = a[i];
// }
// console.log(b);
// console.log(b == a);
//
// function equalArrays(a, b) {
//     if(a.length != b.length) return false;
//     for(var i = 0;i < a.length;i++){
//         if(a[i] != b[i]) return false;
//     }
//     return true;
// }
// console.log(equalArrays(a, b));

// console.log(10 + "objects");
// console.log("7" * "4");
// console.log(1 - "x");
// var n = 1 - "x";
// console.log(n + "object");

//if语句将undefined转换为false，但是“==”运算符从不试图将其操作数转换为布尔值
// console.log(undefined == false);

// var num = 3;
// console.log(num);
// console.log(num + "");
// console.log(+(num + ""));

// var n = 123456.789;
// console.log(n.toFixed(0));
// console.log(n.toFixed(2));
// console.log(n.toFixed(5));
// console.log(n.toExponential(1));
// console.log(n.toExponential(3));
// console.log(n.toPrecision(4));
// console.log(n.toPrecision(7));
// console.log(n.toPrecision(10));
// console.log(n.toPrecision(6));
// console.log(n.toPrecision(5));

// console.log(parseInt("3 blind mice"));
// console.log(parseInt("3.14 meters"));
// console.log(parseInt("-12.34"));
// console.log(parseInt("-12.54"));
// console.log(parseInt("12.8"));
// console.log(parseInt("0xff"));
// console.log(parseInt("0xFF"));
// console.log(parseFloat(".1"));
// console.log(parseInt(".1"));
// console.log(parseFloat("$72.47"));
//
// console.log(parseInt("11",2));
// console.log(parseInt("FF",16));
// console.log(parseInt("zz",36));

console.log(({x : 1, y : 2}).toString());
console.log(({x : 1, y : 2}).valueOf());
console.log(([1,2,3]).toString());
console.log((function (x) {
    return x;
}).toString());
console.log((new Date(2016,03,18)).toString());
console.log((new Date()).toString());
console.log((new Date()).valueOf());
