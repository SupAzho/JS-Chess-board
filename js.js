function chessBoard() {
  const firstDiv = document.createElement("div");
  firstDiv.id = "firstDiv";
  firstDiv.className = "firstDiv";
  document.getElementById("main").appendChild(firstDiv);

  //----------------------------------------------
  const label = document.createElement("label");
  label.innerHTML = "Input No of Boxes";
  label.className = "label";
  document.getElementById("firstDiv").appendChild(label);

  const inBox = document.createElement("INPUT");
  inBox.id = "input";
  inBox.className = "input";
  inBox.setAttribute("type", "number");
  document.getElementById("firstDiv").appendChild(inBox);
  //---------------------------------------------------

  const Btn = document.createElement("button");
  Btn.id = "Btn";
  Btn.className = "Btn";
  Btn.textContent = "Click me";
  Btn.addEventListener("click", boardDisplay);
  document.getElementById("firstDiv").appendChild(Btn);

  const clrBtn = document.createElement("button");
  clrBtn.id = "clrBtn";
  clrBtn.className = "clrBtn";
  clrBtn.textContent = "Clrear Button";
  clrBtn.addEventListener("click", clear);
  document.getElementById("firstDiv").appendChild(clrBtn);

  const displayBoard = document.createElement("div");
  displayBoard.id = "displayBoard";
  displayBoard.className = "displayBoard";
  document.getElementById("main").appendChild(displayBoard);
}
function boardDisplay() {
  const inputVal = document.getElementById("input").value;

  const table = document.createElement("table");
  for (i = 0; i <= inputVal; i++) {
    const tr = document.createElement("tr");
    for (j = 0; j <= inputVal; j++) {
      const td = document.createElement("td");
      td.id = `td ${i}${j}`;
      td.addEventListener("click", function () {
        color(this);
      });

      if (i % 2 == j % 2) {
        td.className = "white";
      } else {
        td.className = "black";
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.body.appendChild(table);

  document.getElementById("displayBoard").appendChild(table);
}

function clear() {
  document.getElementById("displayBoard").innerHTML = "";
}

function color(id) {
  if (id.className === "white") {
    document.getElementById(id.id).className = "colr";
  } else if (id.className === "black") {
    document.getElementById(id.id).className = "green";
  } else if (id.className === "colr") {
    document.getElementById(id.id).className = "white";
  } else if (id.className === "green") {
    document.getElementById(id.id).className = "black";
  }
}
