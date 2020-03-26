const display = document.querySelector("#display");
const grid = document.querySelector("#grid");
let gridDimensions = 16;

const gridButton = document.createElement("button");
gridButton.setAttribute("id", "gridButton");
gridButton.textContent = "Grid Size";

gridButton.addEventListener("click", function(){
    gridDimensions = prompt("New grid dimensions?");
    if (gridDimensions != null && gridDimensions != "") {
        let child = grid.lastElementChild;
        while (child) {
            grid.removeChild(child);
            child = grid.lastElementChild;
        }
        createGrid(gridDimensions, gridDimensions);
        console.log("grid size: " + count(grid));
    }
    })

display.appendChild(gridButton);

const clearButton = document.createElement("button");
clearButton.setAttribute("id", "clearButton");
clearButton.textContent = "Clear";
clearButton.addEventListener("click", function() {
    let child = grid.lastElementChild;
    while (child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
    createGrid(gridDimensions, gridDimensions);
})
display.appendChild(clearButton);

function createGrid(width, height) {
    gridDimensions = width;
    let cellWidth = 720/width - 2;
    let cellHeight = 656/height - 2;
    for (i = 1; i <= (width * height); i++) {
        let gridCell = document.createElement('div');
        gridCell.setAttribute("id", "gridCell-" + i)
        gridCell.setAttribute("class", "gridCell")
        gridCell.style.width = cellWidth + "px";
        gridCell.style.height = cellHeight + "px";
        gridCell.addEventListener("mouseover", function() {
            gridCell.style.backgroundColor = getRandomColor();
        })
        grid.appendChild(gridCell);
    } 
}
createGrid(16, 16);

function count(selector) {
    return selector.childElementCount;
}
console.log("grid size: " + count(grid));

function getRandomColor() {
    function c() {
      let hex = Math.floor(Math.random()*256).toString(16);
      return ("0"+String(hex)).substr(-2); // pad with zero
    }
    return "#"+c()+c()+c();
  }
