import { PartialType } from '@nestjs/mapped-types';
import { CreateAvaliacaoProfessorDto } from './create-avaliacao-professor.dto';

export class UpdateAvaliacaoProfessorDto extends CreateAvaliacaoProfessorDto {
  public id: Number;
}
