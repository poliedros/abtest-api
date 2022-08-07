import { ABEvent } from './abevent.entity';
import { ABSide } from './abside.entity';

export class ABTest {
  id: number;
  name: string;
  client: string;
  split_strategy: string;
  running: boolean;
  sides: ABSide[];
  events: ABEvent[];
}
