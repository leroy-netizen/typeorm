import { createConnection } from 'typeorm'


const main = async () => {
    const connection = await createConnection({
        type: 'postgres',
        
    })
}