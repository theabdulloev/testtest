import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getBotToken } from 'nestjs-telegraf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const bot = app.get(getBotToken());
  app.use(bot.webhookCallback('/ismoiljonabdulloev'));
}
bootstrap();
