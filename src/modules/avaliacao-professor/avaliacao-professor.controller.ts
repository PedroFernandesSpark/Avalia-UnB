import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvaliacaoProfessorService } from './avaliacao-professor.service';
import { CreateAvaliacaoProfessorDto } from './dto/create-avaliacao-professor.dto';
import { UpdateAvaliacaoProfessorDto } from './dto/update-avaliacao-professor.dto';

@Controller('avaliacao-professor')
export class AvaliacaoProfessorController {
  constructor(private readonly avaliacaoProfessorService: AvaliacaoProfessorService) {}

  @Post()
  create(@Body() createAvaliacaoProfessorDto: CreateAvaliacaoProfessorDto) {
    return this.avaliacaoProfessorService.create(createAvaliacaoProfessorDto);
  }

  @Get()
  findAll() {
    return this.avaliacaoProfessorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avaliacaoProfessorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvaliacaoProfessorDto: UpdateAvaliacaoProfessorDto) {
    return this.avaliacaoProfessorService.update(+id, updateAvaliacaoProfessorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avaliacaoProfessorService.remove(+id);
  }
}
