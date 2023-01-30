import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { Person } from "../utils/Person";
import { Transaction } from "./Transaction.entity";
import { TRansaction } from '../../.history/src/entities/Transction.entity_20230126144038';

// entity decorator
@Entity("client")
export class Client extends Person {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({
    type: "numeric",
  })
  balance: number;

  @Column({
    default: true,
  })
  is_active: boolean;
  @Column({
    type: "simple-json",
    nullable: true,
  })
  additional_info: {
    hair_color: string;
    age: number;
    height: number;
  };
  @Column({
    type: "simple-array",
    default: [],
  })
  family_members: string[];

  @OneToMany(
    () => Transaction,
    transaction => transaction.client,
  )

  @JoinColumn({
    name: "transaction_id"
  })
  transaction: TRansaction
}
