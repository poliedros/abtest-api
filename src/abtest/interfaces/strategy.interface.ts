import { ABTestDto } from '../dto/abtest.dto';
import { UserDto } from '../dto/user.dto';

export interface IStrategy {
  // Sort the side for each user
  splitUsers(users: UserDto[], test: ABTestDto): UserDto[];
  // Verify if the number of users in each side correspond
  // to the proportion defined on the test
  checkSides(users: UserDto[], test: ABTestDto): boolean;
}
