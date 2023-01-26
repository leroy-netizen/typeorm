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
    @Column()
        card_number: string
    
    @Column({
        unique: true,
        length: 10
    })
        employee_number: string

  @Column({
    unique: true,
    length: 10,
  })
  card_number: string;
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}