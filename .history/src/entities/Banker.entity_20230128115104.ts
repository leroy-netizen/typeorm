import { Person, PrimaryGeneratedColumn } from "../utils/Person";
import {
  Entity,
  Column,
} from "typeorm";

@Entity("banker")
export class Banker extends Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employee_number: string;
}
