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

    return this.abTestService.createABTest(dto);
  }

  @Get('/:name')
  get(@Param() params) {
    return this.abTestService.getABTest(params.name);
  }

  @Get()
  get_all() {
    return this.abTestService.getAllABTests();
  }

  @Delete('/:name')
  delete(@Param() params) {
    return this.abTestService.deleteABTest(params.name);
  }

  @Post('start/:name')
  start(@Param() params) {
    return this.abTestService.startABTest(params.name);
  }

  @Post('stop/:name')
  stop(@Param() params) {
    return this.abTestService.stopABTest(params.name);
  }
}
