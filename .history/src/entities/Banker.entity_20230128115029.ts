import { Person } from "../utils/Person";
import {
  Entity,
  Column,
} from "typeorm";

@Entity("banker")
export class Banker extends Person {
  
  @Column()
  employee_number: string;
}
