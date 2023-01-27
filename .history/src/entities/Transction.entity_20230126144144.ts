import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';

@Entity('transaction')


export class Transaction extends BaseEntity{

    @PrimaryGeneratedColumn()
        id: number

    @Column() 
    
    }
}