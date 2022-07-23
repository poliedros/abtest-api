import { Controller, Get } from '@nestjs/common';

@Controller('abtest')
export class AbtestController {
    @Get()
    get(){
        return [];
    }
}
