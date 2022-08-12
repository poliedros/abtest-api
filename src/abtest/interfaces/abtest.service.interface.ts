import { ABTestDto } from '../dto/abtest.dto';
import { CreateABTestDto } from '../dto/create-abtest.dto';
import { GetABTestDto } from '../dto/get-abtest.dto';

export interface IABTestService {
  create(dto: CreateABTestDto): ABTestDto; // Persist the AB Test Config

  get(name: string): GetABTestDto; // Get one AB Test Config

  getAll(): GetABTestDto[]; //Get all AB Tests created

  delete(name: string): GetABTestDto[];

  start(name: string): ABTestDto;

  stop(name: string): ABTestDto;
}
