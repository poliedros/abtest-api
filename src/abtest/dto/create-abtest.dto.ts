export class CreateAbTestDto {
  name: string;
  split_strategy: string;
  client: string;
  sides: string[];
}
