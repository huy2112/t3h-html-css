let k = 1239321 ;
let str = k + '';
console.log(str);
let newString = ''
for (let i = str.length - 1; i >=0 ; i--) {
    newString += str [i];

}
if(newString === str ) {
    console.log('la so doi xung');
}else {
    console.log('khong la so doi xung');
}