import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Size {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  label: string;

  @Column({ unique: true })
  value: string;
}
