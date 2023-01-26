import { DataSource } from "typeorm";

const main = async () => {

    try {
        new DataSource({
          type: "postgres",
          host: "localhost",
          port: 5432,
          username: "leroy",
          password: "password",
          database: "typeorm",
        });
        console.log('Connected to postgreql on port 5432')
    } catch (error) {
        clg
    }
    
};

main();
