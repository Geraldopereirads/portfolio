import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Projects Portfólio Geraldo Pereira")
    .setDescription("Explore meu portfólio online, onde compartilho minha jornada profissional e apresento meus melhores projetos, competências e as tecnologias que domino")
    .setVersion("1.0")
    .build()


  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api", app, document)
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true })
  )
  await app.listen(3000);
}
bootstrap();

