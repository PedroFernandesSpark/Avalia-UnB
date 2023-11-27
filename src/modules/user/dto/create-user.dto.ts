import { ApiProperty } from '@nestjs/swagger';
import { Materia } from 'src/modules/materia/entities/materia.entity';
export class CreateUserDto {
    @ApiProperty({
      example: 'SI',
      description: 'nome',
      required: true,
    })
    nome: string;

    @ApiProperty({
      example: 'semestre',
      description: 'CIC',
      required: true,
    })
    semestre: string;

    @ApiProperty({
      example: 'curso',
      description: 'CIC',
      required: true,
    })
    curso: string;

    @ApiProperty({
      example: 'curso',
      description: 'CIC',
      required: true,
    })
    emblemas: string[];

    @ApiProperty({
      example: 'email',
      description: 'CIC',
      required: true,
    })
    email: string;

    @ApiProperty({
      example: 'senha',
      description: 'CIC',
      required: true,
    })
    senha: string;
}