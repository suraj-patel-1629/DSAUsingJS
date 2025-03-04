function findSecondLargestAndSmallestSorted(arr) {
    arr.sort((a, b) => a - b);
    return { secondLargest: arr[arr.length - 2], secondSmallest: arr[1] };
}

let sortedResults = findSecondLargestAndSmallestSorted([...numbers]); // Using previous numbers array
console.log("Sorted Numbers:", numbers.sort((a, b) => a - b));
console.log("2nd Largest (Sorted):", sortedResults.secondLargest);
console.log("2nd Smallest (Sorted):", sortedResults.secondSmallest);
