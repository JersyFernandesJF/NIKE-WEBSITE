import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
  ManyToOne,
} from "typeorm";
import { Product } from "./Product";
import { User } from "./User";
import { Size } from "./Size";
import { Color } from "./Color";

@Entity()
export class Favourite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @OneToOne(() => Product)
  @JoinColumn({ name: "id_product", referencedColumnName: "id" })
  product: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: "id_user", referencedColumnName: "id" })
  user: number;

  @OneToOne(() => Size)
  @JoinColumn({ name: "id_size", referencedColumnName: "id" })
  size: number;

  @OneToOne(() => Color)
  @JoinColumn({ name: "id_color", referencedColumnName: "id" })
  color: number;
}
