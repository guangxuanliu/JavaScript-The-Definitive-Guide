var obj = {};
Object.defineProperty(obj, 'x', {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true
});
console.log(obj.x);
Object.defineProperty(obj,'x',{
    writable:false
});
Object.defineProperty(obj,'x',{
    value : 2
});
console.log(obj);

console.info('6.8.1 原型属性');

var o = Object.create(null);
console.log(o);

function classof(o) {
    if (o === null) return 'Null';
    if(o === undefined) return 'Undefined';
    return Object.prototype.toString.call(o).slice(8,-1);
}