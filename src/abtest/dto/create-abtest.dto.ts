import { ABSideDto } from './abside.dto';

export class CreateABTestDto {
  name: string;
  client: string;
  split_strategy: string;
  sides: ABSideDto[];
}
