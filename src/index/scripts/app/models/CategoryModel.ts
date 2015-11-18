/**
 * Created by sergey on 19.10.15.
 */

import {IBaseModel} from './interfaces/IBaseModel';
import {ISerialisible} from './interfaces/ISerializable';
import {Product} from './ProductModel';

export class Category implements IBaseModel, ISerialisible<Category> {
  _id: string;
  _rev: string;
  id: number;
  categoryName: string;
  keyName: string;
  products: Array<Product>;

  deserialize(data: Category): Category {
    this._id = data._id;
    this._rev = data._rev;
    this.id = data.id;
    this.categoryName = data.categoryName;
    this.keyName = data.keyName;
    this.products = data.products;

    return this;
  }
}
