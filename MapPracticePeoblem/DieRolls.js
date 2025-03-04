function rollDie() {
    return Math.floor(Math.random() * 6) + 1; 
}

function simulateDieRolls() {
    let count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    let maxCount = 10;
    let reachedMax = null;

    while (!reachedMax) {
        let roll = rollDie();
        count[roll]++;

        if (count[roll] === maxCount) {
            reachedMax = roll;
        }
    }

    let maxNumber = reachedMax;
    let minNumber = Object.keys(count).reduce((a, b) => (count[a] < count[b] ? a : b));

    console.log("Final Die Counts:", count);
    console.log("Number that reached maximum times:", maxNumber);
    console.log("Number that appeared the least:", minNumber);
}

simulateDieRolls();
