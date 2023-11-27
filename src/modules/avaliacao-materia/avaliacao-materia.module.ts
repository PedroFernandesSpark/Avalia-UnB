import { Module } from '@nestjs/common';
import { AvaliacaoMateriaService } from './avaliacao-materia.service';
import { AvaliacaoMateriaController } from './avaliacao-materia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvaliacaoMateria } from './entities/avaliacao-materia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AvaliacaoMateria])],
  controllers: [AvaliacaoMateriaController],
  providers: [AvaliacaoMateriaService]
})
export class AvaliacaoMateriaModule {}
