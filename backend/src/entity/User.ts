import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ type: "bytea" })
  password: Buffer;

  @Column()
  role: string;

  @Column({ unique: true, default: "User" })
  firstName: string;

  @Column()
  lastName: string;

  @Column("json", { nullable: true })
  address: Record<string, any>[];

  @Column()
  dateOfBirth: string;

  @Column()
  salt: Buffer;

  @Column({ default: "" })
  resetPasswordToken: string;
}
