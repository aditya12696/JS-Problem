function validateEmail(email) {
    const emailPattern = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
    return emailPattern.test(email);
}

// Get email from the terminal and validate it
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an Email Address: ", (email) => {
    if (validateEmail(email)) {
        console.log("✅ Valid Email Address!");
    } else {
        console.log("❌ Invalid Email Address! It must follow the format: abc.xyz@bridgelabz.co.in");
    }
    rl.close();
});
