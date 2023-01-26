import { Person } from "src/commons/Person.comons";
import {
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity("banker")
export class Banker extends Person {
  @PrimaryColumn({
    type: "uuid",
  })
  id: string;
  
  employee_number: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
