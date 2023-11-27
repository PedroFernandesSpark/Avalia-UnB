import { ApiProperty } from '@nestjs/swagger';
import { Materia } from 'src/modules/materia/entities/materia.entity';
import { User } from 'src/modules/user/entities/user.entity';
export class CreateAvaliacaoMateriaDto {
    @ApiProperty({
      example: 'chato',
      description: 'comentario',
      required: true,
    })
    comentario: string;
  
    @ApiProperty({
      example: 2,
      description: 'dificuldade',
      required: true,
    })
    dificuldade: Number;

    @ApiProperty({
      description: 'ambiente',
      example: 2,
      required: true,
    })
    ambiente: Number;

    @ApiProperty({
      description: 'exigencia',
      example: 2,
      required: true,
    })
    exigencia: Number;

    @ApiProperty({
      description: 'organizacao',
      example: 2,
      required: true,
    })
    organizacao: Number;

    @ApiProperty({
      description: 'materialApoio',
      example: 2,
      required: true,
    })
    materialApoio: Number;

    @ApiProperty({
      description: 'user',
      example: 2,
      required: true,
    })
    user: Number | User;

    @ApiProperty({
      description: 'materia',
      example: 2,
      required: true,
    })
    materia: number | Materia;
}