

// Унарным называется оператор, который применяется к одному операнду.
// Например, оператор унарный минус "-" меняет знак числа на противоположный:

let x = -2;

x = -x;

console.log(x);
console.log(typeof(x));

// Бинарным называется оператор, который применяется к двум операндам.
// Тот же минус существует и в бинарной форме:

function subtraction(y,z) {
   let result = y - z;
   return result
}

console.log(subtraction(10,5));


// Обычно при помощи плюса '+' складывают числа.

// Но если бинарный оператор '+' применить к строкам,
// то он их объединяет в одну:

let str = 'Alexey' + ' Pereverzev';

console.log(str);



console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"


console.log(2 + 2 + '1' ); // будет "41", а не "221"
// Так как 2 + 2 = 4, а 4 + '1' = '41'




// *= это - сначала умножить, потои присвоить то, что получилось 

let n = 5;

let m = n * 5

console.log(n, m); // 5, 25

//_____

let n2 = 5;

let m2 = n *= 5

console.log(n2, m2); // 25, 25








