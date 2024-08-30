// migrations/{timestamp}_create_hostel_table.js
exports.up = function(knex) {
    return knex.schema.createTable('halls', function(table) {
      table.uuid('hall_id').primary();
      table.string('name');
      table.string('gender');
      table.string('rooms');
      table.string('hall_image');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('halls');
  };
