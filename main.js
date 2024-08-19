/*


const input = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
];

const output = [
  [1, 9, 2, 1],
  [2, 3, 9, 2],
  [3, 9, 4, 9],
  [9, 9, 3, 1],
]

function mainSweeper(src){
 return;
}

mineSweeper(input)


*/

function minesweeperBoard(input) {
  const rows = input.length;
  const cols = input[0].length;
  const output = Array.from({ length: rows }, () => Array(cols).fill(0));

  // Directions for neighboring cells
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  // Iterate through the board
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (input[r][c] === 1) {
        output[r][c] = 9; // Mine
      } else {
        let mineCount = 0;

        // Check all neighboring cells
        for (const [dr, dc] of directions) {
          const newRow = r + dr;
          const newCol = c + dc;

          // Check if the neighbor is within bounds and is a mine
          if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
            mineCount += input[newRow][newCol];
          }
        }

        output[r][c] = mineCount; // Set the count of adjacent mines
      }
    }
  }

  return output;
}

// Example usage:
const input = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
];

console.log(minesweeperBoard(input));
