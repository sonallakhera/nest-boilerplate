import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { AppConfigService } from './configurations/app-config/app-config.service';

import { name, version, description } from '../package.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // App Config
  const appConfig: AppConfigService = app.get(AppConfigService);

  if (appConfig.swaggerAllowed) {
    // Swagger
    const config = new DocumentBuilder()
      .setTitle(name)
      .setDescription(description)
      .setVersion(version)
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document);
  }

  await app.listen(3000);
}

bootstrap();
