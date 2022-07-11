import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { LevelsService } from './levels.service';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { GetLevelsDto } from './dto/get-levels.dto';

@Controller('levels')
export class LevelsController {
  constructor(private readonly levelsService: LevelsService) {}

  @Post()
  create(@Query() query: GetLevelsDto, @Body() createLevelDto: CreateLevelDto) {
    return this.levelsService.create(query, createLevelDto);
  }

  @Get()
  findAll(@Query() query: GetLevelsDto) {
    return this.levelsService.findAll(query);
  }

  @Get('total')
  getTotal() {
    return this.levelsService.getTotal();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.levelsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLevelDto: UpdateLevelDto) {
    return this.levelsService.update(id, updateLevelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.levelsService.remove(id);
  }
}
