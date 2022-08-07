import { ABSideDto } from "./abside.dto";

export class CreateABTestDto {
  name: string;
  split_strategy: string;
  client: string;
  sides: ABSideDto[];
}
