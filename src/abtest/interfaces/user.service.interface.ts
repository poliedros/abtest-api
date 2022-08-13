import { UserDto } from '../dto/user.dto';
import { User } from '../entity/user.entity';

export interface IUserService {
  // Get users from the application
  getUsers(): UserDto[];
  // Get side of a specific user
  getSide(id: number): User;
  // Change the side of a specific user
  changeSide(id: number, newSide: string): User;
}
