/**
 * Created by sergey on 18.10.15.
 */
/// <reference path="../../../../../typings/tsd.d.ts" />

import {BaseController} from './BaseController';

import {ProductsService} from '../services/ProductsService';
import {BillsService} from '../services/BillsService';
import {CategoriesService} from '../services/CategoriesService';
import {ChartService} from '../services/ChartService';

import {Product} from '../models/ProductModel';
import {Bill} from '../models/BillModel';
import {Category} from '../models/CategoryModel';

'use strict';

interface IReportsNewChartControllerParams extends ng.ui.IStateParamsService {
  chartDataType: string;
}

export class ReportsNewChartController extends BaseController {

  private productsService: ProductsService = new ProductsService();
  private billsService: BillsService = new BillsService();
  private categoriesService: CategoriesService = new CategoriesService();
  private chartService: ChartService = new ChartService();

  public chartDataType: string;
  public viewTitle: string;
  public data: Array<any>;
  public chartType: string;
  public chartTitle: string;
  public labels: Array<string> = [];
  public series: Array<string> = [];


  constructor($scope: ng.IScope, $state: ng.ui.IStateService, $stateParams: IReportsNewChartControllerParams) {
    super($scope);
    console.log('Reports new chart controller initialized...');

    console.log('$stateParams', $stateParams);

    this.chartDataType = $stateParams.chartDataType;

    if (this.chartDataType === 'lastMonth') {
      this.drawChartLastMonth();
    } else {
      if (this.chartDataType === 'lastWeek') {
        this.drawChartLastWeek();
      } else {
        $state.go('app.reports', {}, {reload: true});
      }
    }

  }

  public drawChartLastMonth(): void {
    this.billsService.getListByMonth(new Date()).then((data: Array<Bill>) => {
      console.log('data', data);

      let currentMonth: Date = new Date();
      let chartDataType: string = 'bill';
      this.chartType = 'bar';
      this.chartTitle = 'Чеки';
      this.viewTitle = moment().format('MMMM');

      this.labels = this.chartService.getLabelsForMonth();
      this.data = [];
      this.data= this.chartService.fillValuesForMonth(data, chartDataType, currentMonth);
      this.apply();
    });
  }

  public drawChartLastWeek(): void {
    this.billsService.getListByWeek(new Date()).then((data: Array<Bill>) => {
      //console.log('week', data);

      let chartDataType: string = 'bill';
      this.chartType = 'bar';
      this.chartTitle = 'Чеки';

      let dayFrom: Date = new Date(new Date().setDate(new Date().getDate() - 7));
      let dayTo: Date = new Date(new Date().setDate(new Date().getDate()));

      this.data = [];
      this.data = this.chartService.fillValuesForWeek(data, chartDataType, dayFrom, dayTo);
      this.apply()
    })
  }

}
