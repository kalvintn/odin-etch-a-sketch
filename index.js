
let grid = document.querySelector(".grid");
let sizeButton = document.querySelector(".size");
let gridWidth = 600;
let gridHeight = 600;

// default grid size
createGrid(16);

sizeButton.addEventListener("click", promptSize);




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
            
            grid.appendChild(newSquare);
    }

    console.log(grid);
}


// Custom grid size from user prompt
function promptSize(){
    let newSize = prompt("Please enter a grid size (from 2 to 100): ");

    while(!(newSize >= 2 && newSize <= 100)){
        newSize = prompt("Try again. Please enter a grid size (from 2 to 100):");
    }

    createGrid(newSize);
}