fetch("http://localhost:3000/contacts")
    .then((response) => response.json())
    .then((data) => {

        const table = document.getElementById("tableData");

        table.innerHTML = "";

        data.forEach((contact) => {

            table.innerHTML += `
                <tr>
                    <td>${contact.id}</td>
                    <td>${contact.name}</td>
                    <td>${contact.email}</td>
                    <td>${contact.phone}</td>
                    <td>${contact.message}</td>
                </tr>
            `;

        });

    })
    .catch((error) => {
        console.log(error);
    });