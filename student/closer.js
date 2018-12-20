var funcs = [];
for (let i = 0; i < 3; i++) {
    funcs.push(function () { console.log(i); });
}
//배열에서 함수를 꺼내어 호출한다.
for (var j = 0; j < 3; j++) {
    funcs[j]();
}
