const frutas = [];
const frutasOrdenadas = frutas.sort();

        function cadastrar(e) {
            e.preventDefault();
            const fruta = document.getElementById('fruta').value;
            fruta.trim();
            fruta.toLowerCase();
            frutas.push(fruta);
            console.log(frutas);

            let template = "";
            (frutas.sort()).forEach((f) => {
                template += `
            <li>${f}</li>
            `
            });
            console.log(template);
            document.getElementById('lista').innerHTML = template;
        };

        function listar() {
            fetch("http://localhost:3000/feira", {
                method: "POST",
                headers: "{'Context-Type : Application/json'}",
                data: JSON.stringify({
                   Frutas: frutasOrdenadas
                })
            });
        };