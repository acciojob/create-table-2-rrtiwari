function createTable() {
  let rn = prompt("Input number of rows");
  let cn = prompt("Input number of columns");

  rn = parseInt(rn);
  cn = parseInt(cn);

  if (isNaN(rn) || isNaN(cn)) {
    alert("Please enter valid numeric values.");
    return;
  }
  if (rn <= 0 || cn <= 0) {
    alert("Rows and columns must be greater than 0.");
    return;
  }

  let table = document.getElementById("myTable");
  table.innerHTML = "";

  for (let i = 0; i < rn; i++) {
    let tr = document.createElement("tr");

    for (let j = 0; j < cn; j++) {
      let td = document.createElement("td");
      td.innerHTML = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
}
