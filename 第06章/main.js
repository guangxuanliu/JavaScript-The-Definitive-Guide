//属性名可以为空字符串
var data = {"":1};
console.log(data);
console.log(data[""]);

//获取对象属性的属性特性
console.log(Object.getOwnPropertyDescriptor(data,""));

//创建对象的三种方式
//1.对象直接量、2.通过new创建对象、3.Object.create()
var empty = {};
var point = { x:0, y:0};
var point2 = { x:point.x, y:point.y + 1 };
var book = {
    "main title" : "JavaScript",
    "sub-title" : "The Definitive Guide",
    "for" : "all audiences",
    author : {
        firstname : "David",
        secondname : "Flanagan"
    }
};
console.log(book);

var o = new Object();
var a = new Array();
var d = new Date();
var r = new RegExp("js");
console.log(Object.prototype);

var o1 = Object.create({x:1, y:2});
console.log(o1);
var o2 = Object.create(null);
console.log(o2);
var o3 = Object.create(Object.prototype);
console.log(o3);

//通过原型继承创建一个新对象
function inherit(p) {
    if(p == null) throw TypeError;
    if(Object.create)
        return Object.create(p);
    var t = typeof p;
    if(t !== "object" && t !== "function") throw TypeError;
    function f() {};
    f.prototype = p;
    return new f();
}

//6.3 删除属性
a = { p:{x:1}};
b = a.p;
delete a.p; //delete只是断开属性和宿主对象的联系，而不会去操作属性中的属性
console.log(b.x);
console.log(a);

//6.4 检测属性
//1.in运算符、2.hasOwnProperty()、3.propertyIsEnumerable()、4.!==
//in运算符能检测自有属性和继承属性
var o = { x : 1};
console.log("x" in o);
console.log("y" in o);
console.log("toString" in o);
//hasOwnProperty()方法只能用来检测自有属性
console.log(o.hasOwnProperty("x"));
console.log(o.hasOwnProperty("y"));
console.log(o.hasOwnProperty("toString"));
//propertyIsEnumerable()是hasOwnProperty的增强版，只有检测到是自有属性且这个属性是可枚举的时候才返回true
var o = inherit({y : 2});
o.x = 1;
console.log(o.propertyIsEnumerable("x"));
console.log(o.propertyIsEnumerable("y"));
console.log(o.propertyIsEnumerable("toString"));
//除了使用in运算符之外，另一种简便的方式是使用"!=="判断一个属性是否是undefined，但是此方法不能区分属性值为undefined的情况
console.log(o.x !== undefined);
console.log(o.y !== undefined);
console.log(o.toString !== undefined);

//6.5 枚举属性
//1.for/in循环遍历对象中所有可以枚举的属性（包括自有属性和继承属性）
var o = { x:1, y:2, z:3 };
for(p in o){
    console.log(p + ":" + o[p]);
}
/*
* 把p中的可枚举属性复制到o中，并返回o
* 如果o和p中含有同名的属性，则覆盖o中的基本属性
* 这个函数并不处理getter和setter以及复制属性
*/
function extend(o,p) {
    for(prop in p){
        o[prop] = p[prop];
    }
    return o;
}

//2.Object.keys()返回一个数组，这个数组由对象的可枚举的自有属性组成
console.log(Object.keys(o));
//3.Object.getOwnPropertyNames()返回所有的自有属性，包括不可枚举的
console.log(Object.getOwnPropertyNames(o));

//6.6 属性getter和setter
var p = {
    //x和y是普通的可读写的数据属性
    x : 1.0,
    y : 1.0,

    //r是可读写的存取器属性，它有getter和setter，
    //函数体结束后不要忘记带上逗号
    get r() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    set r(newValue) {
        var oldValue = Math.sqrt(this.x * this.x + this.y * this.y);
        var ratio = newValue/oldValue;
        this.x *= ratio;
        this.y *= ratio;
    },
    //theta是只读存取器属性，他只有一个getter方法
    get theta(){
        return Math.atan2(this.y,this.x);
    }
};

var q = inherit(p);
q.x = 1, q.y = 1;
console.log(q.r);
console.log(q.theta);

//这个对象产生严格自增的序号
var serialnum = {
    $n : 0,
    get next() {
        return this.$n++;
    },
    set next(n){
        if(n >= this.$n) this.$n = n
        else throw "序列号的值不能比当前值小";
    }
};

//这个对象有一个可以返回随机数的存取器属性
//例如，表达式"random.octet"产生一个随机数
//每次产生的随机数都在0～255之间
var random = {
    get octet() {
        return Math.floor(Math.random() * 256);
    },
    get uint16(){
        return Math.floor(Math.random() * 65536);
    },
    get int16(){
        return Math.floor(Math.random() * 65536 - 32768);
    }
};

//6.7属性的特性
//数据属性的四个特性：数值、可写性、可枚举、可配置
//存取器属性的四个特性：读、写、可枚举、可配置
//1.调用Object.getOwnPropertyDescriptor()可以获取某个对象的自有属性的描述符
//2.调用Object.defineProperty()可以修改属性的属性描述符
//3.同时修改多个调用Object.defineProperties()
console.log(Object.getOwnPropertyDescriptor({ x : 1},"x"));
console.log(Object.getOwnPropertyDescriptor(random,"octet"));
console.log(Object.getOwnPropertyDescriptor({},"x"));   //对于未定义的属性或者继承属性返回undefined
console.log(Object.getOwnPropertyDescriptor({},"toString"));

var o = {};
Object.defineProperty(o,"x",{
    value : 1,
    writable: false,
    configurable:true,
    enumerable : false
});
console.log(o);
console.log(Object.getOwnPropertyDescriptor(o,"x"));
o.x = 3;
console.log(o.x);
console.log(o);
for(each in o){
    console.log(each);
}
console.log(Object.keys(o));
console.log(o.x);
Object.defineProperty(o,"x",{
    value : 3
});
console.log(o.x);
Object.defineProperty(o,"x",{
    get : function () {
        return 38;
    }
});
console.log(o.x);

var p = Object.defineProperties({},{
    x : { value : 1, writable : true, enumerable : true,configurable :true },
    y : { value : 1, writable : true, enumerable : true,configurable : true },
    r : {
        get : function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        enumerable : true,
        configurable : true
    }
});

/*
* 给Object.prototype添加一个不可枚举的extend()方法
*/
Object.defineProperty(Object.prototype,"extend",{
    writable : true,
    configurable :true,
    enumerable : false,
    value : function (o) {
        var names = Object.getOwnPropertyNames(o);
        for(var i = 0;i < names.length;i++){
            if(names in this) continue;
            var desc = Object.getOwnPropertyDescriptor(o,names[i]);
            Object.defineProperty(this,names[i],desc);
        }
    }
});

//getter和setter的老式API
//__lookupGetter__()、__lookupSetter__()、__defineGetter__()、__defineSetter()__
o.__defineGetter__("fuck",function () {
   return "fuck you";
});
console.log(o.fuck);
console.log(o.__lookupGetter__("fuck"));

//对象的三个属性
//1.原型属性
console.log(Object.getPrototypeOf(o));
var p = { x : 1 };
var o = Object.create(p);
console.log(p.isPrototypeOf(o));
console.log(Object.prototype.isPrototypeOf(p));
//2.类属性
function classof(o) {
    if(o === null) return "Null";
    if(o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
}
console.log(classof(null));
console.log(classof(false));
console.log(classof(1));
//3.可扩展性
var o = { x:1, y:2, z:3};
console.log(Object.isExtensible(o));
Object.preventExtensions(o);
console.log(Object.isExtensible(o));
console.log(Object.getOwnPropertyDescriptor(o,"x"));
Object.seal(o); //不可添加新属性，原有属性不可修改和配置，不过原有的可写属性依然可以设置
console.log(Object.isSealed(o));
delete o.x;
console.log(o.x);
console.log(Object.isFrozen(o));
Object.freeze(o);   //除了将对象设置为不可扩展的和将其属性设置为不可配置的之外，还将其它所有数据属性设置为只读的
console.log(Object.isFrozen(o));

//6.9 序列化对象
var s = JSON.stringify(o);
var p = JSON.parse(s);
console.log(s);
console.log(o);
console.log(p);
