// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true,
    debus: false
  },

  production: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      database: 'movie',
      user:     'postgres',
      password: '12345'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    },
    debug: false
  }

};
