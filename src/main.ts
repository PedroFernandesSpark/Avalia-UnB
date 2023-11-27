import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { TrimPipe } from './common/trim.pipe';
import { useContainer } from 'class-validator';
import { ContextInterceptor } from './common/context.interceptor';
import { middleware } from './app.middleware';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule, {
    logger: ['error', 'warn'],
  });

  app.setGlobalPrefix(`/v1`);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  app.useGlobalPipes(
    new TrimPipe(),
    new ValidationPipe({
      transform: false,
      forbidUnknownValues: false,
      validationError: { target: false },
    }),
  );
  useContainer(app.select(ApplicationModule), { fallbackOnErrors: true });
  app.useGlobalInterceptors(new ContextInterceptor());
  middleware(app);

  const port = Number(process.env.PORT_NUMBER) || 3000;

  await app.listen(port, '0.0.0.0');
  console.log(`URL: ${await app.getUrl()}/docs`);
}
bootstrap();
