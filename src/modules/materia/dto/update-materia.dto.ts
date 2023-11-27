import { PartialType } from '@nestjs/mapped-types';
import { CreateMateriaDto } from './create-materia.dto';

export class UpdateMateriaDto extends CreateMateriaDto {
  public id: Number;
}
