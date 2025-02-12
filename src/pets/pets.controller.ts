import { Controller, Get } from '@nestjs/common';

@Controller('pets')
export class PetsController {

    @Get()
    findAll(): string {
      return 'This action returns all pets';
    }
}
