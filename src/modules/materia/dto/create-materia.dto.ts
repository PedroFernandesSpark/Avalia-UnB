import { ApiProperty } from '@nestjs/swagger';
import { Professor } from 'src/modules/professor/entities/professor.entity';
export class CreateMateriaDto {
    @ApiProperty({
      example: 'SI',
      description: 'nome',
      required: true,
    })
    nome: string;

    @ApiProperty({
      example: 'chato',
      description: 'CIC',
      required: true,
    })
    departamento: string;

    @ApiProperty({
      example: 'professor',
      description: 'Ladera',
      required: false,
    })
    professor: number | Professor;
}