let a = [1, 55, 5, 5,10,55,1,8,5];
let b = [55,0,1,5,55,1];

const arrayDiff = (a, b) => {
    let arr = [];
    for (let i = 0; i < a.length; i++)
    {
        for (let c = 0; c < b.length; c++) {
            if (a[i] === b[c]) { break; }
            if (b.length - 1 == c) {
                arr.push(a[i]);
            }
        }     
    }
    return arr;
}

const compareArrays = (a, b) => a.filter((element) => !b.includes(element));



console.log(arrayDiff(a, b))
console.log(compareArrays(a, b));

const squareEveryDigit = (a) => {
    
    let arr = [];
    let value = String(a);
    arr = value.split("");
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    return arr.join("");
}
console.log(squareEveryDigit(554));


const alphabetPosition = (a) => {
    var bytes = a.split('');
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    for (var i = 0; i < a.length; i++) {
        bytes[i] = alphabet.indexOf(bytes[i].toLowerCase()) + 1;
    }
    return bytes.filter(n => { if (n > 0) return n; }).join(', ');
}
let g = "The sunset sets at twelve o' clock.";

console.log(alphabetPosition(g));