import { Module } from '@nestjs/common';
import { AvaliacaoProfessorService } from './avaliacao-professor.service';
import { AvaliacaoProfessorController } from './avaliacao-professor.controller';
import { AvaliacaoProfessor } from './entities/avaliacao-professor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AvaliacaoProfessor])],
  controllers: [AvaliacaoProfessorController],
  providers: [AvaliacaoProfessorService]
})
export class AvaliacaoProfessorModule {}
