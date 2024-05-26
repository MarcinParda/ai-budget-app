import knex from 'knex';

const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'AI_BUDGET',
    database: 'ai_budget_db',
  },
});

export default db;
