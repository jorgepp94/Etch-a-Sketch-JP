const container = document.getElementById("grid-container");
let box;


makeRows(25);

function makeRows(gridSize) {
  container.style.setProperty('--grid-rows', gridSize);
  container.style.setProperty('--grid-cols', gridSize);
  for (c = 0; c < (gridSize*gridSize); c++) {
    box = document.createElement("div");
    container.appendChild(box).className = "grid-item";
    box.addEventListener("mouseover", (e) =>{
      e.target.style.backgroundColor = "#48494B";
    });
  }
}

const cleaner = document.getElementById("cleaner");
cleaner.addEventListener("click", (e) =>{
    //let newGrid = prompt("Enter a new grid size:");
    let gridCleaner = document.querySelectorAll(".grid-item");
    console.log(gridCleaner);
    gridCleaner.forEach(myFunction);

    function myFunction(gridCleaner){
      gridCleaner.style.backgroundColor = "transparent";
    }
});