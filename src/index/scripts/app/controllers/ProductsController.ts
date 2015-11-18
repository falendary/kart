/**
 * Created by sergey on 18.10.15.
 */
/// <reference path="../../../../../typings/tsd.d.ts" />

import {Category} from '../models/CategoryModel';
import {DatabaseService} from '../services/DatabaseService';
import {CategoriesService} from '../services/CategoriesService';
import {BaseController} from './BaseController';

'use strict';

export class ProductsController extends BaseController{

  private categoriesService: CategoriesService = new CategoriesService();
  public categories: Array<Category> = [];
  public db: DatabaseService;
  public shownCategory: Category;

  constructor($scope: ng.IScope) {
    super($scope);
    console.log('Products controller initialized...');

    this.categoriesService.getList().then((data: Array<Category>)=> {
      this.categories = data;
      console.log('this.categories', this.categories);
      this.apply();
    });

    console.log('$scope', $scope);
    console.log('this', this);
  }

  public toggleCategory(category: Category): void {
    if (this.isCategoryShown(category)) {
      this.shownCategory = null;
    } else {
      this.shownCategory = category;
    }
  }

  public isCategoryShown(category: Category): boolean {
    return this.shownCategory === category;
  }

}
