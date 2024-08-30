// Objeto global para armazenar variáveis
const globalVariables = {};
let textoDoArquivo = '';


function carregarArquivoTexto(url) {
    return fetch(url)
        .then(response => response.text())
        .then(data => {
            parseFile(data);
            textoDoArquivo = data;
        })
        .catch(error => console.error('Erro ao buscar o arquivo:', error));
};

function parseFile(contents) {
    const lines = contents.split('\n');
    lines.forEach(line => {
        const [variable, value] = line.split('=').map(item => item.trim());
        if (variable && value) {
            globalVariables[variable] = value;  // Armazena a variável no objeto global
        }
    });
}

// Chamada para carregar o arquivo de texto
carregarArquivoTexto('variables.txt')
    .then(() => {
        // Aqui você pode usar textoDoArquivo após ele ter sido carregado completamente
        let myString = JSON.stringify(globalVariables);
        document.getElementById("saida").innerHTML = 
        textoDoArquivo +'\n'+ myString;
    })
 