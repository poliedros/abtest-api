export class GetAbTestDto {
  name: string;
  split_strategy: string;
  running: boolean;
  client: string;
  events: string[];
  sides: string[];
}
