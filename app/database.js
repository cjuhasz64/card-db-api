import knex from 'knex';

export class Database {
  knex = knex({
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'card_db',
      port: '3306',
    }
  });
}

export default new Database();
