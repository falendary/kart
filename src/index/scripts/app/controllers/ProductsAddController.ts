/**
 * Created by sergey on 29.10.15.
 *
 */

/// <reference path="../../../../../typings/tsd.d.ts" />

import {BaseController} from './BaseController';

import {Product} from '../models/ProductModel';
import {CategoriesService} from '../services/CategoriesService';
import {ProductsService} from '../services/ProductsService';
import {Category} from '../models/CategoryModel';
import {Response} from "../models/ResponseModel";

'use strict';

export class ProductsAddController extends BaseController {

  private categoriesService: CategoriesService = new CategoriesService();
  private productsService: ProductsService = new ProductsService();
  public state: ng.ui.IStateService;
  public categories: Array<Category>;
  public categoriesAutoComplete: Array<Category>;
  public item: Product;

  constructor($scope: ng.IScope, $state: ng.ui.IStateService) {
    super($scope);
    console.log('Item add controller...');
    this.state = $state;

    this.getCategories();
  }

  public getCategories(): void {
    this.categoriesService.getList().then((data: Array<Category>) => {
      this.categories = data;
      console.log('this.categories', this.categories);

      this.apply();
    })
  }

  public categorySearch(): void {
    if (this.item.category.categoryName !== '') {
      this.categoriesService.searchCategory(this.item.category.categoryName, this.categories).then((matches: Array<Category>) => {
        this.categoriesAutoComplete = matches;
        this.apply();
      });
    } else {
      this.categoriesAutoComplete = [];
    }
  }

  public setCategory = (category: Category) => {
    this.item.category = JSON.parse(JSON.stringify(category));
    this.categoriesAutoComplete = [];
  };

  public addProduct(): void {

    console.log('Product add controller, item', this.item);

    this.productsService.add(this.item).then((productResponse: Response)=> {

      console.log('Product add controller, add response: ', productResponse);

      this.item._id = productResponse.id;

      this.categoriesService.addProduct(this.item.category._id, this.item).then((categoryResponse: Response) => {


        console.log('Product add controller, addProduct response: ', categoryResponse);
        this.item = null;
        this.categoriesAutoComplete = [];
        console.log('work?');
        if (categoryResponse.ok) {
          console.log('then', categoryResponse);
          this.state.go('app.products');
        }
      });

    });

  }

}
