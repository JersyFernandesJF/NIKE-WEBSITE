import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Min, Max } from "class-validator";
import { Product } from "./Product";
import { User } from "./User";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "id_product", referencedColumnName: "id" })
  product: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: "id_user", referencedColumnName: "id" })
  user: number;

  @Column()
  @Min(1)
  @Max(5)
  rating: number;

  @Column()
  message: string;
}
