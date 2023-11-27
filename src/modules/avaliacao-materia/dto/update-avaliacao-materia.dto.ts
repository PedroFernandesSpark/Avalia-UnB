import { PartialType } from '@nestjs/mapped-types';
import { CreateAvaliacaoMateriaDto } from './create-avaliacao-materia.dto';

export class UpdateAvaliacaoMateriaDto extends CreateAvaliacaoMateriaDto {
  public id: Number;
}
