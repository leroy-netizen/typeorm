import { Entity, BaseEntity, Column } from 'typeorm';


class Client extends BaseEntity{

    // entity decorator
    @Entity('client')


    @Column()
    first_name: string,


}