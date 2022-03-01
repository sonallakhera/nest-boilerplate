import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AwsConfigService } from './aws-config.service';
import Config from './aws-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [Config],
      validationSchema: Joi.object({
        AWS_REGION: Joi.string().default('ap-south-1'),
      }),
    }),
  ],
  providers: [ConfigService, AwsConfigService],
  exports: [ConfigService, AwsConfigService],
})
export class AwsConfigModule {}
