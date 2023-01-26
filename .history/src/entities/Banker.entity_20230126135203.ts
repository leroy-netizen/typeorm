import { Person } from "src/commons/Person.comons";
import {
  Entity,
  Column,
} from "typeorm";

@Entity("banker")
export class Banker extends Person {
 
  @Column()
  employee_number: string;


}
