function calcularIdade() {
    const campo = document.getElementById('nascimento');
    const valor = campo.value;

    let status = "ok";

    if (!valor) {
        document.getElementById('resultado').style.color = "#35605a";
        document.getElementById('resultado').style.fontWeight = "700";
        document.getElementById('resultado').style.textDecoration = "underline";
        document.getElementById('resultado').textContent = "Por favor, insira uma data válida.";
        status = "not ok";
        return;
    }

    const dataNascimento = new Date(valor);
    const hoje = new Date();

    if (dataNascimento > hoje) {
        document.getElementById('resultado').style.color = "#35605a";
        document.getElementById('resultado').style.fontWeight = "700";
        document.getElementById('resultado').style.textDecoration = "underline";



        document.getElementById('resultado').textContent = "Erro, a data de nascimento não pode estar no futuro.";
        status = "not ok";
        return;
    }

    let anos = hoje.getFullYear() - dataNascimento.getFullYear();
    let meses = hoje.getMonth() - dataNascimento.getMonth();
    let dias = hoje.getDate() - dataNascimento.getDate();


    

        

    if (dias < 0) {
        meses--;
        dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    const totalMeses = anos * 12 + meses;

    document.getElementById('resultado').style.color = "black";

    // APAGAR DEPOIS TALVEZ \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    const calculo = `${anos} anos, e ${meses} meses e ${dias} dias`;
    document.getElementById('resultado').textContent = calculo;
    localStorage.setItem("calculo", calculo);
    if (status === "ok") {
         tabela();
    }

}

function excluir(botao) {
    const linha = botao.closest("tr"); // Encontra a linha da tabela mais próxima
    linha.remove(); // Remove a linha da tabela

    // Atualiza o localStorage
    const corpoTabela = document.getElementById("corpoTabela");
    const novasLinhas = [];

    for (let i = 0; i < corpoTabela.rows.length; i++) {
        const row = corpoTabela.rows[i];
        const data = row.cells[0].textContent;
        const calculo = row.cells[1].textContent;
        novasLinhas.push({ data, calculo });
    }

    localStorage.setItem("linhasSalvas", JSON.stringify(novasLinhas));
}

function atualizar(botao) {
    const linha = botao.closest("tr");

    // Pega os valores da linha
    const data = linha.cells[0].textContent.trim(); // formato dd/mm/aaaa
    const calculo = linha.cells[1].textContent.trim();

    // Converte data para o formato do input: yyyy-mm-dd
    const partes = data.split('/');
    const dataParaInput = `${partes[2]}-${partes[1]}-${partes[0]}`;

    // Preenche o input com a data
    document.getElementById("nascimento").value = dataParaInput;

    // Remove visualmente
    linha.remove();

    // Remove do localStorage
    let linhasSalvas = JSON.parse(localStorage.getItem("linhasSalvas")) || [];

    linhasSalvas = linhasSalvas.filter(item => {
        const itemData = item.data.trim();
        const itemCalculo = item.calculo.trim();
        return !(itemData === data && itemCalculo === calculo);
    });

    localStorage.setItem("linhasSalvas", JSON.stringify(linhasSalvas));
}