/**
 * Created by s.zhitenev on 12.11.2015.
 *
 */
/// <reference path="../../../../../typings/tsd.d.ts" />

import {ProductsRepository} from '../repositories/ProductsRepository';
import {Product} from '../models/ProductModel';
import {Response} from "../models/ResponseModel";

'use strict';

export class ProductsService {

  private productsRepository: ProductsRepository = new ProductsRepository();

  public getList(): Promise<Array<Product>> {
    return this.productsRepository.getList();
  }

  public getByKey(key: number | string): Promise<Product> {
    return this.productsRepository.getByKey(key);
  }

  public add(entity: Product): Promise<Response> {
    return this.productsRepository.add(entity);
  }

  public update(key: number | string, entity: Product): Promise<Product> {
    return this.productsRepository.update(key, entity);
  }

  public delete(key: number | string): Promise<Product> {
    return this.productsRepository.delete(key);
  }

}
