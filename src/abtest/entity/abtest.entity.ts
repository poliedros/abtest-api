import { ABEvent } from './entity/abevent.entity';
import { ABSide } from './entity/abside.entity';

export class ABTest {
    abTestId: number;
    name: string;
    client: string;
    split_strategy: string;
    running: boolean;
    sides: ABSide[];
    events: ABEvent[];
  }
  