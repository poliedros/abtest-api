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
import { CreateABTestDto } from './dto/create-abtest.dto';
import { GetABTestDto } from './dto/get-abtest.dto';

@Controller('abtest')
export class AbtestController {
  constructor(private readonly abTestService: AbtestService) {}

  @Post()
  async create(@Body() dto: CreateABTestDto): Promise<GetABTestDto> {
    if (!dto.name)
      throw new BadRequestException('Could not create a test without name!');

    if (!dto.sides || dto.sides.length == 0)
      throw new BadRequestException('Could not create a test without sides!');

    let sumSides = 0;
    dto.sides.forEach((side) => (sumSides += side.size));
    if (sumSides != 1)
      throw new BadRequestException(
        'The sizes of each side do not sum up 100% of the data!',
      );

    return this.abTestService.create(dto);
  }

  @Get('/:name')
  get(@Param() params) {
    return this.abTestService.get(params.name);
  }

  @Get()
  getAll() {
    return this.abTestService.getAll();
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
