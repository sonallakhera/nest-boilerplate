import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppConfigService } from './app-config.service';
import Config from './app-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [Config],
      validationSchema: Joi.object({
        APP_NAME: Joi.string().default('MyApp'),
        APP_PORT: Joi.number().default(3333).valid(3333, 3131, 3000),
        NODE_ENV: Joi.string()
          .default('development')
          .valid('development', 'test', 'production', 'local'),
        SWAGGER_ALLOWED: Joi.boolean().required(),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
