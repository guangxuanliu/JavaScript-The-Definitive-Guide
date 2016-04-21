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