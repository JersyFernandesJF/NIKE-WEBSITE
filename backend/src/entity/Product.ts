import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Min, Max } from "class-validator";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  detail: string;

  @Column()
  price: number;

  @Column()
  discount: number;

  @Column({ array: true })
  sizes: number[];

  @Column("json", { nullable: true })
  colors: Record<string, any>[];

  @Column()
  category: string;

  @Column()
  gender: string;

  @Column()
  kids: string;

  @Column({ type: "integer", default: 0, nullable: false })
  @Min(0)
  stock!: number;

  @Column({ type: "integer", default: 0, nullable: true })
  @Min(0)
  @Max(5)
  rating: number;

  @Column()
  origin: string;

  @Column()
  declaration: string;

  @Column()
  marketedBy: string;

  @Column({ array: true })
  images: string[];

  @Column({ array: true })
  highlights: string[];

  @Column()
  discountPrice: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
