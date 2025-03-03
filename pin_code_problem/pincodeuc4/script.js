function validatePinCode(pin) {
    const pinPattern = /^[1-9][0-9]{2}\s?[0-9]{3}$/; // Regex for valid PIN codes (400088 or 400 088)
    return pinPattern.test(pin);
}

// Get PIN from the terminal and validate it
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a PIN Code: ", (pin) => {
    if (!/^[0-9\s]+$/.test(pin)) {
        console.log("❌ Invalid! PIN Code should contain only numbers and an optional space.");
    } else if (validatePinCode(pin)) {
        console.log("✅ Valid PIN Code!");
    } else {
        console.log("❌ Invalid PIN Code! It must be in the format '400088' or '400 088'.");
    }
    rl.close();
});
