// migrations/{timestamp}_create_reserve_table.js
exports.up = function(knex) {
    return knex.schema.createTable('reserve', function(table) {
      table.uuid('id').primary();
      table.uuid('student_id').references('id').inTable('users');
      table.uuid('hall_id').references('hall_id').inTable('halls');
      table.uuid('room_id').references('room_id').inTable('rooms');
      table.integer('bed_space');
      table.timestamp('reserved_at').defaultTo(knex.fn.now());
      table.timestamp('expire_at');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('reserve');
  };