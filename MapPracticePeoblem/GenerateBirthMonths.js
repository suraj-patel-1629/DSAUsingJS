function generateBirthMonths() {
    let birthMonths = {};

    for (let i = 1; i <= 50; i++) {
        let month = Math.floor(Math.random() * 12) + 1; 
        if (!birthMonths[month]) {
            birthMonths[month] = [];
   }
        birthMonths[month].push(`Person${i}`);
    }

    console.log("Individuals grouped by birth month:");
    for (let month in birthMonths) {
        console.log(`Month ${month}:`, birthMonths[month]);
    }
}

generateBirthMonths();
