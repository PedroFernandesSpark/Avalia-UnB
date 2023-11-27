import { ApiProperty } from '@nestjs/swagger';
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
      description: 'CIC',
      required: true,
    })
    departamento: string;

    @ApiProperty({
      example: 'professor',
      description: 'CIC',
      required: true,
    })
    professor: string;

    @ApiProperty({
      example: 'professor',
      description: 'Ladera',
      required: false,
    })
    materia: number | Materia;
}