const array2D = [
    [1, 2, 3],
    [4, 5, 6]
];

// Function to total the contents of a 2D array
function total2DArray(array) {
    let total = 0;
    for (let row of array) {
        for (let value of row) {
            total += value;
        }
    }
    return total;
}

// Function to calculate the average of a 2D array
function average2DArray(array) {
    let total = total2DArray(array);
    let count = 0;
    for (let row of array) {
        count += row.length;
    }
    return total / count;
}

// Function to calculate the maximum value in a 2D array
function maxIn2DArray(array) {
    let max = -Infinity;
    for (let row of array) {
        for (let value of row) {
            if (value > max) {
                max = value;
            }
        }
    }
    return max;
}

// Function to calculate the minimum value in a 2D array
function minIn2DArray(array) {
    let min = Infinity;
    for (let row of array) {
        for (let value of row) {
            if (value < min) {
                min = value;
            }
        }
    }
    return min;
}

// Testing the functions
console.log("Total:", total2DArray(array2D)); // Total: 21
console.log("Average:", average2DArray(array2D)); // Average: 3.5
console.log("Max:", maxIn2DArray(array2D)); // Max: 6
console.log("Min:", minIn2DArray(array2D)); // Min: 1