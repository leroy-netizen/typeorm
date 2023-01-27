import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "../utils/Person";

// entity decorator
@Entity("client")
export class Client extends Person {
  @PrimaryGeneratedColumn({
    type: "uuid",
  })
  id: string;
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
}
