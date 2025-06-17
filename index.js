// index.js

const http = require('http'); // Importa o módulo HTTP nativo do Node.js

const PORT = process.env.PORT || 3000; // Define a porta, usando a variável de ambiente PORT ou 3000 como padrão

// Cria o servidor HTTP
const server = http.createServer((req, res) => {
  // Define o cabeçalho da resposta HTTP
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  // Envia a resposta para o cliente
  res.end('Olá do meu aplicativo Docker! \nO servidor está rodando na porta ' + PORT + '\n');
});

// Faz o servidor "escutar" por requisições na porta definida
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log('Este log aparecerá no console do Docker.');
});