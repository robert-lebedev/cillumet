let b = { x: 8, y: 12 };
let a = { x: 5, y: 7 };

let x2 = b.x; // Assign x2 to the x-coordinate of point b
let y2 = b.y; // Similarly, assign y2 to the y-coordinate of point b

// Maybe you are calculating a midpoint or some other operation
let midpoint = { x: (a.x + x2) / 2, y: (a.y + y2) / 2 };

console.log(midpoint); // Output: { x: 6.5, y: 9.5 }
