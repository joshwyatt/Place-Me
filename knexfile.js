"sue strict";

module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/place_me_dev"
  },
  test: {
    client: "postgresql",
    connection: {
      database: "place_me_test",
      user: "postgres",
      host: "postgres"
    }
  },
  production: {
    client: "postgresql",
    connection: {
      database: "place_me_test",
      user: "postgres",
      host: "postgres"
    }
  }
};
