import { ABTestDto } from '../dto/abtest.dto';
import { CreateABTestDto } from '../dto/create-abtest.dto';
import { GetABTestDto } from '../dto/get-abtest.dto';
import { UserDto } from '../dto/user.dto';

export interface IABTestService {
  getUsers(): UserDto[];

  create(dto: CreateABTestDto): ABTestDto;

  get(name: string): GetABTestDto;

  get_all(): GetABTestDto[];

  delete(name: string): string;

  start(name: string): ABTestDto;

  stop(name: string): ABTestDto;
}
