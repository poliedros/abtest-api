import { ABEventDto } from './abevent.dto';
import { ABSideDto } from './abside.dto';

export class GetABTestDto {
  name: string;
  client: string;
  split_strategy: string;
  running: boolean;
  sides: ABSideDto[];
  events: ABEventDto[];
}
