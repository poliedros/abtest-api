import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ABEvent } from './abevent.entity';
import { ABSide } from './abside.entity';

@Entity()
export class ABTest {
  @PrimaryGeneratedColumn()
  abTestId: number;

  @Column()
  name: string;
  client: string;
  split_strategy: string;

  @Column({ default: false })
  running: boolean;

  @OneToMany((type) => ABSide, (abSide) => abSide.abTestId)
  sides: ABSide[];

  @OneToMany((type) => ABEvent, (abEvent) => abEvent.abTestId)
  events: ABEvent[];
}
