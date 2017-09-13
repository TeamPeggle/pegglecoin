module.exports = {
  migrations_directory: "./migrations",
  networks: {
    main: {
      host: "localhost",
      port: 8545,
      network_id: 1
    },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
