import { createConnection } from "typeorm";

const main = async () => {
  try {
     createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "leroy",
      password: "password",
      database: "typeorm",
    });
    console.log("Connected to postgreql on port 5432");
  } catch (error) {
    console.error(`Could not connect to psql due to ${error}`);
  }
};

main();
