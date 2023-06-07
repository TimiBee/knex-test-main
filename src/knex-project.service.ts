// tslint:disable: variable-name
import { Injectable, Inject, Logger } from '@nestjs/common';
import { KNEX_PROJECT_OPTIONS} from './constants';
import { KnexProjectOptions } from './interfaces';


const Knex = require('knex');

/**
 * Sample interface for KnexProjectService
 *
 * Customize this as needed to describe the KnexProjectService
 *
 */
interface IKnexProjectService {
  test(): Promise<any>;
}

@Injectable()
/**
 *  You can remove the dependencies on the Logger if you don't need it.  You can also
 *  remove the `async test()` method.
 *
 *  The only thing you need to leave intact is the `@Inject(KNEX_PROJECT_OPTIONS) private _knex-projectOptions`.
 *
 *  That injected dependency gives you access to the options passed in to
 *  KnexProjectService.
 *
 */
export class KnexProjectService implements IKnexProjectService {
  private readonly logger: Logger;
  private _knex_project_connection: any;
  constructor(
    @Inject(KNEX_PROJECT_OPTIONS) private _KnexProjectOptions: KnexProjectOptions,
  ) {
    this.logger = new Logger('KnexProjectService');
    this.logger.log(`Options: ${JSON.stringify(this._KnexProjectOptions)}`);
  }
  getKnex() {
    if (!this._knex_project_connection) {
      this._knex_project_connection = new Knex(this._KnexProjectOptions);
    }
    return this._knex_project_connection;
  }
  async test(): Promise<any> {
    return 'Hello from KnexProjectModule!';
  }
}