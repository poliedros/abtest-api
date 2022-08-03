import { Entity, Column, PrimaryGeneratedColumn, DataSource } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  side: string;

  @Column({ default: false })
  testUser: boolean;

  @Column({ default: true })
  isActive: boolean;
  
}

