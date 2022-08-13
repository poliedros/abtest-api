import { ABTestDto } from '../dto/abtest.dto';
import { CreateABTestDto } from '../dto/create-abtest.dto';
import { GetABTestDto } from '../dto/get-abtest.dto';

export interface IABTestService {
  // Persist the AB Test config
  create(dto: CreateABTestDto): ABTestDto;
  // Get one AB Test config
  get(name: string): GetABTestDto;
  //Get all AB Tests created
  getAll(): GetABTestDto[];
  // Delete an existing AB Test
  delete(name: string): GetABTestDto[];
  // Start the AB Test and split users
  start(name: string): ABTestDto;
  // Stop the AB Test
  stop(name: string): ABTestDto;
}
