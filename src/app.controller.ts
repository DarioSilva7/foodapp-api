import { Controller, Get } from '@nestjs/common';

import { Public } from './auth/decorators/public.decorator';

@Controller()
export class AppController {
  constructor() {}

  @Public()
  @Get('status')
  getStatus(): { status: string } {
    return { status: 'Online' };
  }
}
