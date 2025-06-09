import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle(`Api Test`)
    .setDescription(`Services`)
    .setVersion('1.0')
    .addTag('Services Test')
    .build();

  const documentFactory = SwaggerModule.createDocument(app, config, {
    include: [],
  });
  
  SwaggerModule.setup('docs', app, documentFactory);

  app.enableVersioning({
    type: VersioningType.URI
  })
  
  await app.listen(3000);
}
bootstrap();
