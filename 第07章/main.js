//7.1 创建数组
//创建数组是会忽略结尾的逗号
var misc = [1.1, true, "a",];
var primes = [2, 3, 5, 7, 11,];
console.log(misc);
console.log(misc.length);
console.log(primes.length);

//创建数组的四种方式
//1.数组直接量
var empty = [];
//2.调用构造函数
var a = new Array();
//3.调用构造函数的时候传入一个数值参数，指代长度
var b = new Array(10);
//4.调用构造函数显示指定数组元素
var c = new Array(5, 4, 3, 2, 1);

//7.2 数组元素的读和写
a[0] = 1;
console.log(a);
a[-1.23] = 2;
console.log(a);
a[1.00] = 3;
console.log(a);
a[1.23] = 4;
console.log(a);
//JavaScript数组没有越界的概念，当试图查询任何对象中不存在的属性时，不会报错，只会得到undefined值，对于对象同样存在这种情况。

//7.3稀疏数组
var a1 = [,,,];
var a2 = new Array(3);
console.log(0 in a1);
console.log(0 in a2);
console.log(a1[0]);
console.log(a2[0]);
//此处书上有误，P147，作者说的自相矛盾，应该取下面的版本，即：当省略数组直接量中的值时（使用连续的逗号），这是所得到的数组也是稀疏数组，省略掉的值是不存在的（注意：此处不是undefined）

//7.4数组长度
var a = [1, 2, 3, 4, 5];
console.log(a.length);
a.length = 3;
console.log(a);
a.length = 5;
console.log(a);
Object.defineProperty(a,"length",{writable : false});   //当把length属性定义为只读的时候，便不可给数组添加元素
a[0] = 10;
console.log(a);

//7.5 数组元素的添加和删除
//delete删除数组元素会为其赋值为undefined，但是数组的长度并没有变化
//使用pop()、shift()方法会改变数组的length属性，并且将元素依次移位
var a = [];
console.log(a);
a[0] = "zero";
a[1] = "one";
console.log(a);
a[a.length] = "two";
a[a.length] = "three";
console.log(a);
delete a[1];
console.log(a);
console.log(a.length);
a.pop();
console.log(a);
console.log(a.length);
console.log(a[1]);

//7.6 数组遍历
//1.使用for循环
var o = [1,2,3,4,5];
var keys = Object.keys(o), values = [];
for(var i = 0,len = keys.length;i < len;i++){
    if(!a[i]) continue;
    var key = keys[i];
    values[i] = o[key];
}
//2.使用for/in循环
//for/in循环能够枚举继承属性，所以在数组上尽量不要使用for/in循环，但是可以使用hasOwnProperty()来避免
for(var index in o){
    if(!o.hasOwnProperty(index)) continue;
    console.log(o[index]);
}
//3.forEach()方法
var sum = 0;
o.forEach(function (x) {
    sum += x
});
console.log(sum);

//7.7多维数组
var table = new Array(10);
for(var i = 0;i < table.length;i++){
    table[i] = new Array(10);
}
for(var row = 0;row < table.length;row++){
    for(col = 0;col < table[row].length;col++){
        table[row][col] = row * col;
    }
}
var product = table[5][7];
console.log(product);

//7.8数组方法
//1.join
var a = [1,2,3];
console.log(a.join());
console.log(a.toString());
console.log(a.join(""));
var b = new Array(10);
console.log(b.join("---"));

//2.reverse方法 替换原数组
console.log(a.reverse());
console.log(a);

//3.sort方法
var a = new Array("banana", "cherry", "apple");
a.sort();
console.log(a);

var b = new Array(33, 4, 1111, 222);
b.sort();
console.log(b);
b.sort(function (a, b) {
    return a-b;
});
console.log(b);

var a = ["ant", "Bug", "cat", "Dog"];
a.sort();
console.log(a);
a.sort(function (s,t) {
   var a = s.toLowerCase();
    var b = t.toLowerCase();
    return a > b;
});
console.log(a);

//concat方法
//如果参数中的任何一个自身是数组，则连接的是数组的元素，而非数组本身。但要注意，concat()不会递归扁平化数组的数组，concat()不会修改调用的数组
var a = [1,2,3];
var b = a.concat(4,5);
console.log(b);
var b = a.concat([4,5]);
console.log(b);
var b = a.concat([4,5],[6,7]);
console.log(b);
var b = a.concat(4,[5,[6,7]]);
console.log(b);

//slice()方法
var a = [1,2,3,4,5];
console.log(a.slice(0,3));
console.log(a.slice(3));
console.log(a.slice(1,-1));

//splice()方法
//该方法会修改调用的数组，第一个参数指定了插入和（或）删除的起始位置，第二个参数指定了应该从数组中删除的元素的个数，紧随其后的参数指定了需要插入到数组中的元素
var a = [1,2,3,4,5,6,7,8];
a.splice(4);
console.log(a);
a.splice(1,2);
console.log(a);
a.splice(1,1);
console.log(a);

var a = [1,2,3,4,5];
a.splice(2,0,"a","b");
console.log(a);
a.splice(2,2,[1,2],3);
console.log(a);

//push()和pop()
var stack = [];
stack.push(1,2);
stack.pop();
stack.push(3);
stack.pop();
stack.push([4,5]);
stack.pop();
stack.pop();
console.log(stack);

//unshift()和shift()
//当使用多个参数调用unshift()时它的行为令人惊讶。参数是一次性插入的，而非一次一个地插入。这意味着最终的数组中插入的元素的顺序和他们在参数列表中的顺序是一样的。而假如元素是一次一个地插入，它们的顺序应该是反过来的
var a = [];
a.unshift(1);
a.unshift(22);
a.shift();
a.unshift(3,[4,5]);
a.shift();
a.shift();
a.shift();
console.log(a);

//toString()和toLocalString()
//toString()和不使用任何参数调用join()方法返回的字符串是一样的

//7.9 ECMAScript 5中的数组方法
//在大多数情况下，调用提供的函数使用三个参数：数组元素、索引值、数组本身，通常只需要第一个参数，可以忽略后面的参数
//1.forEach()
var data = [1,2,3,4,5];
console.log(data);
var sum = 0;
data.forEach(function (value) {
    sum += value;
});
console.log(sum);
data.forEach(function (value, index, array) {
   array[index] += 1;
});
console.log(data);

//map()
//将调用的数组的每个元素传递给指定的函数，并返回一个数组
var a = [1,2,3];
b = a.map(function (value) {
   return value + 1;
});
console.log(b);

//filter()
//返回的数组元素是调用的数组的一个子集，传递的函数是用来逻辑判定的
var a = [5,4,3,2,1];
smallvalues = a.filter(function (value) {
    return value < 3;
});
console.log(smallvalues);
everyother = a.filter(function (value,index) {
    return index % 2 == 0;
});
console.log(everyother);

//every()、some()
//every是当数组中的所有元素调用函数均返回true时才返回true
//some是当数组中的元素调用函数，只要有一个返回true，则返回true
var b = a.every(function (value) {
    return value < 10;
});
console.log(b);
var b = a.some(function (value) {
   return value % 2 == 0;
});
console.log(b);

//reduce()、reduceRight()
//第二个参数是可选的初始值
var a = [1,2,3,4,5];
var sum = a.reduce(function (x, y) {
    return x + y;
});
console.log(sum);
var product = a.reduce(function (x, y) {
    return x * y;
});
console.log(product);
var max = a.reduce(function (x, y) {
    return x > y ? x : y;
});
console.log(max);

//indexOf()、lastIndexOf()
a = [0,1,2,1,0];
console.log(a.indexOf(1));
console.log(a.lastIndexOf(1));
console.log(a.indexOf(3));

//在数组中查找所有出现的x，并返回一个包含匹配索引的数组
function findall(a,x) {
    var result = [],
        len = a.length,
        pos = 0;
    while (pos < len){
        pos = a.indexOf(x,pos);
        if(pos === -1) break;
        result.push(pos);
        pos++;
    }
    return result;
}
console.log(findall(a,1));

//7.10 数组类型
//ECMAScript中可以使用Array.isArray()来判断
console.log(Array.isArray([]));
console.log(Array.isArray({}));
//instanceof的问题是在Web浏览器中可能有多个窗口或窗体存在，每个窗口都有自己的JavaScript环境，有自己的全局对象。所以靠这种方式检测不准确
console.log([] instanceof Array);

//在ECMAScript3中可以这样书写
var isArray = Function.isArray || function (o) {
        return typeof o === "object" &&
                Object.prototype.toString.call(o) === "[object Array]";
    };

//7.11类数组对象
var a = {"0":"a","1":"b","2":"c","length":"3"};
var b = Array.prototype.join.call(a);
var b = Array.prototype.slice.call(a);
console.log(b);