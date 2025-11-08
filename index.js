
let grid = document.querySelector(".grid");
let gridWidth = 600;
let gridHeight = 600;


createGrid(16);






function createGrid(size){
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