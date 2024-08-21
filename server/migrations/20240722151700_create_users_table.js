// migrations/{timestamp}_create_students_table.js
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.uuid('id').primary();
      table.string('first_name');
      table.string('middle_name');
      table.string('last_name');
      table.string('email').unique();
      table.string('password');
      table.string('registration_number');
      table.string('role');
      table.string('department');
      table.boolean('is_disabled');
      table.string('level');
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };