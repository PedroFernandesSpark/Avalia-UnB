import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvaliacaoMateriaService } from './avaliacao-materia.service';
import { CreateAvaliacaoMateriaDto } from './dto/create-avaliacao-materia.dto';
import { UpdateAvaliacaoMateriaDto } from './dto/update-avaliacao-materia.dto';

@Controller('avaliacao-materia')
export class AvaliacaoMateriaController {
  constructor(private readonly avaliacaoMateriaService: AvaliacaoMateriaService) {}

  @Post()
  create(@Body() createAvaliacaoMateriaDto: CreateAvaliacaoMateriaDto) {
    return this.avaliacaoMateriaService.create(createAvaliacaoMateriaDto);
  }

  @Get()
  findAll() {
    return this.avaliacaoMateriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avaliacaoMateriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvaliacaoMateriaDto: UpdateAvaliacaoMateriaDto) {
    return this.avaliacaoMateriaService.update(+id, updateAvaliacaoMateriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avaliacaoMateriaService.remove(+id);
  }
}
