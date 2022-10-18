import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDTO {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly age: number;

  @ApiProperty()
  readonly breed: string;
}
