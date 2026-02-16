require("dotenv").config();

module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "ecomdb",
    "host": "localhost",
    "dialect": process.env.DB_DIALECT || "mysql",
    "port": process.env.DB_PORT || 3306,
    "jwtSecret": "secret",
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
  },
  "production": {
    // For production, use CONNECTION_URL environment variable
    // Sequelize will parse it automatically
    "use_env_variable": "CONNECTION_URL",
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    },
    "logging": false
  },
};
