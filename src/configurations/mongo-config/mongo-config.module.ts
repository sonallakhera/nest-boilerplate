import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { MongoConfigService } from './mongo-config.service';
import Config from './mongo-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [Config],
      validationSchema: Joi.object({
        MONGO_URI: Joi.string().default('mongodb://localhost:27017/test'),
      }),
    }),
  ],
  providers: [ConfigService, MongoConfigService],
  exports: [ConfigService, MongoConfigService],
})
export class MongoConfigModule {}
