/**
 *  KnexProjectClientController is a testing controller that verifies that
 *  KnexProjectModule was generated properly.
 *
 *  You can quickly verify this by running `npm run start:dev`, and then
 *  connecting to `http://localhost:3000` with your browser.  It should return
 *  a custom message like `Hello from KnexProjectModule`.
 *
 *  Once you begin customizing KnexProjectModule, you'll probably want
 *  to delete this controller.
 */
import { Controller, Get, Inject } from '@nestjs/common';
import { KNEX_PROJECT_CONNECTION } from '../constants';


@Controller()
export class KnexProjectClientController {
  // constructor(private readonly knexProjectService: KnexProjectService) {}
  constructor(@Inject(KNEX_PROJECT_CONNECTION) private readonly knex) {}

  @Get()
  async index() {
    // const knex = this.knexProjectService.getKnex();
    const newcat = await this.knex('cats').insert({
      cat_name: 'fine',
      age: 3,
      breed: 'black cat',
    });
    // const newdog = await this.knex('dogs').insert({
    //   dog_name: 'Chloe',
    //   age: 2,
    //   breed: 'pitbull',
    // });

    // const dogs = await this.knex.select('*').from('dogs');

    const cats = await this.knex.select('*').from('cats');

    return cats ;
  }
    
  
}
