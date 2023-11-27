import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAvaliacaoProfessorDto } from './dto/create-avaliacao-professor.dto';
import { UpdateAvaliacaoProfessorDto } from './dto/update-avaliacao-professor.dto';
import { AvaliacaoProfessor } from './entities/avaliacao-professor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AvaliacaoProfessorService {
  constructor(
    @InjectRepository(AvaliacaoProfessor)
    private repo: Repository<AvaliacaoProfessor>
  ){}
  async create(createAvaliacaoMateriaDto: CreateAvaliacaoProfessorDto) {
    return await this.repo.save(new AvaliacaoProfessor(createAvaliacaoMateriaDto));
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    try {
      return this.repo.findOneOrFail(id);
    } catch(error){
      throw new NotFoundException(error.message);
    }
  }

  async update(id: number, updateAvaliacaoMateriaDto: UpdateAvaliacaoProfessorDto) {
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
