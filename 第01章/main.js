// var book ={
//     topic : "JavaScript",
//     fat : true
// };
// console.log(book.topic);
// console.log(book["fat"]);
// console.log(book["topic"]);
//
// function plus1(x) {
//     return x + 1;
// }
// console.log(plus1(3));
//
// var square = function (x) {
//     return x * x;
// };
// console.log(square(3));

// var points = [
//     {x : 0, y : 0},
//     {x : 3, y : 4}
// ];
// points.dist = function () {
//     var p1 = this[0];
//     var p2 = this[1];
//     var a = p2.x - p1.x;
//     var b = p2.y - p1.y;
//     return Math.sqrt(a * a + b * b);
// };
// console.log(points.dist());

// function abs(x) {
//     if(x >= 0 ){
//         return x;
//     }
//     else {
//         return -x;
//     }
// }
//
// function factorial(n) {
//     var product = 1;
//     while(n > 1){
//         product *= n;
//         n--;
//     }
//     return product;
// }
//
// function factorial2(n) {
//     var i,product = 1;
//     for(i = 2;i <= n;i++){
//         product *= i;
//     }
//     return product;
// }

// function Point(x, y) {
//     this.x = x;
//     this.y = y;
// }
// var p = new Point(1, 1);
// console.log(p);
// Point.prototype.r = function () {
//     return Math.sqrt(this.x * this.x + this.y * this.y);
// };
// console.log(p.r());

// function moveon() {
//     var answer = confirm("准备好了么？");
//     if(answer){
//         window.location = "http://www.warenwang.com";
//     }
// }
// setTimeout(moveon,3000);

/*function debug(msg) {
    var log = document.getElementById("debuglog");
    if(!log){
        log = document.createElement("div");
        log.id = "debuglog";
        log.style.width = "300px";
        log.style.height = "160px";
        log.style.position = "absolute";
        log.style.overflow = "auto";
        log.style.padding = "10px";
        log.style.top = "0";
        log.style.right = "0";
        log.style.backgroundColor = "purple";
        log.style.color = "white";
        log.innerHTML = "<h1>Debug Log</h1>";
        document.body.appendChild(log);
    }
    var pre = document.createElement("pre");
    var text = document.createTextNode(msg);
    pre.appendChild(text);
    log.appendChild(pre);
    log.lastChild.scrollIntoView();
}*/

/*
function hide(e,reflow) {
    if(reflow){
        e.style.display = "none";
    }
    else {
        e.style.visibility = "hidden";
    }
}
function highlight(e) {
    if(!e.className) e.className = "hilite";
    else e.className += "hilite";
}
*/



