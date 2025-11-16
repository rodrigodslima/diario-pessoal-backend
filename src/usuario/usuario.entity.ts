import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({length: 255})
  password: string;

  @Column({length: 100})
  email: string;

  @Column('int')
  views: number;

}