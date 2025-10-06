const readline = require("readline-sync")

// var MAX = 120, MIN = 5, value = 60, key;
// console.log('\n\n' + (new Array(20)).join(' ') +
//   '[Z] <- -> [X]  FIX: [SPACE]\n');
// while (true) {
//   console.log('\x1B[1A\x1B[K|' +
//     (new Array(value + 1)).join('-') + 'O' +
//     (new Array(MAX - value + 1)).join('-') + '| ' + value);
//   key = readline.keyIn('',
//     {hideEchoBack: true, mask: '', limit: 'zx '});
//   if (key === 'z') { if (value > MIN) { value--; } }
//   else if (key === 'x') { if (value < MAX) { value++; } }
//   else { break; }
// }
// console.log('\nA value the user requested: ' + value);

var weight=0; /* 預設體重是0 */
while(weight<10 || weight>120){
    weight=readline.questionInt("Ur weight? (10~120KG)");
} /* 這段會一直重複問，直到使用者輸入的體重在 10 ~ 120 公斤之間才會停止。 */
var height=readline.questionInt("Ur height? (cm)",{limit:'$<70-200>'}); /* 問使用者身高（單位 cm）*/  /*{limit:'$<70-200>'} 是輸入限制：只能輸入 70 ~ 200 公分。*/
var bmi=weight/((height/100)**2)/*計算BMI的方程式*/


console.log("Hello! Your BMI is:" + bmi)/*把計算好的 BMI 顯示出來*/