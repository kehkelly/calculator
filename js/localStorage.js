function tabela() {

    // Parte de adicionar as infos na tabela  

    const calculo = localStorage.getItem("calculo");
    const dataInput = document.getElementById("nascimento").value;
    const partes = dataInput.split("-");
    const dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`
    document.getElementById("testeInput").textContent = dataFormatada;

    const corpoTabela = document.getElementById("corpoTabela");
    const linhas = document.createElement("tr");

    linhas.innerHTML = `
        <td>${dataFormatada}</td>
        <td>${calculo}</td>
        <td>
            <button onclick="excluir(this)">Excluir</button>
            <button onclick="atualizar(this)">Atualizar</button>
        </td>
    
    `;

    corpoTabela.appendChild(linhas);

    ///////////////////////////////////////////////////////////////////////////////////////////////

    const novaLinha = {
        data: dataFormatada,
        calculo: calculo
    };

    let linhasSalvas = JSON.parse(localStorage.getItem("linhasSalvas")) || [];
    linhasSalvas.push(novaLinha);
    localStorage.setItem("linhasSalvas", JSON.stringify(linhasSalvas));

}

function carregarLinhasSalvas() {
    const corpoTabela = document.getElementById("corpoTabela");
    const linhasSalvas = JSON.parse(localStorage.getItem("linhasSalvas")) || [];

    linhasSalvas.forEach((linha) => {
        const novaLinhaElemento = document.createElement("tr");
        novaLinhaElemento.innerHTML = `
            <td>${linha.data}</td>
            <td>${linha.calculo}</td>
            <td>
                <button>Excluir</button>
                <button>Atualizar</button>
            </td>
        `;
        corpoTabela.appendChild(novaLinhaElemento);
    });

    novaLinhaElemento.innerHTML = `
    <td>${linha.data}</td>
    <td>${linha.calculo}</td>
    <td>
        <button onclick="excluir(this)">Excluir</button>
        <button>Atualizar</button>
    </td>
`;

novaLinhaElemento.innerHTML = `
    <td>${linha.data}</td>
    <td>${linha.calculo}</td>
    <td>
        <button onclick="excluir(this)">Excluir</button>
        <button onclick="atualizar(this)">Atualizar</button>
    </td>
`;
}

carregarLinhasSalvas();