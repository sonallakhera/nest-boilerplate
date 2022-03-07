import { Module } from '@nestjs/common';

import { Logger } from './logger.service';

@Module({
  imports: [],
  controllers: [],
  providers: [Logger],
})
export class LoggerModule {}
