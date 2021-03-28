import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  pic: string;

  @Column({ type: 'float' })
  price: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
