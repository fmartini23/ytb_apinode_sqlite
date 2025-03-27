const db = require('../database/db');
class Client {
  static async getAll() {
    return db('clients').select('*'); // Seleciona todos os clientes
  }

  static async getById(id) {
    return db('clients').where({ id }).first(); // Busca um cliente pelo ID
  }

  static async create(name, email, phone) {
    return db('clients').insert({ name, email, phone }); // Insere um novo cliente
  }

  static async update(id, name, email, phone) {
    return db('clients').where({ id }).update({ name, email, phone }); // Atualiza um cliente
  }

  static async delete(id) {
    return db('clients').where({ id }).del(); // Deleta um cliente
  }
}

module.exports = Client;