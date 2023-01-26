import {
  Entity,
  BaseEntity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

// entity decorator
@Entity("client")
export class Client extends Perso {
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
