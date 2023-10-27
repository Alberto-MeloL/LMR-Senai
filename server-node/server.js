const http = require('http');
const fs = require('fs');

//importa os módulos 'http' e 'fs' para criar um servidor web e ler arquivos.

const server = http.createServer((req, res) =>{
    //cria um servidor HTTP utilizando a função 'createServer' do módulo 'http'.
    //a função recebe uma callback que é executada sempre que uma requisição é feita ao servidor.

    if (req.url === '/') {
        //verifica se a URL da requisição é a raiz("/").
        fs.readFile('index.html', (err, data) => {
            //lê o arquivo 'index.html' de forma assíncrona.

            if(err)
            {
                //se ocorrer um erro ao ler o arquivo:
                res.writeHead(500, {'Content-Type': 'text/plain'});
                //define o código de resposta HTTP como 500 (Erro interno do servidor).
                res.end('Erro interto do servidor');
                //envia uma mensagem de erro para o cliente.
            }else
            {
//se a leitura do arquivo for bem-sucedida:
res.writeHead(200, {'Content-Type': 'text/html'});
//define o código de resposta HTTP como 200(ok) e o tipo de conteúdo como HTML.
res.end(data);
//envia o conteúdo do arquivo 'index.html' como resposta para o cliente.
            }
        });
    }else if (req.url === '/sobre') 
    {
       //verifica se a URL da requisição é "/sobre".
       res.writeHead(200, {'Content-Type': 'text/plain'});
       //define o código de resposta HTTP como 200(ok) e o tipo de conteúdo como texto simples.
       res.end('Página Sobre');
       //envia a mensagem "Página Sobre" como resposta para o cliente.
}else
{
//se a URL da requisição não corresponder a nenhuma das condições acima:
res.writeHead(404, {'Content-Type': 'text/plain'});
// Define o código de resposta HTTP como 404 (Não Encontrado) e o tipo de conteúdo como texto simples.
res.end('Página não encontrada');
// Envia a mensagem "Página não encontrada" como resposta para o cliente.
}
});

server.listen(3000, () => {
    //inicia o servidor e o faz ouvir na porta 3000.
    console.log('Servidor está ouvindo na porta 3000');
    // Exibe uma mensagem no console quando o servidor é iniciado com sucesso.
});
