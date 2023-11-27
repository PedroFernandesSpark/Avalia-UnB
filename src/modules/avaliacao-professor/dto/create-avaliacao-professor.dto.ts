import { ApiProperty } from '@nestjs/swagger';
import { Professor } from 'src/modules/professor/entities/professor.entity';
import { User } from 'src/modules/user/entities/user.entity';
export class CreateAvaliacaoProfessorDto {
    @ApiProperty({
      example: 'chato',
      description: 'comentario',
      required: true,
    })
    comentario: string;
  
    @ApiProperty({
      example: 2,
      description: 'formacao',
      required: true,
    })
    formacao: Number;

    @ApiProperty({
      description: 'metodologia',
      example: 2,
      required: true,
    })
    metodologia: Number;

    @ApiProperty({
      description: 'materialEnsino',
      example: 2,
      required: true,
    })
    materialEnsino: Number;

    @ApiProperty({
      description: 'exigencia',
      example: 2,
      required: true,
    })
    exigencia: Number;

    @ApiProperty({
      description: 'disponibilidade',
      example: 2,
      required: true,
    })
    disponibilidade: Number;

    @ApiProperty({
      description: 'avaliacoes',
      example: 2,
      required: true,
    })
    avaliacoes: Number;

    @ApiProperty({
      description: 'user',
      example: 2,
      required: true,
    })
    user: Number | User;

    @ApiProperty({
      description: 'professor',
      example: 2,
      required: true,
    })
    professor: number | Professor;
}