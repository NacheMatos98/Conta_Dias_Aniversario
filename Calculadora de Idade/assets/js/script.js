const botao = document.getElementById("btnCalcular");

botao.addEventListener("click", idade);

const meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            //  0   1   2   3   4   5   6   7   8   9   10  11


function idade(){
    let hoje = new Date();

    let entraData = new Date(document.getElementById('date-input').value);

    let nascDetalhes = {
        dia: entraData.getDate(),
        mes: entraData.getMonth()+1,
        ano: entraData.getFullYear()
    }

    let anoAtual = hoje.getFullYear();

    let mesAtual = hoje.getMonth()+1;

    let diaAtual = hoje.getDate()-1;

    console.log(`ano = ${anoAtual}, mes = ${mesAtual}, dia = ${diaAtual}`);


    if(
        nascDetalhes.ano > anoAtual || (nascDetalhes.mes > mesAtual && 
        nascDetalhes.ano == anoAtual) || (nascDetalhes.dia > diaAtual && 
        nascDetalhes.mes == mesAtual && nascDetalhes.ano == anoAtual)
    
        ){
           alert("Ainda não nascido!!!");
           return; 
    }

    //Calculo de idade em anos
    quantAnos = anoAtual - nascDetalhes.ano;

    //Calculo de idade em meses
    if(mesAtual >= nascDetalhes.mes){
        quantMes = mesAtual - nascDetalhes.mes; 
    }
    else{
        quantAnos--;
        quantMes = (mesAtual - nascDetalhes.mes) + 12;
    }

    //Calculo de idade em dias
    if(diaAtual >= nascDetalhes.dia){
        quantDias = diaAtual - nascDetalhes.dia;
    }
    else{
        quantMes--;
        let qDias = meses[mesAtual-2];
        quantDias = (diaAtual - nascDetalhes.dia) + qDias;
        if(quantMes < 0){
            quantMes = 11;
            quantAnos--;
        }
    }

    let proximoDiaAni = new Date(hoje.getFullYear(), entraData.getMonth(), entraData.getDate());

    if(hoje > proximoDiaAni){
        proximoDiaAni.setFullYear(hoje.getFullYear()+1);
    }

    let umDia = 24*60*60*1000;

    let diasRestantes = Math.ceil((proximoDiaAni.getTime() - hoje.getTime()) / (umDia));

    

    mostrarNaTela(quantAnos, quantMes, quantDias, diasRestantes);
}


function mostrarNaTela(idadeAno, idadeMes, idadeDias, dias){
    document.getElementById("anos").textContent = idadeAno;
    document.getElementById("meses").textContent = idadeMes;
    document.getElementById("dias").textContent = idadeDias;
    document.getElementById('respAni').innerText = `Faltam ${dias} dias para seu aniversário, você terá ${quantAnos+1} anos de idade`;
}

