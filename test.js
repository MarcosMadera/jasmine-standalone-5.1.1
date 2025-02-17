function sum(a,b) {
    return a + b;
}

describe("sumfunctiontest", ()=> {
   it("should total 2 numbers", () => {
    const num1 = 4;
    const num2 = 6;
    
    let total = (num1 + num2);
    expect(sum(num1, num2)).toBe(10)
   })
})

function concatenate(a, b) {
    return a + " " + b;
}

let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;

describe("concatenation", () => {
    it("should concatenate the two strings", () => {
        expect(concatenate(str1, str2)).toEqual("Hello World");
    });
});

//test 3

describe("Array Length Check", () => {
    it("should have a length of 4", () => {
        const arr = [1, 2, 3, 4];
        expect(arr.length).toBe(4);
    });
});


//test 4

const btnInsert = document.querySelector("#btnInsert");

btnInsert.innerHTML = `
<button class="btn">Count</button>
`


