/**
 * Created by TrevorSpear on 6/18/17.
 */

var PlayerBoard = null;
var PlayerHealth = null;

var ComputerBoard = null;
var ComputerHealth = null;

var switchMode = 0;

/*
Knowledge
    Each board is an int array.
    switchMode indicates if player should be placing ships or not.

    Values on the Board array:

        0 = Nothing on that space
        1 = Fired and HIT at that space
       -1 = Fired and Missed at that space

        2 = Aircraft Carrier    = Length 5
        3 = Battleship          = Length 4
        4 = Submarine           = Length 3
        5 = Cruiser             = Length 3
        6 = Patrol Boat         = Length 2

    Number in the Health array -

        0 = Number of Player Ships  - 5 Ships
        1 = Something/Wanted to keep the arrays the same
        2 = Aircraft Carrier Health     = 5 Health
        3 = Battleship Health           = 4 Health
        4 = Submarine Health            = 3 Health
        5 = Cruiser Health              = 3 Health
        6 = Patrol Boat Health          = 2 Health


 */


//Initializes boards and sets each segment of the array to 0.
function createBoard() {

    PlayerBoard = new Array(10);
    ComputerBoard = new Array(10);

    PlayerHealth = new Array(7);
    ComputerHealth = new Array(7);

    for (var i = 0; i < 10; i++) {
        PlayerBoard[i] = new Array(10);
        ComputerBoard[i] = new Array(10);
    }

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            PlayerBoard[i][j] = 0;
            ComputerBoard[i][j] = 0;
        }
    }

    PlayerHealth[2] = 5;    //Aircraft Carrier
    PlayerHealth[3] = 4;    //Battleship
    PlayerHealth[4] = 3;    //Submarine
    PlayerHealth[5] = 3;    //Cruiser
    PlayerHealth[6] = 2;    //Patrol Boat

    ComputerHealth[2] = 5;  //Aircraft Carrier
    ComputerHealth[3] = 4;  //Battleship
    ComputerHealth[4] = 3;  //Submarine
    ComputerHealth[5] = 3;  //Cruiser
    ComputerHealth[6] = 2;  //Patrol Boat

    getNumPlayerShips();

}

//Place Ships
function PlaceShips() {

}

//
function Fire(x, y) {

    //Check if x is valid
    if(x >= 0 && x < 10){
        return;
    }

    //Check if y is valid
    if(y >= 0 && y < 10){
        return;
    }

    //Check if player has shot there before
    //if()


    //Check if hit or miss



}


function getNumPlayerShips() {

}