import { ApiProperty } from '@nestjs/swagger';

export class DomainDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}
