import { UserDto } from '../dto/user.dto';
import { User } from '../entity/user.entity';

export interface IUserService {
  getUsers(): UserDto[];

  getSide(id: number): User;

  changeSide(id: number, newSide: string): User;
}
