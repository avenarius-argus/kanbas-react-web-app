function WWA(){
    var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];

let variableArray1 = [
   functionScoped,   blockScoped,
   constant1,        numberArray1,   stringArray1
];

let title = "WorkingWithArrays";
console.log(title);
console.log(`Number Array (${numberArray1.length}):`, numberArray1);
console.log(`String Array (${stringArray1.length}):`, stringArray1);
console.log(`Mixed Array (${variableArray1.length}):`, variableArray1);


    return (
      
        <div>
           <h2>Working With Arrays</h2>
          <p>numberArray1 : {numberArray1.join(', ')}</p>
          <p>stringArray1 : {stringArray1.join(', ')}</p>
          <p>variableArray1: {JSON.stringify(variableArray1)}</p>
        </div>
      );
}
export default WWA;