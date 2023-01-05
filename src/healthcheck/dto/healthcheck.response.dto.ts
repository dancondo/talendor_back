import { ApiProperty } from "@nestjs/swagger";

export class HealthCheckResponseDTO {
  @ApiProperty()
  readonly message: string
}