import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Color {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  class: string;

  @Column({ unique: true })
  selectedClass: string;
}
