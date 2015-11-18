/**
 * Created by sergey on 18.10.15.
 *
 */
/// <reference path="../../../../../typings/tsd.d.ts" />

import {ProductsService} from '../services/ProductsService';
import {Product} from '../models/ProductModel';
import {BaseController} from "./BaseController";

'use strict';

interface IProductsDetailControllerParams extends ng.ui.IStateParamsService {
  productId: string;
}

export class ProductsDetailController extends BaseController {

  private productsService: ProductsService = new ProductsService();

  public productId: string;
  public product: Product;

  constructor($scope: ng.IScope, $state: ng.ui.IStateService, $stateParams: IProductsDetailControllerParams) {
    super($scope);
    console.log('Product Detail controller initialized...');

    this.productId = $stateParams.productId;
    this.getProduct();
  }

  public getProduct(): void {
    this.productsService.getByKey(this.productId).then((data: Product)=> {
        this.product = data;
        this.apply();
    })
  }

}
