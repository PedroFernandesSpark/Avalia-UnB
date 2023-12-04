import { Module } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { ProfessorController } from './professor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Professor } from './entities/professor.entity';
import { ProfessorMateria } from './entities/professor-materia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Professor, ProfessorMateria])],
  controllers: [ProfessorController],
  providers: [ProfessorService]
})
export class ProfessorModule {}
