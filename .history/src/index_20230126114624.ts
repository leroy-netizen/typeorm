import { create } from "typeorm";

const main = async () => {
  try {
    new DataSource({
      type: "postgres",
      host: "localhost",
      port: 5431,
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
