const express = require('express');
const clientRoutes = require('./routes/clientRoutes');

class Server {
  constructor() {
    this.app = express();
    this.port = 3000;
    this.configureMiddleware();
    this.configureRoutes();
  }

  configureMiddleware() {
    this.app.use(express.json()); // Permite ler JSON no corpo das requisições
  }

  configureRoutes() {
    this.app.use('/api', clientRoutes); // Prefixo '/api' para todas as rotas
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Servidor rodando na porta ${this.port}`);
    });
  }
}

module.exports = new Server();