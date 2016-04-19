//void运算符
//没看明白什么意思

//delete运算符
// var o = { x : 1, y : 2};
// delete o.x;
// console.log(o);
// console.log("x" in o);
//
// var a = [1, 2, 3];
// delete a[2];
// console.log(1 in a);
// console.log(2 in a);
// console.log(a.length); //代码删除了这个元素，但删除操作留下了一个“洞”，实际上并没有修改数组的长度，因此a数组的长度仍然是3
// for(var i = 0, len = a.length;i < len;i++){
//     console.log(a[i]);
// }
// console.log(a);

//typeof运算符
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof NaN);
// console.log(typeof true);
// console.log(typeof window);
// console.log(typeof document);

//eval()函数
// console.log(eval("3 + 2"));
// var f = eval;
// var g = f;
// console.log(f("4 * 2"));

//赋值表达式
// var data = [1,2,3,4];
// for(var i = 0;i < data.length;){
//     // data[i++] *= 2;
//     data[i++] = data[i++] * 2;  //注意此处两个计算的结果不同，因为第二个有两处带有副作用
// }
// console.log(data);

//逻辑表达式
// var o = { x : 110};
// var p = null;
// console.log(o && o.x);
// console.log(p && p.x);

// var point = { x:1, y:1 };
// console.log("x" in point);
// console.log("y" in point);

// console.log(+null);
// console.log(+undefined);

// var a = 1,b;
// b = (a++) + a;
// console.log(b);

