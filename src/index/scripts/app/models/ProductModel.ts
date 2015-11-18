/**
 * Created by sergey on 01.11.15.
 */

import {IBaseModel} from './interfaces/IBaseModel';
import {ISerialisible} from './interfaces/ISerializable';
import {Category} from './CategoryModel';

export class Product implements IBaseModel, ISerialisible<Product> {
  _id: string;
  _rev: string;
  id: number;
  productName: string;
  category: Category;
  total: number;
  price: number;
  quantity: number;

  deserialize(data: Product): Product {
    this._id = data._id;
    this._rev = data._rev;
    this.id = data.id;
    this.productName = data.productName;
    this.category = data.category;
    this.price = data.price;
    this.quantity = data.quantity;
    this.total = data.total;

    return this;
  }

}
