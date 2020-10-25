const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let box = document.createElement("div");
    container.appendChild(box).className = "grid-item";
    box.addEventListener("mouseover", (e) =>{
      e.target.style.backgroundColor = "dimgray";
    });
    //cell.innerText = (c + 1);
    
  };
};

makeRows(16, 16);

function reloadPage(){
  window.location.reload();
}