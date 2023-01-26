import { Entity, Column, PrimaryColumn, UpdateDateColumn, CreateDateColumn, BaseEntity } from 'typeorm';



@Entity("banker")
export class Banker extends BaseEntity {
  @PrimaryColumn({
    type: "uuid",
  })
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    unique: true,
    length: 10,
  })
  card_number: string;
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