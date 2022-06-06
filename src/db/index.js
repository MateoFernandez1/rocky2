const { Pool } = require("pg");

const config = {
  user: "postgresr",
  host: "localhost",
  password: "postgres",
  database: "pokemon",
  port: 5432,
};

const pool = new Pool(config);

module.exports = {
  query: (text, params) => pool.query(text, params),
};