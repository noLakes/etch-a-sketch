const grid = document.querySelector("#grid");
let cellWidth = 0;
let cellHeight = 0;

function createGrid(width, height) {
    cellWidth = 720/width - 2;
    cellHeight = 720/height - 2;
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

createGrid(32, 32);

const button = document.createElement("button");
button.setAttribute("id", "button");
button.textContent = "Clear";
const body = document.querySelector("body");
body.appendChild(button);

function count(selector) {
    return selector.childElementCount;
}
console.log(count(grid));

document.addEventListener()