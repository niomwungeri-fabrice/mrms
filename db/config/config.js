const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false
  },
  test: {
    username: process.env.POSTGRES_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false
  },
  production: {
    use_env_variable: "DATABASE_URL"
  },
  staging: {
    use_env_variable: "DATABASE_URL"
  }
};
