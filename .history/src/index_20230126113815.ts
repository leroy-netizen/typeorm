import { D } from 'typeorm'


const main = async () => {
    const connection = await createConnection({
        type: 'postgres',
        host: "localhost",
        port: 5432,
        username: "leroy",
        password: "password",
        database: "typeorm"
    })

}

main()