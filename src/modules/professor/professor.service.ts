import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Professor } from './entities/professor.entity';
import { ProfessorMateria } from './entities/professor-materia.entity';
import { Materia } from '../materia/entities/materia.entity';

@Injectable()
export class ProfessorService {
  constructor(
    @InjectRepository(Professor)
    private repo: Repository<Professor>,
    @InjectRepository(Materia)
    private repoMateria: Repository<Materia>,
    @InjectRepository(ProfessorMateria)
    private repoMateriaProfessor: Repository<ProfessorMateria>
  ){}
  async create(createAvaliacaoMateriaDto: CreateProfessorDto) {
    let professor = null;
    try {
      professor = await this.repo.save(new Professor(createAvaliacaoMateriaDto));
      await Promise.all(createAvaliacaoMateriaDto.materia.map(async (materia) => {
          const dbMateria = await this.repoMateria.findOneOrFail({ id: materia });
          const relation = new ProfessorMateria();
          relation.materia = dbMateria;
          relation.professor = professor;
          await this.repoMateriaProfessor.save(relation);
        }
        ));
      return await this.repo.findOneOrFail(professor.id);
    } catch (error) {
      // if (professor) {
      //   await this.repo.delete(professor);
      // }
      throw error;
    }
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    try {
      return this.repo.createQueryBuilder('professor')
      .leftJoinAndSelect('professor.materia', 'materiaProf')
      .leftJoinAndSelect('materiaProf.materia', 'materia')
      .where('professor.id = :id',{id:id})
      .getOneOrFail();
    } catch(error){
      throw new NotFoundException(error.message);
    }
  }

  async update(id: number, updateAvaliacaoMateriaDto: UpdateProfessorDto) {
    try {
      const save = await this.repo.findOneOrFail({id: id});
      Object.assign(save, updateAvaliacaoMateriaDto);
      return await this.repo.update(id, save);
    } catch(error){
      throw new NotFoundException(error.message);
    }
  }

  async remove(id: number) {
    try{
      const deleteObj = await this.repo.findOneOrFail({id: id});
      return await this.repo.remove(deleteObj);
    } catch(error){
      throw new NotFoundException(error.message);
    }
  }
}

