import {
  Entity,
  Column,
  PrimaryColumn,
  UpdateDateColumn,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity("banker")
export class Banker extends BaseEntity {
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
