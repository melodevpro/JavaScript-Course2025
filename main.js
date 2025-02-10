// Logical AND (&&) and Logical OR(||)
let a = true;
let b = true;
console.log(a && b);
console.log(a || b);

let c = false;
let d = true;
console.log(c && d);
console.log(c || d);

let e = false;
let f = false;
console.log(e && f);
console.log(e || f);

// Template literals
let name1 = "Melo";
let name2 = "Matthew";
console.log(name1 + " " + name2, `${name1} ${name2}`);

// Ternary operator
let isTrue = true;
console.log(isTrue ? "True" : "False");

const  showRecipeOne = false;

function getRecipeOneName(recipeName){
    return recipeName;
}

function getRecipeTwoName(recipeName){
    return recipeName;
}

if (showRecipeOne){
    console.log(getRecipeOneName("Pizza"));
} else {
    console.log(getRecipeTwoName("Coke"));
}

showRecipeOne
? console.log(getRecipeOneName("Pizza")) 
: console.log(getRecipeTwoName("Coke"));

// 

const product = {
    name: "Melo",
    price: 100,
    isAvailable: true,
    rating: 8,
};
console.log(product);

const product2 = {
    description: "Product 2 description",
    
};


const { description } = product2;
console.log(description);

const array = [1, 2, 3, 4, 5];

let getArrayFirstValue = array[0];
let getArraySecondValue = array[1];
console.log(getArrayFirstValue, getArraySecondValue);

const [
    arrayFirstElment,
    arraySecondElement,
    arrayThirdElement,
    arrayFourthElement,
] = array;

console.log(
    arrayFirstElment,
    arraySecondElement,
    arrayThirdElement,
    arrayFourthElement,
);

// default parameters, spread and rest operators
function mulOfTwoNumbers(num1 = 1, num2 = 2) {
    console.log(num1, num2);
    return num1 * num2;
}
console.log(mulOfTwoNumbers(10));

const array2 = [2, 3, 4];
const array3 = [10, 11, 12];
console.log([999, ...array2, 90, ...array3, 10000]);





