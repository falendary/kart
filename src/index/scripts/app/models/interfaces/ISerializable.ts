/**
 * Created by sergey on 19.10.15.
 */

import {IBaseModel} from './IBaseModel';

export interface ISerialisible<TEntity extends IBaseModel> {
  deserialize(data: TEntity): TEntity;
}
