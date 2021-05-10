process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!
const age = 12;

if ( age >=20) {
 console.log ("ビールください");
} else if (age >= 14) {
 console.log("コーヒーください");
} else {
 console.log("ジュースください");
}

for (let a = 0; a < 10; a++) {
    //let a = 0は0からはじまるという意味、
    //aが10より少ないときに繰り返し、繰り返し終わりでaを1増やす
    do_something();
}

for (let a = 1; a <= 10; a++) {

    if (a % 2 == 0) {
        console.log(a);
    }
}

for (let a = 1; a <=100; a += 2) {
    if (a % 2 == 1) {
        console.log(a);
    }

}

for (let a =1; a <= 100; a +=2) {
    console.log(a);
}


for (let a = 10; a > 0; a--){
    console.log(a);
}

//繰り返しを中断するbreak

for (let a =1; a <= 10; a++) {
     if (a == 5) {
         break;
     }
     console.log(a);
}
//繰り返しをスキップするcontinue
//5だけとばして6から繰り返し

for (let a =1; a <= 10; a++) {
    if (a == 5) {
        continue;
    }
    console.log(a);
}
//関数と戻り値
function sum(a, b) {
     return a + b;
}

console.log (sum)


//fizz buzz問題をやってみよう

function fizzbuzz(){
    for(let a = 1; a <= 100; a++){
        if (a % 15 == 0){
            console.log("fizzbuzz")
        } else if (a % 3 ==0){
            console.log("fizz")
        } else if (a % 5 ==0){
            console.log("buzz")
        } else {
            console.log(a);
        }
    }
}
fizzbuzz();
//for let aで1から100までの数字を出力する
// %は剰余　0なら割り切れているため、倍数である
//３の倍数と5の倍数は最小公倍数15である
//if文は条件が厳しいものから順番に書く fizzを先に書くとfizzbuzzは実行されない
