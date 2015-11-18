/**
 * Created by s.zhitenev on 12.11.2015.
 *
 */

/// <reference path="../../../../../../typings/tsd.d.ts" />

export interface IRepository<TKey, TEntity> {
  getList(key1?: TKey, key2?: TKey): Promise<Array<TEntity>>;
  getByKey(key: TKey): Promise<TEntity>;
  add(entity: TEntity): Promise<TEntity>;
  update(key: TKey, entity: TEntity): Promise<TEntity>;
  delete(key: TKey): Promise<TEntity>;
}
