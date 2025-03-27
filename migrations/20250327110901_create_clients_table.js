/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('clients', (table) => {
      table.increments('id').primary(); // ID autoincrementável e chave primária
      table.string('name').notNullable(); // Nome do cliente (não pode ser nulo)
      table.string('email').notNullable().unique(); // Email do cliente (único e não pode ser nulo)
      table.string('phone').notNullable(); // Telefone do cliente (não pode ser nulo)
      table.timestamps(true, true); // Cria colunas `created_at` e `updated_at`
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('clients'); // Reverte a migração (deleta a tabela)
  };