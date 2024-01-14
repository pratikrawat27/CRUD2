let idCount = 1;

function addData(){
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
}

function editbtn(button){
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

function deletebtn(button){
    let row = button.parentNode.parentNode;
    row.remove();
}
