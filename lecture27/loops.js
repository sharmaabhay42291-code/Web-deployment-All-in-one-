
/*// For loop: 1 se 5 tak numbers print honge
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 5 ka table print karna
let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

// While loop: jab tak condition true hai
let count = 1;

while (count <= 5) {
    console.log("Count:", count);

    // Har baar count ko 1 se badhana
    count++;
}
*/


// ========================================
// 1. FOR LOOP
// 1 se 5 tak numbers print karna
// ========================================

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// ========================================
// 2. MULTIPLICATION TABLE
// 5 ka table print karna
// ========================================

let number = 5;

// Loop 1 se 10 tak chalega
for (let i = 1; i <= 10; i++) {
    // Number aur i ko multiply karna
    console.log(number + " x " + i + " = " + (number * i));
}


// ========================================
// 3. WHILE LOOP
// 1 se 5 tak numbers print karna
// ========================================

let count = 1;

// Jab tak count 5 ya usse kam hai
while (count <= 5) {
    console.log(count);

    // Count ko 1 se badhana
    count++;
}


// ========================================
// 4. EVEN NUMBERS
// 1 se 20 tak even numbers print karna
// ========================================

for (let i = 1; i <= 20; i++) {

    // Check karna ki number 2 se divide hota hai ya nahi
    if (i % 2 === 0) {
        console.log(i);
    }
}


// ========================================
// 5. SUM OF NUMBERS
// 1 se 10 tak numbers ka total
// ========================================

let sum = 0;

// Har number ko sum mein add karna
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

// Final answer print karna
console.log("Total Sum =", sum);


// ========================================
// 6. REVERSE COUNTING
// 10 se 1 tak numbers print karna
// ========================================

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// ========================================
// 7. FACTORIAL
// 5! = 5 x 4 x 3 x 2 x 1 = 120
// ========================================

let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}

console.log("Factorial =", factorial);


// ========================================
// 8. SUM OF DIGITS
// Example: 1234 = 1 + 2 + 3 + 4 = 10
// ========================================

let num = 1234;
let digitSum = 0;

while (num > 0) {

    // Last digit nikalna
    let digit = num % 10;

    // Digit ko total mein add karna
    digitSum = digitSum + digit;

    // Last digit hata dena
    num = Math.floor(num / 10);
}

console.log("Sum of Digits =", digitSum);
