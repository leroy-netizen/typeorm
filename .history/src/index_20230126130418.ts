import { createConnection } from "typeorm";
import { Client } from "./entities/Client.entity";

const main = async () => {
  try {
    createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "leroy",
      password: "password",
      database: "typeorm",
      entities: [Client],
      synchronize: true,
    });
    console.log("Connected to postgreql on port 5432");
  } catch (error) {
    console.error(error);
    throw new Error("Connecting to database failed");
  }
};

main();
