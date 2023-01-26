import { Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'


@Entity()
export class Person extends BaseEntity {
  @PrimaryColumn({
    type: "uuid",
  })
  id: string;
  @Column()
  first_name: string;

  @Column()
  last_name: string;
    @Column()
    
  @Column({
    unique: true,
  })
  email: string;

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