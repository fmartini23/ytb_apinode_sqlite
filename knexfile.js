module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './src/database/db.sqlite', // Caminho para o arquivo do banco de dados
      },
      migrations: {
        directory: './migrations', // Pasta para armazenar as migrações
      },
      useNullAsDefault: true, // Necessário para SQLite
    },
  };