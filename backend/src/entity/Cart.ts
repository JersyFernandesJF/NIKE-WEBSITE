import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { User } from "./User";
import { Color } from "./Color";
import { Size } from "./Size";
import { Product } from "./Product";

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "id_product", referencedColumnName: "id" })
  product: number;

  @OneToOne(() => User)
  @JoinColumn({ name: "id_user", referencedColumnName: "id" })
  user: number;

  @OneToOne(() => Size)
  @JoinColumn({ name: "id_size", referencedColumnName: "id" })
  size: number;

  @OneToOne(() => Color)
  @JoinColumn({ name: "id_color", referencedColumnName: "id" })
  color: number;
}
