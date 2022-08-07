import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { AbtestService } from './abtest.service';
import { CreateAbTestDto } from './dto/create-abtest.dto';
import { GetAbTestDto } from './dto/get-abtest.dto';

@Controller('abtest')
export class AbtestController {
  constructor(private readonly abTestService: AbtestService) {}

  @Post()
  async create(@Body() dto: CreateAbTestDto): Promise<GetAbTestDto> {
    if (!dto.name)
      throw new BadRequestException('Could not create a test without name!');

    if (!dto.sides || dto.sides == [])
      throw new BadRequestException('Could not create a test without sides!');

    return this.abTestService.create(dto);
  }

  @Get('/:name')
  get(@Param() params) {
    return this.abTestService.get(params.name);
  }

  @Get()
  get_all() {
    return this.abTestService.get_all();
  }

  @Delete('/:name')
  delete(@Param() params) {
    return this.abTestService.delete(params.name);
  }

  @Post('start/:name')
  start(@Param() params) {
    return this.abTestService.start(params.name);
  }

  @Post('stop/:name')
  stop(@Param() params) {
    return this.abTestService.stop(params.name);
  }
}
