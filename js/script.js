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