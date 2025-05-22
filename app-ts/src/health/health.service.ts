import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  checkHealthz(): string {
    console.log("Chequei a saúde da aplicação")
    return 'checkHealthz: OK!';
  }

  checkReadyz(): string {
    console.log('Chequei a prontidão da aplicação')
    return 'checkReadyz: OK!';
  }
}
