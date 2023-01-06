let n = 7;
let flag = true;

if (n < 2 ) {
    flag = false;
} else {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            flag = false;
            break;
        }
    }
}
if (flag === true) {
    console.log('la so nguyen to ');
} else{
    console.log('khong la so nguyen to');
}