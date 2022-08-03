import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ABSide {
  @PrimaryGeneratedColumn()
  abSideId: number;

  @Column()
  label: string;
  size: number;
  algorithm: string;
  abTestId: any;
}
