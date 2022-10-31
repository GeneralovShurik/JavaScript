console.log("JavaScript");
//однострочный комментарий
/*многострочный комментарий*/ 
// Java: высокоуровневый
//       компилируемый (исполняемый файл)
//       строготипизируемый

// JavaScript: высокоуровневый
//       некомпилируемый, а интерпритируемый (нет исполняемого файла)
//       не строготипизируемый(слаботипизируемый, можем в переменную строки записать число)

// переменные
// объявление переменной
// ключевые слова при объявлении переменной: var, let, const
// переменная объявленая через - ее область видимости-все скрипты, объявленные (с момента объявления) в текущем документе и далее объявленных
// var - глобальная переменная
var a = 12;
console.log(a);

let b = "text";
// область видимости - ближайшие фигурные скобки {}
console.log(b);

//контстанта
const r = 12; // const- аналог final
//r = 20;//ошибка нельзя переписать const
console.log(r);
// область видимости const- ближайшие фигурные скобки {}(как у let)
b = 12;

//поддерживаемые типы данных
// string - любая последовательность символов, заключенная в 
// двойные, одинарные или косые ковычки
let s1 = "Text";
let s2 = 'Text 2';
let s3 = `Text 3`;

// typeof - возвращает название типа
console.log(typeof s3);

// number - хранит любое целое либо вещественное число
let n1 = 120;
let n2 = 3.1415;
console.log(typeof n1);
console.log(typeof n2);

// boolean - хранит значение true/false

let b1 = true;
let b2 = false;
console.log(typeof b1);

// основные арифмитичекие операторы
// [ВСЕ КАК В JAVA]
console.log((1 + 7)* 8  % 4 );

// массивы
let arr = []; //объявляем пустой массив
let arr2 = [1,"text22",true];
console.log(arr2[1]);
console.log(arr2.length); //количество эл-в массива

//циклы

let i = 0;

while (i < 4){
    console.log(i);
    i++;
}

do{
    console.log('do-while');

} while (i > 100);

for(let i = 0; i < 5; i++){
    console.log("for");
    console.log(i * i);
}

//console.clear(); //очищает весь предыдущий вывод (все выведеное до надписи сотрется)

// for - in
for (let e in arr2){
    //в переменную e будут записываться не переменные, а индексы массива
    console.log("for - in");
    console.log(arr2[e]);

}

// for - off
for (let e of arr2){
    //в переменную e будут записываться значения элементов массива
    console.log("for - of");
    console.log(e);
}

// условные операторы
// if-else
// swich- case

if (a > b) {
    //...

} else {
    //...
}

switch (a) {
    case 1:/*...*/ 
    break;
    case '2':/*...*/ 
    break;
    default: /*...*/
}

// функции
function sum (a, b) {
    return a + b;
}
 console.log( sum (34,35));

function max(a, b, c){
   if (a == undefined){
    return undefined;
   }
   if (b == undefined){
    return a;
   }
   if (c == undefined){
    if(a > b){
        return a;
    }
    return b;
   }
   if(a >b && a > c){
    return a;
   }
   if(b > c){
    return b;
   }
   return c;
}
console.log(max()); // undefined
console.log(max(10)); //10
console.log(max(5,20)); // 20
console.log(max(15,20, 5)); // 20

// pers [0..+]
function total (bill, pers = 15){
    return bill*(1 + pers / 100);
}
console.log(total(200,10)); //220
console.log(total(200)); //230
