function getRandomNumbers(count, min, max) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
}

function findSecondLargestAndSmallest(arr) {
    let largest = 0, secondLargest = 0;
    let smallest = 0, secondSmallest = 0;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }
    
    return { secondLargest, secondSmallest };
}

let numbers = getRandomNumbers(10, 100, 999);
console.log("Generated Numbers:", numbers);

let { secondLargest, secondSmallest } = findSecondLargestAndSmallest(numbers);
console.log("2nd Largest:", secondLargest);
console.log("2nd Smallest:", secondSmallest);
