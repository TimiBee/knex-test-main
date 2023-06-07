/**
 *  KnexProjectClientModule is a testing module that verifies that
 *  KnexProjectModule was generated properly.
 *
 *  You can quickly verify this by running `npm run start:dev`, and then
 *  connecting to `http://localhost:3000` with your browser.  It should return
 *  a custom message like `Hello from KnexProjectModule`.
 *
 *  Once you begin customizing KnexProjectModule, you'll probably want
 *  to delete this module.
 */
import { Module } from '@nestjs/common';
import { KnexProjectClientController } from './knex-project-client.controller';
import { KnexProjectModule } from '../knex-project.module';

@Module({
  controllers: [KnexProjectClientController],
  imports: [KnexProjectModule.registerAsync({
    useFactory: () => {
      return {
        debug:false,
      client: 'pg',
      connection: {
        host: 'localhost',
        user: 'admin',
        password: 'admin',
        database: 'knex',
        port: 5432,
      
      }
    }
    }

  })],
})
export class KnexProjectClientModule {}
