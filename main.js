function loadUserData() {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {

            let tableBody = document.getElementById("tableBody");

            tableBody.innerHTML = "";

            users.forEach((user, index) => {

                tableBody.innerHTML += `
                    <tr>
                        <th>${index + 1}</th>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.website}</td>

                        <td>
                            <button class="btn btn-primary btn-sm me-1">Edit</button>
                            <button class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                `;

            });

        });

}

loadUserData();