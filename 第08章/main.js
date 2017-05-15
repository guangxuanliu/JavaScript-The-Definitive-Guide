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
