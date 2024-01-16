let idCount = 1;

function hideTable() {
    let table = document.getElementById("dataTable").style.visibility = "hidden";
}

function showTable() {
    let table = document.getElementById("dataTable").style.visibility = "visible";
}

function nameValidation() {
    let name = document.getElementById('fname').value;
    var regex = /^[a-zA-Z]+$/;
    if (name === "") {
        alert("Name should not be blank");
        return false;
    }else if (!regex.test(name)) {  // test will check jo regex m hai vo name m bhi hai ke nahi
        alert("No Special Character are allowed");
        return false;
    }
    return true;
}

function numValidation() {
    let number = document.getElementById('mobileNumber').value;

    if (number !== 1234567890 && number.length != 10) {
        alert("Please enter a valid mobile number with exactly 10 digits.");
    }
    return true
}

function addData() {

    if(!nameValidation() && numValidation()){
        return;
    } 

    let name = document.getElementById('fname').value;
    let email = document.getElementById('email').value;
    let mnumber = document.getElementById('mobileNumber').value;

    const table = document.getElementById('dataTable');

    const addRow = table.insertRow(table.rows.length); // Added row after table

    let cell1 = addRow.insertCell(0);
    let cell2 = addRow.insertCell(1);
    let cell3 = addRow.insertCell(2);
    let cell4 = addRow.insertCell(3);
    let cell5 = addRow.insertCell(4);

    cell1.innerHTML = idCount++;
    cell2.innerHTML = name;
    cell3.innerHTML = mnumber;
    cell4.innerHTML = email;
    cell5.innerHTML = `<button type="button" class="btn btn-warning btn-sm edit" onclick="editbtn(this)">Edit</button>` + `<button type="button class="btn btn-danger btn-sm delete" onclick="deletebtn(this)">Delete</button>`

    name = document.getElementById('fname').value = '';
    email = document.getElementById("email").value = '';
    mnumber = document.getElementById('mobileNumber').value = '';

    showTable();
}

function editbtn(button) {
    let row = button.parentNode.parentNode;
    let cell = row.getElementsByTagName('td');

    let name = cell[1].innerHTML;
    let mnumber = cell[2].innerHTML;
    let email = cell[3].innerHTML;

    document.getElementById('fname').value = name;
    document.getElementById('mobileNumber').value = mnumber;
    document.getElementById('email').value = email;

    row.remove();
    idCount--;
}

function deletebtn(button) {
    let row = button.parentNode.parentNode;
    row.remove();
}
