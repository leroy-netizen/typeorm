import { DataSource } from "typeorm";

const main = async () => {
  new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "leroy",
    password: "password",
    database: "typeorm",
  });
    
};

main();
