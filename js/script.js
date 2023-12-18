// Variáveis globais
var containerElement;
var resultadoElement;
var imagemEstacaoElement; // Mover a declaração para fora da função

// Criar elemento imagemEstacaoElement uma vez
window.onload = function () {
    imagemEstacaoElement = document.createElement("img");
    imagemEstacaoElement.id = "imagemEstacao";
    resultadoElement = document.getElementById("resultado");
    resultadoElement.appendChild(imagemEstacaoElement);
};

// Função para verificar a estação, criar a frase e exibir dados na tela
function verificarEstacao() {
    var dataInput = document.getElementById("data").value;

    // Parse da data para o formato correto
    var data = new Date(dataInput + "T00:00:00Z");

    // Ajustando para GMT+3 pois estava dando problemas com o primeiro dia do mês
    data.setUTCHours(data.getUTCHours() + 3);
	mes = data.getUTCMonth() + 1;

	containerElement = document.querySelector('.container');
    var nomeMes = "";

    switch (mes) {
        case 1: nomeMes = "Janeiro"; ; break;
        case 2: nomeMes = "Fevereiro"; break;
        case 3: nomeMes = "Março"; break;
        case 4: nomeMes = "Abril"; break;
        case 5: nomeMes = "Maio"; break;
        case 6: nomeMes = "Junho"; break;
        case 7: nomeMes = "Julho"; break;
        case 8: nomeMes = "Agosto"; break;
        case 9: nomeMes = "Setembro"; break;
        case 10: nomeMes = "Outubro"; break;
        case 11: nomeMes = "Novembro"; break;
        case 12: nomeMes = "Dezembro"; break;
    }

    var estacao = "";

    switch (mes) {
        case 1:
        case 2:
        case 3:
            estacao = "Verão";
            imagemEstacaoElement.src = "imagens/verao.jpg";
            aplicarEstiloEstacao("rgba(255, 0, 0, 0.8)", "rgba(255, 255, 255, 1)", "#fff", estacao);
            break;
        case 4:
        case 5:
        case 6:
            estacao = "Outono";
            imagemEstacaoElement.src = "imagens/outono.jpg";
            aplicarEstiloEstacao("rgba(255, 165, 0, 0.8)", "rgba(255, 255, 255, 1)", "#fff", estacao);
            break;
        case 7:
        case 8:
        case 9:
            estacao = "Inverno";
            imagemEstacaoElement.src = "imagens/inverno.jpg";
            aplicarEstiloEstacao("rgba(173, 216, 230, 0.8)", "rgba(0, 0, 0, 0.8)", "#000", estacao);
            break;
        case 10:
        case 11:
        case 12:
            estacao = "Primavera";
            imagemEstacaoElement.src = "imagens/primavera.jpg";
            aplicarEstiloEstacao("rgba(255, 182, 193, 0.8)", "rgba(255, 255, 255, 1)", "#fff", estacao);
            break;
        default:
            estacao = "Mês inválido";
            break;
    }

    resultadoElement.innerHTML = `A estação do ano correspondente ao mês ${nomeMes} é ${estacao}.<hr><br>
    <img id="imagemEstacao" src="${imagemEstacaoElement ? imagemEstacaoElement.src : ''}" alt="Imagem da Estação">`;
}

// Função para aplicar os estilos dinamicamente
function aplicarEstiloEstacao(corFundo, corTexto, corInput, estacao) {
    
	// Estiliza backgroundColor
	containerElement.style.backgroundColor = corFundo;
    document.body.style.backgroundColor = corFundo;
	
	// Estiliza text-color
	resultadoElement.style.color = corTexto;
    document.body.style.color = corTexto;
    
	
    
	// Estiliza label
	document.querySelectorAll('label').forEach(label => {
        switch (estacao) {
            case "Primavera":
                label.style.color = "rosybrown"; // Cor rosa escuro
                break;
            case "Verão":
                label.style.color = "darkred"; // Cor vermelho escuro
                break;
            case "Outono":
                label.style.color = "brown"; // Cor marrom
                break;
            case "Inverno":
                label.style.color = "darkblue"; // Cor azul escuro
                break;
            default:
                label.style.color = corTexto;
        }
    });
	
	// Estiliza input
    document.querySelectorAll('input').forEach(input => {
        switch (estacao) {
            case "Primavera":
                input.style.backgroundColor = "mistyrose"; // Cor rosa claro
                input.style.color = "rosybrown"; // Cor rosa escuro
                break;
            case "Verão":
                input.style.backgroundColor = "lightcoral"; // Cor vermelho claro
                input.style.color = "darkred"; // Cor vermelho escuro
                break;
            case "Outono":
                input.style.backgroundColor = "lightsalmon"; // Cor laranja claro
                input.style.color = "brown"; // Cor marrom
                break;
            case "Inverno":
                input.style.backgroundColor = "aliceblue"; // Cor azul acinzentado
                input.style.color = "darkblue"; // Cor azul escuro
                break;
            default:
                input.style.backgroundColor = corInput;
                input.style.color = corTexto;
        }
    });
	
	
}

