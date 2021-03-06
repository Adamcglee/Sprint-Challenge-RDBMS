exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(tbl) {
    tbl.increments("id");
    tbl.string("description");
    tbl.string("notes");
    tbl.boolean("completed").defaultTo(false);
    tbl
      .integer("project_id")
      .notNullable()
      .references("id")
      .inTable("projects");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("actions", function(tbl) {
    tbl.dropColumn("actions");
  });
};
