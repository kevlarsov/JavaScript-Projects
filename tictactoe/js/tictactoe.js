//KEEPS TRACK OF WHOSE TURN IT IS
let activePlayer = 'x';
//ARRAY OF MOVES TO DETERMINE WIN CONDITIONS
let selectedSquares = [];

//SELECT SQUARE FUNCTION
function placeXO(squareNumber) {
    //ENSURES SQUARE HASN'T ALREADY BEEN SELECTED
    //.SOME CHECKS SELECTEDSQUARES ARRAY TO SEE IF IT CONTAINS THE SELECTED SQUARE
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //VAR RETRIEVES THE SELECTED SQUARE HTML ELEMENT
        let select = document.getElementById(squareNumber);
        //CHECKS WHOSE TURN IT IS
        if (activePlayer === "x") {
            //IF ACTIVEPLAYER = X, X.PNG PLACED IN SELECTED SQUARE
            select.style.backgroundImage = 'url("./img/x.jpg")';
        }
        else {
            //IF ACTIVEPLAYER = O, O.PNG PLACED IN SELECTED SQUARE
            select.style.backgroundImage = 'url("./img/o.jpg")';
        }
        //CONCATENATES SN + AP AND ADDS TO ARRAY
        selectedSquares.push(squareNumber + activePlayer);
        //CHECK FOR WIN CONDITIONS
        checkWinConditions();
        //CHANGES ACTIVEPLAYER
        if (activePlayer === "x") {
            activePlayer = "o";
        }
        else {
            activePlayer = "x";
        }
        //PLAYS PLACE SOUND
        audio('./media/place.mp3');
        //CHECKS FOR COMPUTERS TURN
        if (activePlayer === "o") {
            //DISABLES CLICK FOR COMPUTERS TURN
            disableClick();
            //WAITS 1 SECOND FOR COMPUTERS TURN
            setTimeout(function () { computersTurn(); }, 1000)
        }
        //NEEDED FOR NEXT FUNCTION
        return true;
    }
    
    //RANDOM SQUARE SELECTION
    function computersTurn() {
        //VAR NEEDED FOR WHILE LOOP
        let success = false;
        //VAR STORES RANDOM # 0-8
        let pickASquare;
        //KEEP TRYING IF A SQUARE HAS ALREADY BEEN SELECTED
        while (!success) {
            //SELECTS RANDOM # 0-8
            pickASquare = String(Math.floor(Math.random() * 9));
            //IF RANDOM # RETURNS TRUE, SQUARE HAS NOT YET BEEN SELECTED
            if (placeXO(pickASquare)) {
                //CALLS FUNCTION
                placeXO(pickASquare);
                //CHANGES BOOLEAN TO END LOOP
                success = true;
            };
        }
    }
}

//CHECKS SELECTEDSQUARES ARRAY FOR WIN CONDITIONS
function checkWinConditions() {
    // X 0,1,2 CONDITION
    if      (arrayIncludes('0x', '1x', '2x')) { drawWinLine(50,100,558,100) }
    // X 3,4,5 CONDITION
    else if (arrayIncludes('3x', '4x', '5x')) { drawWinLine(50,304,558,304) }
    // X 6,7,8 CONDITION
    else if (arrayIncludes('6x', '7x', '8x')) { drawWinLine(50,508,558,508) }
    // X 0,3,6 CONDITION
    else if (arrayIncludes('0x', '3x', '6x')) { drawWinLine(100,50,100,558) }
    // X 1,4,7 CONDITION
    else if (arrayIncludes('1x', '4x', '7x')) { drawWinLine(304,50,304,558) }
    // X 2,5,8 CONDITION
    else if (arrayIncludes('2x', '5x', '8x')) { drawWinLine(508,50,508,558) }
    // X 6,4,2 CONDITION
    else if (arrayIncludes('6x', '4x', '2x')) { drawWinLine(100,508,510,90) }
    // X 0,4,8 CONDITION
    else if (arrayIncludes('0x', '4x', '8x')) { drawWinLine(100,100,520,520) }

    // O 0,1,2 CONDITION
    else if (arrayIncludes('0o', '1o', '2o')) { drawWinLine(50,100,558,100) }
    // O 3,4,5 CONDITION
    else if (arrayIncludes('3o', '4o', '5o')) { drawWinLine(50,304,558,304) }
    // O 6,7,8 CONDITION
    else if (arrayIncludes('6o', '7o', '8o')) { drawWinLine(50,508,558,508) }
    // O 0,3,6 CONDITION
    else if (arrayIncludes('0o', '3o', '6o')) { drawWinLine(100,50,100,558) }
    // O 1,4,7 CONDITION
    else if (arrayIncludes('1o', '4o', '7o')) { drawWinLine(304,50,304,558) }
    // O 2,5,8 CONDITION
    else if (arrayIncludes('2o', '5o', '8o')) { drawWinLine(508,50,508,558) }
    // O 6,4,2 CONDITION
    else if (arrayIncludes('6o', '4o', '2o')) { drawWinLine(100,508,510,90) }
    // O 0,4,8 CONDITION
    else if (arrayIncludes('0o', '4o', '8o')) { drawWinLine(100,100,520,520) }
    //CHECKS FOR TIE
    else if (selectedSquares.length >= 9) {
        //PLAYS TIE SOUND
        audio('./media/tie.mp3');
        //SETS 1 SECOND TIMER FOR GAME RESET
        setTimeout(function () { resetGame(); }, 1000);
    }
    
    //CHECKS IF AN ARRAY INCLUDES 3 STRINGS; EACH WIN CONDITION
    function arrayIncludes(squareA, squareB, squareC) {
        //3 VARS CHECK FOR 3 IN A ROW
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //IF ALL 3 INCLUDED IN ARRAY, TRUE RETURNED AND DRAWWINLINE EXECUTED
        if (a === true && b === true && c === true) { return true }
    }
}

//MAKES BODY ELEMENT TEMPORARILY UNCLICKABLE
function disableClick() {
    //MAKES BODY UNCLICKABLE
    body.style.pointerEvents = 'none';
    //MAKES BODY CLICKABLE AGAIN AFTER 1 SECOND
    setTimeout(function() { body.style.pointerEvents = 'auto'; }, 1000);
}

//TAKES FILEPATHS SET ABOVE FOR AUDIO ASSETS
function audio(audioURL) {
    //CREATE NEW AUDIO OBJECT AND PASS FILEPATH AS PARAMETER
    let audio = new Audio(audioURL);
    //PLAYS THE AUDIO ASSET
    audio.play();
}

//UTILIZES HTML CANVAS TO DRAW WIN LINES
function drawWinLine(coordx1, coordy1, coordx2, coordy2) {
    //ACCESSES HTML CANVAS
    const canvas = document.getElementById('win-lines');
    //ACCESSES METHODS AND PROPERTIES TO USE ON CANVAS
    const c = canvas.getContext('2d');
    //INDICATES START OF WINLINE'S X AXIS
    let x1 = coordx1,
        //START OF WINLINE'S Y AXIS
        y1 = coordy1,
        //END OF WINLINE'S X AXIS
        x2 = coordx2,
        //END OF WINLINE'S Y AXIS
        y2 = coordy2,
        //STORES TEMPORARY X + Y AXES DATA, UPDATED IN THE ANIMATION LOOP
        x = x1,
        y = y1;

    //INTERACTS WITH THE CANVAS
    function animateLineDrawing() {
        //CREATES LOOP
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //CLEARS CONTENT FROM LAST LOOP ITERATION
        c.clearRect(0,0,608,608);
        //STARTS NEW PATH
        c.beginPath();
        //MOVES TO WINLINE START POINT
        c.moveTo(x1,y1);
        //INDICATES WINLINE END POINT
        c.lineTo(x,y);
        //SETS WINLINE WIDTH
        c.lineWidth = 10;
        //SETS WINLINE COLOR
        c.strokeStyle = 'rgba(70,255,33,0.8)';
        //DRAWS WHAT WAS LAID OUT ABOVE
        c.stroke();
        //CHECKS IF END POINT REACHED
        if (x1 <= x2 && y1 <= y2) {
            //ADDS 10 TO PREVIOUS X END POINT
            if (x <= x2) { x += 10; }
            //ADDS 10 TO PREVIOUS Y END POINT
            if (y <= y2) { y += 10; }
            //CANCELS ANIMATION LOOP IF END POINTS REACHED
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //SIMILAR TO ABOVE CONDITION, NECESSARY FOR 6,4,2 WIN CONDITION
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    //CLEARS CANVAS AFTER WINLINE DRAWN
    function clear() {
        //STARTS ANIMATION LOOP
        const animationLoop = requestAnimationFrame(clear);
        //CLEARS CANVAS
        c.clearRect(0,0,608,608);
        //STOPS ANIMATION LOOP
        cancelAnimationFrame(animationLoop);
    }
    //DISABLES CLICKING WHILE WIN SOUND PLAYING
    disableClick();
    //PLAYS WIN SOUND
    audio('./media/winGame.mp3');
    //CALLS MAIN ANIMATION LOOP
    animateLineDrawing();
    //WAITS 1 SECOND, CLEARS CANVAS, RESETS GAME, AND ALLOWS CLICKING AGAIN
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//RESETS GAME AFTER WIN OR TIE
function resetGame() {
    //ITERATES THROUGH EACH SQUARE ELEMENT
    for (let i = 0; i < 9; i++) {
        //GETS HTML ELEMENT 'I'
        let square = document.getElementById(String(i))
        //REMOVES ELEMENTS BACKGROUND IMAGE
        square.style.backgroundImage = ''
    }
        //RESETS ARRAY TO START OVER
        selectedSquares = [];
}