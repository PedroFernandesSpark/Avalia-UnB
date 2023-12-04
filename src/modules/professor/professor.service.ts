import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Professor } from './entities/professor.entity';

@Injectable()
export class ProfessorService {
  constructor(
    @InjectRepository(Professor)
    private repo: Repository<Professor>
  ){}
  async create(createAvaliacaoMateriaDto: CreateProfessorDto) {
    return await this.repo.save(new Professor(createAvaliacaoMateriaDto));
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

