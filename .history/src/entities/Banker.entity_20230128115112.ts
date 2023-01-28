import { Person } from "../utils/Person";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("banker")
export class Banker extends Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employee_number: string;
}
