import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Materia } from './entities/materia.entity';

@Injectable()
export class MateriaService {
  constructor(
    @InjectRepository(Materia)
    private repo: Repository<Materia>
  ){}
  async create(createAvaliacaoMateriaDto: CreateMateriaDto) {
    return await this.repo.save(new Materia(createAvaliacaoMateriaDto));
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

  async update(id: number, updateAvaliacaoMateriaDto: UpdateMateriaDto) {
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

