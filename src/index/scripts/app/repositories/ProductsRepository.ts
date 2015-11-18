/**
 * Created by s.zhitenev on 12.11.2015.
 *
 */
/// <reference path="../../../../../typings/tsd.d.ts" />

import {Product} from '../models/ProductModel';
import {IEntityRepository} from '../repositories/interfaces/IEntityRepository';
import {Response} from "../models/ResponseModel";

'use strict';

export class ProductsRepository implements IEntityRepository<Product> {

  getList(): Promise<Array<Product>> {
    return undefined;
  }

  getByKey(key: number | string): Promise<Product> {
    return new Promise((resolve)=>{
      window.kart.db.get(key).then((doc: any)=> {
        resolve(new Product().deserialize(doc));
      })
    })
  }

  add(entity: Product): Promise<Response> {
    return window.kart.db.put({
      _id: 'product' + new Date().getTime(),
      productName: entity.productName,
      category: entity.category,
      type: 'product'
    }).then((response: Response) => {
      return new Response().deserialize(response);
    });

  }

  update(key: number | string, entity: Product): Promise<Product> {
    return undefined;
  }

  delete(key: number | string): Promise<Product> {
    return undefined;
  }

}
