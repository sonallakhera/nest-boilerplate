import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AwsConfigService {
  constructor(private readonly _config: ConfigService) {}

  get region(): string {
    return this._config.get<string>('aws.region');
  }
}
