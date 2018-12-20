function Prefixer(prefix) {
    this.prefix = prefix;
}


Prefixer.prototype.prefixArray1 = function (arr) {
    var that = this;    //this: Prefixer 생성자 함수의 인스턴스
 
     return arr.map(function (x) {
         return this.prefix + ' ' + x;
     });
 };

Prefixer.prototype.prefixArray2 = function (arr) {
   // var that = this;    //this: Prefixer 생성자 함수의 인스턴스

    return arr.map(function (x) {
        return this.prefix + ' ' + x;
    }.bind(this));
};

Prefixer.prototype.prefixArray3 = function (arr) {
    // var that = this;    //this: Prefixer 생성자 함수의 인스턴스
 
     return arr.map(function (x) {
         return this.prefix + ' ' + x;
     },this);
 };

var pre = new Prefixer('Hi');
console.log(pre.prefixArray1(['Lee','Kim']));

console.log(pre.prefixArray2(['Park','Cho']));

console.log(pre.prefixArray3(['Soon','Quick']));