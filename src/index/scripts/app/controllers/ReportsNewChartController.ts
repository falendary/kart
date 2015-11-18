/**
 * Created by sergey on 18.10.15.
 */
/// <reference path="../../../../../typings/tsd.d.ts" />

import {BaseController} from './BaseController';

import {ProductsService} from '../services/ProductsService';
import {BillsService} from '../services/BillsService';
import {CategoriesService} from '../services/CategoriesService';

import {Product} from '../models/ProductModel';
import {Bill} from '../models/BillModel';
import {Category} from '../models/CategoryModel';

'use strict';

interface IReportsNewChartControllerParams extends ng.ui.IStateParamsService {
  chartType: string;
}

export class ReportsNewChartController extends BaseController {

  private productsService: ProductsService = new ProductsService();
  private billsService: BillsService = new BillsService();
  private categoriesService: CategoriesService = new CategoriesService();

  public chartType: string;
  public data: Array<Product | Bill | Category>;


  constructor($scope: ng.IScope, $state: ng.ui.IStateService, $stateParams: IReportsNewChartControllerParams) {
    super($scope);
    console.log('Reports new chart controller initialized...');

    console.log('$stateParams', $stateParams);

    this.chartType = $stateParams.chartType;

    if (this.chartType === 'lastMonth') {
      this.drawChartLastMonth();
    } else {
      if (this.chartType === 'lastWeek') {
        this.drawChartLastWeek();
      }
    }

  }

  public drawChartLastMonth(): void {
    this.billsService.getListByMonth(new Date()).then((data: Array<Bill>) => {
      console.log('data', data);
      this.data = data;
      this.apply();
    });
  }

  public drawChartLastWeek(): void {

  }

}
