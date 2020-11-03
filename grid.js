
function makeRows(gridSize) {
  const container = document.getElementById("grid-container");
  //textContent = ""; cleans the grid
  container.textContent = " ";
  container.style.setProperty('--grid-rows', gridSize);
  container.style.setProperty('--grid-cols', gridSize);
  for (c = 0; c < (gridSize*gridSize); c++) {
    let box = document.createElement("div");
    box.addEventListener("mouseover", (e) =>{
      e.target.style.backgroundColor = "#48494B";
    });
    container.appendChild(box).className = "grid-item";
  }
}

const cleaner = document.getElementById("cleaner");
cleaner.addEventListener("click", (e) =>{
    
    let gridCleaner = document.querySelectorAll(".grid-item");
    console.log(gridCleaner);
    gridCleaner.forEach((cleanItems) =>{
      cleanItems.style.backgroundColor = "transparent";
    });

    let newGrid = limitGrid(prompt("Enter a new grid size:"));
    if (newGrid){
      makeRows(newGrid);
    }
    
});

makeRows(10);

//Grid size limitation

function limitGrid (gridValue){
  if (!gridValue) {
    alert("Please enter a number between 2 and 100");
    return false;
}
    if (gridValue>=100) {
        alert("Please enter a number smaller than 100");
        return false;
    }

    if (gridValue<=1) {
        alert("Please enter a number bigger than 1");
        return false;
    }
return gridValue;
}