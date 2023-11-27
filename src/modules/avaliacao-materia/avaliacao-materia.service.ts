import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAvaliacaoMateriaDto } from './dto/create-avaliacao-materia.dto';
import { UpdateAvaliacaoMateriaDto } from './dto/update-avaliacao-materia.dto';
import { AvaliacaoMateria } from './entities/avaliacao-materia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class AvaliacaoMateriaService {
  constructor(
    @InjectRepository(AvaliacaoMateria)
    private repo: Repository<AvaliacaoMateria>
  ){}
  async create(createAvaliacaoMateriaDto: CreateAvaliacaoMateriaDto) {
    return await this.repo.save(new AvaliacaoMateria(createAvaliacaoMateriaDto));
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

  async update(id: number, updateAvaliacaoMateriaDto: UpdateAvaliacaoMateriaDto) {
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
