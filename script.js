const grid = document.querySelector("#grid");
let cellWidth = 0;
let cellHeight = 0;

function createGrid(width, height) {
    cellWidth = 720/width - 2;
    cellHeight = 656/height - 2;
    for (i = 1; i <= (width * height); i++) {
        let gridCell = document.createElement('div');
        gridCell.setAttribute("id", "gridCell-" + i)
        gridCell.setAttribute("class", "gridCell")
        gridCell.style.width = cellWidth + "px";
        gridCell.style.height = cellHeight + "px";
        gridCell.addEventListener("mouseover", function() {
            gridCell.style.backgroundColor = "lightGrey";
        })
        grid.appendChild(gridCell);
    } 
}

createGrid(16, 16);

const body = document.querySelector("body");
const gridButton = document.createElement("button");
gridButton.setAttribute("id", "gridButton");
gridButton.textContent = "Grid Size";

gridButton.addEventListener("click", function(){
    let newGridDimensions = prompt("New grid dimensions?");
    if (newGridDimensions != null && newGridDimensions != "") {
        let child = grid.lastElementChild;
        while (child) {
            grid.removeChild(child);
            child = grid.lastElementChild;
        }
        createGrid(newGridDimensions, newGridDimensions);
    }
    })

body.appendChild(gridButton);



function count(selector) {
    return selector.childElementCount;
}
console.log(count(grid));

document.addEventListener()