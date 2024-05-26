module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'ai_budget_db',
      user: 'postgres',
      password: 'AI_BUDGET',
    },
    migrations: {
      directory: './db/migrations',
      extension: 'ts', // Use .ts extension for TypeScript migration files
      loadExtensions: ['.ts'], // Load TypeScript migration files
    },
    seeds: {
      directory: './db/seeds',
    },
  },
  // Add configurations for test and production environments
};
