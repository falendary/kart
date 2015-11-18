/**
 * Created by s.zhitenev on 12.11.2015.
 *
 */

import {InitDatabaseRepository} from '../repositories/InitDatabaseRepository';

export class DatabaseService {

  public cordovaSQlite: Ionic.SQLite;
  public initDatabaseRepository: InitDatabaseRepository = new InitDatabaseRepository();
  public db: any = null;

  constructor($cordovaSQlite: Ionic.SQLite) {

    this.cordovaSQlite = $cordovaSQlite;
  }

}
