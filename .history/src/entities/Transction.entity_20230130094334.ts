import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Mant
  BaseEntity,
} from "typeorm";

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
}
