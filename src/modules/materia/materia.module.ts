import { Module } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { MateriaController } from './materia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Materia } from './entities/materia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Materia])],
  controllers: [MateriaController],
  providers: [MateriaService]
})
export class MateriaModule {}
