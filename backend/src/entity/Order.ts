import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("json", { nullable: true })
  items: Record<string, any>[];

  @Column()
  totalAmount: number;

  @Column()
  totalItems: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: "id_user", referencedColumnName: "id" })
  user: number;

  @Column()
  paymentMethod: string;

  @Column({ default: "pending" })
  paymentStatus: string;

  @Column({ default: "pending" })
  status: string;

  @Column("json", { nullable: true })
  selectedAddress: Record<string, any>[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
