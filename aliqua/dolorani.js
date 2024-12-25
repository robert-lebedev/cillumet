function printPyramid(n, currentRow = 1) {
    if (currentRow > n) return; // Base case: stop when currentRow exceeds n

    // Calculate the number of spaces and stars for the current row
    const numSpaces = n - currentRow;
    const numStars = 2 * currentRow - 1;

    // Create the strings for spaces and stars
    const spaces = ' '.repeat(numSpaces);
    const stars = '*'.repeat(numStars);

    // Print the current row
    console.log(spaces + stars);

    // Recursive call for the next row
    printPyramid(n, currentRow + 1);
}

// Example usage:
const n = 5; // Height of the pyramid
printPyramid(n);
