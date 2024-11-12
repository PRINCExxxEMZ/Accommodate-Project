// migrations/{timestamp}_create_rooms_table.js
exports.up = function(knex) {
    return knex.schema.createTable('rooms', function(table) {
      table.uuid('room_id').primary();
      table.string('room_number');
      table.uuid('hall_id').references('hall_id').inTable('halls');
      table.integer('bunk_capacity');
      table.integer('bed_space');
      table.integer('booked_spaces');
      table.integer('price');
      table.string('room_image');
      table.string('hall_name');
      table.boolean('is_available').defaultTo(true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('rooms');
  };