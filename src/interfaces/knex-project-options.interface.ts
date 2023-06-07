// tslint:disable: no-empty-interface
import {  Knex } from 'knex';


export interface KnexProjectOptions extends Knex.Config{


  //
  // This interface describes the options you want to pass to
  // KnexProjectModule.
  //
  // For example, if you are wrapping a database library like MassiveJS,
  // this interface would probably contain properties like:
  //
  // user: string;
  // password: string;
  // port: number;
  // host: string;
  // database: string;

  
}

// import knex from 'knex'
// // const knex = require('knex');
// ({
//   client: 'mysql',
//   connection: {
//     host : '127.0.0.1',
//     port : 3306,
//     user : 'your_database_user',
//     password : 'your_database_password',
//     database : 'myapp_test'
//   }
// });

