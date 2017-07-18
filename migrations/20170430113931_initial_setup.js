exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', t => {
    t.bigIncrements().primary();
    t.timestamps(true, true);
    t.string('name');
    t.string('email');
    t.string('picture');
    t.string('nickname');
    t.string('user_id').notNullable().unique().index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
