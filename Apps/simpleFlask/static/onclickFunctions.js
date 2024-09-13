function createTable() {
    const tableName = document.getElementById('table_name').value;
    const schema = document.getElementById('schema').value;

    fetch('http://127.0.0.1:5010/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tableName: tableName, schema: schema }),
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('output').textContent = data;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function insertData() {
    const tableName = document.getElementById('table_name_insert').value;
    const columns = document.getElementById('columns').value;
    const data = document.getElementById('data').value;

    fetch('http://127.0.0.1:5010/insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tableName: tableName, columns: columns, data: data }),
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('output').textContent = data;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}


function getData() {
    const tableName = document.getElementById('table_name_get').value;

    fetch('http://127.0.0.1:5010/getall', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tableName: tableName }),
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('output').textContent = data;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

