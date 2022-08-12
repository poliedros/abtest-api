import { ABTestDto } from '../dto/abtest.dto';
import { UserDto } from '../dto/user.dto';

export interface IStrategy {
  splitUsers(users: UserDto[], test: ABTestDto): UserDto[];

  checkSides(users: UserDto[], test: ABTestDto): boolean;
}
