import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from '../interfaces/cat.interface';
import { CreateCatDTO } from 'src/dto/create-cat.dto';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  create(@Body() catToCreate: CreateCatDTO): Cat {
    const response: Cat = this.catService.create(catToCreate);

    return response;
  }

  @Get()
  findAll(): Cat[] {
    const response: Cat[] = this.catService.findAll();

    return response;
  }
}
