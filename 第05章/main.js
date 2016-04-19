//判断是否使用了严格模式
// "use strict";
// var hasStrictMode = (function () {
//     return this === undefined;
// })();
// console.log(hasStrictMode);

//debugger的用法，会产生一个断点，但是前提是打开调试工具
// var data = [1,2,3,4,5]; debugger;
// console.log(data);

//with语句，用于临时扩展作用域链，在严格模式中禁止使用with语句，在非严格模式中也不推荐使用
//需要使用with语句的时候可以先保存为变量，然后再使用
// with(document.forms[0]){
//     address.focus();
//     name.value = "刘光轩";
// }

//with语句提供了一种读取o的属性的快捷方式，但是它并不能创建o的属性
// with(o) x = 1;

//throw try catch finally，抛出异常，捕获异常，清理代码
// function factorial(x) {
//     try{
//         if(x < 0)
//             throw new Error("传入的参数必须大于等于0");
//         else
//             return "参数正确";
//     }
//     catch(e) {
//         return true;
//     }
//     finally {
//         return 1;
//     }
// }
// factorial(-1);

