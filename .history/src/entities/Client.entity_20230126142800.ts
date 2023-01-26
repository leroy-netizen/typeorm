import { Entity, Column, PrimaryColumn } from "typeorm";
import { Person } from "../Person";

// entity decorator
@Entity("client")
export class Client extends Person {
  @PrimaryColumn({
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
