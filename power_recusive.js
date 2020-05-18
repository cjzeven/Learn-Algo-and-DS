// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp) {
    if (exp <= 0) return 1;
    if (exp === 1) return base;
    return base * power(2, exp - 1);
}

console.log(power(2, 4));
// console.log(power(2, 0));

/*

2 * 8

*/
