// Player moves
let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerTwoMoveOneType;
let playerTwoMoveOneValue;

let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;

let playerOneMoveThreeType;
let playerOneMoveThreeValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;



const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {

    const allowableTypes = ["rock", "paper", "scissors"];
    const moveOneValid = allowableTypes.includes(moveOneType);
    const moveTwoValid = allowableTypes.includes(moveTwoType);
    const moveThreeValid = allowableTypes.includes(moveThreeType);

    if (moveOneValid && moveTwoValid && moveThreeValid) {

    } else {
        return;
    }

    if (moveOneValue >= 1 && moveTwoValue >= 1 && moveThreeValue >= 1) {

    } else {
        return;
    }

    if (moveOneValue <= 99 && moveTwoValue <= 99 && moveThreeValue <= 99) {

    } else {
        return;
    }

    const moveTotalValue = moveOneValue + moveTwoValue + moveThreeValue

    if (moveTotalValue > 99) {
        return;
    }

    if (player === 'Player One') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    } else if (player === 'Player Two') {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    } else {
        return;
    }
}

const getRoundWinner = roundNumber => {

    const allowableRounds = [1, 2, 3];
    if (allowableRounds.includes(roundNumber)) {
    } else {
        return;
    }


    if (roundNumber === 1) {
        if (playerOneMoveOneType === playerTwoMoveOneType) {
            if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                return 'Player One';
            } else if (playerOneMoveOneValue === playerTwoMoveOneValue) {
                return 'Tie';
            } else {
                return 'Player Two';
            }
        } else if (playerOneMoveOneType === 'rock') {
            if (playerTwoMoveOneType === 'scissors') {
                return 'Player One';
            } else {
                return 'Player Two';
            }

        } else if (playerOneMoveOneType === 'paper') {
            if (playerTwoMoveOneType === 'rock') {
                return 'Player One';
            } else {
                return 'Player Two';
            }
        } else if (playerOneMoveOneType === 'scissors') {
            if (playerTwoMoveOneType === 'paper') {
                return 'Player One';
            } else {
                return 'Player Two';
            }
        } else {
            return 'Error! False move input detected.'
        }
    } else if (roundNumber === 2) {
        if (playerOneMoveTwoType === playerTwoMoveTwoType) {
            if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                return 'Player One';
            } else if (playerOneMoveTwoValue === playerTwoMoveTwoValue)
                return 'Tie';
        } else if (playerOneMoveTwoType === 'rock') {
            if (playerTwoMoveTwoType === 'scissors') {
                return 'Player One';
            } else {
                return 'Player Two';
            }

        } else if (playerOneMoveTwoType === 'paper') {
            if (playerTwoMoveTwoType === 'rock') {
                return 'Player One';
            } else {
                return 'Player Two';
            }
        } else if (playerOneMoveTwoType === 'scissors') {
            if (playerTwoMoveTwoType === 'paper') {
                return 'Player One';
            } else {
                return 'Player Two';
            }
        } else {
            return 'Error! False move input detected.'
        }

    } else if (roundNumber === 3) {
        if (playerOneMoveThreeType === playerTwoMoveThreeType) {
            if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                return 'Player One';
            } else if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
                return 'Tie';
            } else {
                return 'Player Two';
            }
        } else if (playerOneMoveThreeType === 'rock') {
            if (playerTwoMoveThreeType === 'scissors') {
                return 'Player One';
            } else {
                return 'Player Two';
            }

        } else if (playerOneMoveThreeType === 'paper') {
            if (playerTwoMoveThreeType === 'rock') {
                return 'Player One';
            } else {
                return 'Player Two';
            }
        } else if (playerOneMoveThreeType === 'scissors') {
            if (playerTwoMoveThreeType === 'paper') {
                return 'Player One';
            } else {
                return 'Player Two';
            }
        } else {
            return 'Error! False move input detected.'
        }

    }
}

const getGameWinner = () => {
    let playerOneScore = 0
    let playerTwoScore = 0
    if (getRoundWinner(1) === 'Player One') {
        playerOneScore++;
    } else if (getRoundWinner(1) === 'Player Two') {
        playerTwoScore++;
    }
    if (getRoundWinner(2) === 'Player One') {
        playerOneScore++
    } else if (getRoundWinner(2) === 'Player Two') {
        playerTwoScore++
    }
    if (getRoundWinner(3) === 'Player One') {
        playerOneScore++
    } else if (getRoundWinner(3) === 'Player Two') {
        playerTwoScore++
    }
    if (playerOneScore > playerTwoScore) {
        return 'Player One';
    } else if (playerTwoScore > playerOneScore) {
        return 'Player Two';
    } else {
        return 'Tie';
    }
}

const setComputerMoves = () => {
    let computerMoveOneType = Math.floor((Math.random()) * 3);
    let computerMoveTwoType = Math.floor((Math.random()) * 3);
    let computerMoveThreeType = Math.floor((Math.random()) * 3);

    if (computerMoveOneType === 0) {
        computerMoveOneType = 'rock'
    } else if (computerMoveOneType === 1) {
        computerMoveOneType = 'paper'
    } else {
        computerMoveOneType = 'scissors'
    }

    if (computerMoveTwoType === 0) {
        computerMoveTwoType = 'rock';
    } else if (computerMoveTwoTypee === 1) {
        computerMoveTwoTypee = 'paper';
    } else {
        computerMoveTwoType = 'scissors';
    }

    if (computerMoveThreeType === 0) {
        computerMoveThreeType = 'rock'
    } else if (computerMoveThreeType === 1) {
        computerMoveThreeType = 'paper'
    } else {
        computerMoveThreeType = 'scissors'
    }

    const computerMoveValue1 = Math.floor((Math.random() * 97) + 1);
    const computerMoveValue2 = Math.floor(Math.random() * (99 - computerMoveValue1)) + 1;
    const computerMoveValue3 = 99 - computerMoveValue1 - computerMoveValue2;

    setPlayerMoves = ('Player Two', computerMoveOneType, computerMoveValue1, computerMoveTwoType, computerMoveValue2, computerMoveThreeType, computerMoveValue3)
}
