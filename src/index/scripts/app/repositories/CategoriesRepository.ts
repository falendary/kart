/**
 * Created by s.zhitenev on 12.11.2015.
 *
 */

/// <reference path="../../../../../typings/tsd.d.ts" />

import {DatabaseService} from '../services/DatabaseService';

import {IEntityRepository} from './interfaces/IEntityRepository';
import {Category} from '../models/CategoryModel';
import {Product} from '../models/ProductModel';
import {Response} from '../models/ResponseModel';

'use strict';

export class CategoriesRepository implements IEntityRepository<Category> {

  getList(key1?: number, key2?: number): Promise<Array<Category>> {
    let categories: Array<Category> = [];

    return new Promise((resolve)=> {

      window.kart.db.query((doc: any, emit: any) => {
        if (doc.categoryName) {
          emit(doc);
        }
      }, {
        type: 'category',
        include_docs: true
      }).then((docs: any) => {
        categories = <Array<any>>docs.rows.map((item: any) => {
          return new Category().deserialize(item.doc);
        });
        resolve(categories)
      });

    });
  }

  getByKey(key: number): Promise<Category> {
    return undefined;
  }

  add(entity: Category): Promise<Category> {
    return undefined;
  }

  update(key: number, entity: Category): Promise<Category> {
    return undefined;
  }

  delete(key: number): Promise<Category> {
    return undefined;
  }

  addProduct(key: string, entity: Product): Promise<Response> {
    return new Promise((resolve, reject)=> {
      return window.kart.db.get(key).then((doc: Category)=> {
        if (!doc.products) {
          doc.products = [entity];
        } else {
          doc.products.push(entity)
        }
        return window.kart.db.put({
          _id: key,
          _rev: doc._rev,
          categoryName: doc.categoryName,
          keyName: doc.keyName,
          products: doc.products
        }).then((response: Response)=> {
          return resolve(new Response().deserialize(response));
        })
      })
    });
  }

}
