console.info('9.1 类和原型');
function Range(from,to) {
    this.from = from;
    this.to = to;
}
Range.prototype = {
    constructor : Range,
    include : function (x) {
        return x >= this.from && x <= this.to;
    },
    foreach: function (f) {
        for(var x = Math.ceil(this.from);x <= this.to;x++)
            f(x);
    },
    toString:function () {
        return '(' + this.from + '...' + this.to + ')';
    }
};
var range = new Range(1,3);
