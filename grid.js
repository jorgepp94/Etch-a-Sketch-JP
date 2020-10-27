const container = document.getElementById("grid-container");
let newGrid;
makeRows(16);

function makeRows(gridSize) {
  container.style.setProperty('--grid-rows', gridSize);
  container.style.setProperty('--grid-cols', gridSize);
  for (c = 0; c < (gridSize*gridSize); c++) {
    let box = document.createElement("div");
    container.appendChild(box).className = "grid-item";
    box.addEventListener("mouseover", (e) =>{
      e.target.style.backgroundColor = "#48494B";
    });
  }
}



const cleaner = document.getElementById("cleaner");
cleaner.addEventListener("click", (e) =>{
    newGrid = prompt("Enter a new grid size:");
    makeRows(newGrid);
});