import { ApiProperty } from '@nestjs/swagger';
export class LoginDto {
    @ApiProperty({
      description: 'email',
      required: true,
    })
    email: string;
  
    @ApiProperty({
      description: 'Senha de acesso',
      required: true,
    })
    senha: string;
}