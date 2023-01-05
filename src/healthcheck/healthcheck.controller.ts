import { Controller, Get } from '@nestjs/common';
import { HealthCheckResponseDTO } from './dto/healthcheck.response.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('healthcheck')
export class HealthcheckController {

  @Get()
  @ApiTags('healthcheck')
  @ApiResponse({
    status: 200,
    type: HealthCheckResponseDTO,
  })
  public getHealthCheck(): HealthCheckResponseDTO {
    return { message: 'API working properly!' }
  }
}
