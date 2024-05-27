const boardGame = (function () {
    const board = [];
    const getBoard = () => board
    return {getBoard,choosePlace};
})();



function createUser(name) {

    let sign = 1;
    return {name,sign}
}

function gameFlow() {
    const choosePlace = (item,index) => {
                // push the item in the corresponding index
        boardGame.getBoard().push()
    }

    return {getPlayerOneScore,getPlayerTwoScore,choosePlace};
}

/* 

let playerOneScore = 0;
    let playerTwoScore = 0;

    const getPlayerOneScore = () => playerOneScore;
    const getPlayerTwoScore = () => playerOneScore;

*/








/*
questions to answer: when to use arrow and when to use other functions?

should I get an instance of the array, or the array itself?
*/











/*

Thinking logically:
    we need a gameboard:
        3x3 grid, where we store the values by indexes, each line has 3.
        so we need 9 places, meaning 8 indexes


*/