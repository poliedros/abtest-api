import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ABEvent {
  @PrimaryGeneratedColumn()
  abEventId: number;

  @Column()
  date: Date;
  event: string;
  abTestId: any;
}
