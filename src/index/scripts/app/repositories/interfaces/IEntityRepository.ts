/**
 * Created by s.zhitenev on 12.11.2015.
 *
 */

/// <reference path="../../../../../../typings/tsd.d.ts" />

import {IBaseModel} from '../../models/interfaces/IBaseModel';
import {IRepository} from './IRepository';

export interface IEntityRepository<TEntity extends IBaseModel> extends IRepository<number, TEntity> {
  getList(key1?: number | string, key2?: number | string): Promise<Array<TEntity>>;
  getByKey(key: number | string): Promise<TEntity>;
  add(entity: TEntity): Promise<any>;
  update(key: number | string, entity: TEntity): Promise<any>;
  delete(key: number | string): Promise<any>;
}

