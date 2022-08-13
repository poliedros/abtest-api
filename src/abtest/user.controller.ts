import { Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:id')
  getSide(@Param() params): UserDto {
    return this.userService.getSide(params.id);
  }

  @Post('/:id/:side')
  changeSide(@Param() params): UserDto {
    return this.userService.changeSide(params.id, params.newSide);
  }
}
