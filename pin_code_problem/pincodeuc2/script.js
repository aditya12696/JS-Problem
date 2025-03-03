function validatePinCode(pin) {
    const pinPattern = /^[1-9][0-9]{5}$/; // Regex for a valid Indian PIN code
    return pinPattern.test(pin);
}

// Get PIN from the terminal and validate it
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a PIN Code: ", (pin) => {
    if (!/^\d+$/.test(pin)) {
        console.log("❌ Invalid! PIN Code should contain only numbers.");
    } else if (validatePinCode(pin)) {
        console.log("✅ Valid PIN Code!");
    } else {
        console.log("❌ Invalid PIN Code! It must be exactly 6 digits and start with 1-9.");
    }
    rl.close();
});
