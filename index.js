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

    cell1.innerHTML = idCount++;
    cell2.innerHTML = name;
    cell3.innerHTML = mnumber;
    cell4.innerHTML = email;

    name = document.getElementById('fname').value = '';
    email = document.getElementById("email").value = '';
    mnumber = document.getElementById('mobileNumber').value = '';
}
