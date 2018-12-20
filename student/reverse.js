function reverse(items) {
    return items.reverse();
}
const arg = [{ name: 'Lee' }, { name: 'Kim' }];
{
    let reversed = reverse(arg);
    console.log(reversed);
}
const arg2 = [1, 2, 3, 4, 5];
const reversed2 = reverse(arg2);
console.log(reversed2);
