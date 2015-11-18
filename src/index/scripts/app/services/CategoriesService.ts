/**
 * Created by s.zhitenev on 12.11.2015.
 *
 */
/// <reference path="../../../../../typings/tsd.d.ts" />

import {Category} from '../models/CategoryModel';
import {CategoriesRepository} from '../repositories/CategoriesRepository';
import {Product} from '../models/ProductModel';
import {Response} from "../models/ResponseModel";

'use strict';

export class CategoriesService {

  private categoriesRepository: CategoriesRepository = new CategoriesRepository();

  public getList(): Promise<Array<Category>> {
    return this.categoriesRepository.getList();
  }

  public getByKey(key: number): Promise<Category> {
    return this.categoriesRepository.getByKey(key);
  }

  public add(entity: Category): Promise<Category> {
    return this.categoriesRepository.add(entity);
  }

  public update(key: number, entity: Category) {
    return this.categoriesRepository.update(key, entity);
  }

  public delete(key: number) {
    return this.categoriesRepository.delete(key);
  }

  public searchCategory(query: string, categories: Array<Category>): Promise<Array<Category>> {

    return new Promise((resolve, reject) => {

      var matches = categories.filter((category: Category) => {
        if (category.categoryName.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
          return true;
        }
      });
      setTimeout(() => {
        resolve(matches);
      }, 100);

    });

  }

  public addProduct(key: string, entity: Product): Promise<Response> {
    return this.categoriesRepository.addProduct(key, entity);
  }

}
