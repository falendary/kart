/**
 * Created by s.zhitenev on 16.11.2015.
 *
 */

import {IBaseModel} from './interfaces/IBaseModel';
import {ISerialisible} from './interfaces/ISerializable';
import {Product} from './ProductModel';

export class Response implements IBaseModel, ISerialisible<Response> {
  id: string;
  _id: string;
  _rev: string;
  ok: string;
  error: string;

  deserialize(data: Response): Response {
    this.id = data.id;
    this._id = data._id;
    this._rev = data._rev;
    this.ok = data.ok;
    this.error = data.error;

    return this;
  }
}
