import {
  Column,
  Entity,
  ManyToOne,
  BaseEntity,
  JoinColumn,
  PrimaryGeneratedColumn
} from "typeorm";

import {Client} from "./Client.entity"

export enum TransactionTypes{
    DEPOSIT = "deposit",
    WITHDRAW = "withdraw"
}

@Entity("transaction")
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

    @Column({
        type: "enum",
        enum: TransactionTypes
  })
    type: string;
    
    @Column({
        type: "numeric"
    })
    amount: number

    @ManyToOne(

      () => Client,
      client => client.transactions
    )
  
  @JoinColumn()
}
