// migrations/{timestamp}_create_students_table.js
exports.up = function(knex) {
    return knex.schema.createTable('booked_room', function(table) {
      table.uuid('id').primary();
      table.uuid('room');
      table.string('bed_number');
      table.uuid('student_id');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('booked_room');
  };