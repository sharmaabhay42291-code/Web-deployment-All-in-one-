
let marks = 7;

// Pehli condition check hogi
if (marks >= 90) {
    console.log("Grade A+");
}

// Agar pehli condition false ho toh ye check hogi
else if (marks >= 75) {
    console.log("Grade A");
}

// Agar upar ki sabhi conditions false hain
else if (marks >= 40) {
    console.log("Pass");
}

// Koi bhi condition true nahi hui
else {
    console.log("Fail");
}
