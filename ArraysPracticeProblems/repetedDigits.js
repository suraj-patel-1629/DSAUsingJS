function findRepeatedDigits() {
    let repeated = [];

    for (let i = 10; i < 100; i++) {
        let str = i.toString();
        if (str[0] === str[1]) {
            repeated.push(i);
        }
    }

    return repeated;
}

console.log("Repeated Digits:", findRepeatedDigits());
