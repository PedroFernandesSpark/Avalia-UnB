import { ApiProperty } from '@nestjs/swagger';
import { CreateMateriaDto } from 'src/modules/materia/dto/create-materia.dto';
import { Materia } from 'src/modules/materia/entities/materia.entity';
export class CreateProfessorDto {
    @ApiProperty({
      example: 'SI',
      description: 'nome',
      required: true,
    })
    nome: string;

    @ApiProperty({
      example: 'chato',
      description: 'departamento',
      required: true,
    })
    departamento: string;

    @ApiProperty({
      example: 'UnB',
      description: 'universidade',
      required: true,
    })
    universidade: string;

    @ApiProperty({
      example: 'VR',
      description: 'areaPesquisa',
      required: true,
    })
    areaPesquisa: string;

    @ApiProperty({
      example: 2,
      description: 'idade',
      required: true,
    })
    idade: number;

    @ApiProperty({
      example: 'professor',
      description: 'professor',
      required: true,
    })
    professor: string;

    @ApiProperty({
      description: 'materia',
      required: false,
    })
    materia: number[] | Materia[];
}