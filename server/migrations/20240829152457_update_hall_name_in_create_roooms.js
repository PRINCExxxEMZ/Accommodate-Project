exports.up = function(knex) {
    return knex.schema.alterTable('rooms', function(table) {
        table.string('hall_name'); // Add the new hall_name column
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable('rooms', function(table) {
        table.dropColumn('hall_name'); // Remove the hall_name column if rolling back
    });
};
