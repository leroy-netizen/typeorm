import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";

export enum {
    
}

@Entity("transaction")
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

    @Column({
      type: "enum"
  })
  type: string;
}