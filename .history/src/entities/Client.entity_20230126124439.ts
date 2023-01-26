import { Entity, BaseEntity, Column } from 'typeorm';


class Client extends BaseEntity{

    // entity decorator
    @Entity('client')


    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column({
        unique: true
    })
    email: string

    @Column({
        unique: true,
        length: 10
    })
    card_number: string

    @Column({
        type: "numeric"
    })
    balance: number

    @Column({
        default: true
    })
    is_active: boolean
    @Column()
    additional_info: {
            hair_color: string,
        age: number
    }
}