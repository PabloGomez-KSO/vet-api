import { Controller, Get } from '@nestjs/common';

@Controller('pets')
export class PetsController {
  
  @Get()
  findAll(): any[] {
    return [
      { id: 1, name: 'Fluffy', type: 'Cat' },
      { id: 2, name: 'Buddy', type: 'Dog' },
      { id: 3, name: 'Goldie', type: 'Fish' }
    ];
  }
}
