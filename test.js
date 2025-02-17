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
