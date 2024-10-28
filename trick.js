const plants = [
    ["Begonia", "Daisy", "Lily", "Peony", "Rose", "Sunflower", "Lavender"],
    [1, 6, 3, 4, 5, null, 2]
];

function printSortedPlants(plants) {
    let currentElement = 0;
    while (currentElement !== null) {
        console.log(plants[0][currentElement]);
        currentElement = plants[1][currentElement];
    }
}

printSortedPlants(plants);

const board = [
    ["", "", ""], // Row 1
    ["", "", ""], // Row 2
    ["", "", ""]  // Row 3
];

function printBoard() {
    for (let row of board) {
        console.log(row.join(" | "));
    }
    console.log("---------");
}

function checkWin(player) {
    // Check rows, columns and diagonals
    for (let i = 0; i < 3; i++) {
        if (board[i].every(cell => cell === player)) return true; // Check rows
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) return true; // Check columns
    }
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true; // Diagonal
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true; // Anti-diagonal
    return false;
}

function playGame() {
    let currentPlayer = "X"; // Player 1 is X, Player 2 is O
    let moves = 0;
    while (moves < 9) {
        printBoard();
        const row = prompt(`Player ${currentPlayer}, enter row (0-2): `);
        const col = prompt(`Player ${currentPlayer}, enter column (0-2): `);
        
        if (board[row][col] === "") {
            board[row][col] = currentPlayer;
            moves++;
            if ( checkWin(currentPlayer)) {
                printBoard();
                console.log(`Player ${currentPlayer} wins!`);
                break;
            }
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        } else {
            console.log("Invalid move, try again.");
        }
    }
    if (moves === 9) {
        printBoard();
        console.log("It's a draw!");
    }
}

playGame();