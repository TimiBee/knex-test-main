import { Module, DynamicModule, Provider, Global } from '@nestjs/common';
import { KnexProjectService } from './knex-project.service';
import {
  KNEX_PROJECT_OPTIONS,
} from './constants';
import {
  KnexProjectOptions,
  KnexProjectAsyncOptions,
  KnexProjectOptionsFactory,
} from './interfaces';
import { createKnexProjectProviders } from './knex-project.providers';
import { connectionFactory } from './knex-project-connection.provider';

@Global()
@Module({
  providers: [KnexProjectService,connectionFactory],
  exports: [KnexProjectService,connectionFactory],
})
export class KnexProjectModule {
  /**
   * Registers a configured KnexProject Module for import into the current module
   */
  public static register(
    options: KnexProjectOptions,
  ): DynamicModule {
    return {
      module: KnexProjectModule,
      providers: createKnexProjectProviders(options),
    };
  }

  /**
   * Registers a configured KnexProject Module for import into the current modulecats
   * using dynamic options (factory, etc)
   */
  public static registerAsync(
    options: KnexProjectAsyncOptions,
  ): DynamicModule {
    return {
      module: KnexProjectModule,
      providers: [
        ...this.createProviders(options),
      ],
    };
  }

  private static createProviders(
    options: KnexProjectAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createOptionsProvider(options)];
    }

    return [
      this.createOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createOptionsProvider(
    options: KnexProjectAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: KNEX_PROJECT_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    // For useExisting...
    return {
  provide: KNEX_PROJECT_OPTIONS,
      useFactory: async (optionsFactory: KnexProjectOptionsFactory) =>
        await optionsFactory.createKnexProjectOptions(),
      inject: [options.useExisting || options.useClass],
    };
  }

 }
