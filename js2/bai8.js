let n = 12345;
let flag = true;
while(n>0) {
    if((n%10)%2 == 0)  {
        flag = false;
        break;
    }
    n = parseInt(n/10);
}

if(flag==true) {
    console.log("YES");
} else {
    console.log("NO");
}
