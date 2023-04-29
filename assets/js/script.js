const tableBody = document.getElementById('tablebody');

fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(data => {
        data.forEach(digimon => {
            const row = document.createElement('tr');
            const name = document.createElement('td');
            name.textContent = digimon.name;
            const image = document.createElement('td');
            const imageTag = document.createElement('img');
            imageTag.src = digimon.img;
            image.appendChild(imageTag);
            const level = document.createElement('td');
            level.textContent = digimon.level;
            row.appendChild(name);
            row.appendChild(image);
            row.appendChild(level);
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error(error));

// const tabla = document.getElementById("tablebody");
const inputBuscar = document.getElementById("buscardigimon");
const btnBuscar = document.getElementById("btnbuscar");

btnBuscar.addEventListener("click", () => {
    const nombreDigimon = inputBuscar.value.trim();
    if (nombreDigimon) {
        fetch(`https://digimon-api.vercel.app/api/digimon/name/${nombreDigimon}`)
            .then((response) => response.json())
            .then((data) => {
                data.forEach(digimon => {
                    tableBody.innerHTML = ""

                    const row = document.createElement('tr');
                    const name = document.createElement('td');
                    name.textContent = digimon.name;
                    const image = document.createElement('td');
                    const imageTag = document.createElement('img');
                    imageTag.src = digimon.img;
                    image.appendChild(imageTag);
                    const level = document.createElement('td');
                    level.textContent = digimon.level;
                    row.appendChild(name);
                    row.appendChild(image);
                    row.appendChild(level);
                    tableBody.appendChild(row);

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }
});