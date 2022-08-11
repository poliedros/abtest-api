import { ABEventDto } from './abevent.dto';
import { ABSideDto } from './abside.dto';

export class ABTestDto {
  name: string;
  client: string;
  split_strategy: string;
  running: boolean;
  events: ABEventDto[];
  sides: ABSideDto[];
}
