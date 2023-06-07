/**
 *  If you're building a standalone npm package hosting a dynamic module, you
 *  should delete this file.  Its only purpose is to bootstrap the app so that
 *  you can run the quick verification test (see knex-project-client/knex-project-client.module.ts)
 */
import { NestFactory } from '@nestjs/core';
import { KnexProjectClientModule } from './knex-project-client/knex-project-client.module';

async function bootstrap() {
  const app = await NestFactory.create(KnexProjectClientModule);
  await app.listen(3000);
}
bootstrap();
