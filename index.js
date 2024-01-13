function addData(){
    let name = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let mnumber = document.getElementById("mobileNumber").value;

    const table = document.getElementById('dataTable').value;

    const addRow = table.insertRow(table.rows.length);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);

    idCount = 1;
    cell1.innerHTML = idCount++;
    cell2.innerHTML = name;
    cell3.innerHTML = mnumber;
    cell4.innerHTML = email;
    cell5.innerHTML = `<button onClick="" ></button>`

    
}