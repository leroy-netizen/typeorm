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
        console.lo
    } catch (error) {
        
    }
    
};

main();
