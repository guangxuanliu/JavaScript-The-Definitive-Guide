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
