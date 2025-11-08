
let grid = document.querySelector(".grid");
let sizeButton = document.querySelector(".size");
let resetButton = document.querySelector(".reset");
let gridWidth = 600;
let gridHeight = 600;

// default grid size
createGrid(16);

// event listeners for controls buttons
sizeButton.addEventListener("click", promptSize);
resetButton.addEventListener("click", reset);



function createGrid(size){
    // Clear grid
    grid.innerHTML = "";

    // Create a grid of div (size x size) dimensions
    for(let i = 0; i < size * size; i++){
            let newSquare = document.createElement("div");

            newSquare.style.width = (gridWidth / size) + "px";
            newSquare.style.height = newSquare.style.width;
            newSquare.style.border = "1px solid black";
            newSquare.style.boxSizing = "border-box";

            newSquare.addEventListener("mouseenter", () => {
                newSquare.style.backgroundColor = getRandomColor();
            });
            
            grid.appendChild(newSquare);
    }
}


// Custom grid size from user prompt
function promptSize(){
    let newSize = prompt("Please enter a grid size (from 2 to 100): ");

    while(!(newSize >= 2 && newSize <= 100)){
        newSize = prompt("Try again. Please enter a grid size (from 2 to 100):");
    }

    createGrid(newSize);
}







function getRandomColor(){
    let randomColor = "#";
    let values = "0123456789abcdef";

    for(let i = 0; i < 6; i++){
        randomColor += values.charAt(Math.floor(Math.random() * 16));
    }

    return randomColor;
}



function reset(){
    let squares = Array.from(grid.querySelectorAll("div"));
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = "unset";
    }
}