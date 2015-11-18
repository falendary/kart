/**
 * Created by s.zhitenev on 12.11.2015.
 *
 */

import {IBaseModel} from './interfaces/IBaseModel';
import {ISerialisible} from './interfaces/ISerializable';
import {Product} from './ProductModel';

'use strict';

export class Bill implements IBaseModel, ISerialisible<Bill> {
  id: number;
  _id: string;
  _rev: string;
  billsDate: Date;
  total: number;
  fields: Array<Product>;

  deserialize(data: Bill): Bill {
    this._id = data._id;
    this._rev = data._rev;
    this.id = data.id;
    this.billsDate = data.billsDate;
    this.total = data.total;
    this.fields = data.fields;
    return this;
  }

}
