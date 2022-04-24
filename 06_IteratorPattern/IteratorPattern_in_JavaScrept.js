let evenNumbers=['1','2','3','4','5','6']
let iterator = evenNumbers[Symbol.iterator]();

let result = iterator.next();

while( !result.done ) {
    console.log(result.value);
    result = iterator.next();
}