//!initial values
let selectedRow = null;

//!form submit logic
function onFormSubmit(event) {
  event.preventDefault(); // Fix event handling
  let formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

//!get method (Retrieving the data)
function readFormData() {
  let formData = {};
  formData["productCode"] = document.getElementById("productCode").value.trim();
  formData["product"] = document.getElementById("product").value.trim();
  formData["qty"] = document.getElementById("qty").value.trim();
  formData["perPrice"] = document.getElementById("perPrice").value.trim();
  
  // Basic validation: Make sure all fields are filled
  if (Object.values(formData).some(value => value === "")) {
    alert("Please fill in all fields.");
    return null;
  }
  
  return formData;
}

//!insert the data (Post method)
function insertNewRecord(data) {
  let table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.productCode;
  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.product;
  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.qty;
  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.perPrice;
  let cell5 = newRow.insertCell(4); // Added a new cell for action buttons
  cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//!edit and update the data (Update method)
//editing the data (get)
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
  document.getElementById("product").value = selectedRow.cells[1].innerHTML;
  document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
  document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
}

//updating the data
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.productCode;
  selectedRow.cells[1].innerHTML = formData.product;
  selectedRow.cells[2].innerHTML = formData.qty;
  selectedRow.cells[3].innerHTML = formData.perPrice;
}

//!deleting the data (delete method)
//delete the data
function onDelete(td) {
  if (confirm("Are you sure you want to delete this data?")) {
    let row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

//!reseting the values in form
function resetForm() {
  document.getElementById("productCode").value = "";
  document.getElementById("product").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("perPrice").value = "";
  selectedRow = null;
}

  
  
