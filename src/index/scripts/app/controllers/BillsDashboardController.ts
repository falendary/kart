/**
 * Created by sergey on 29.10.15.
 *
 */
/// <reference path="../../../../../typings/tsd.d.ts" />

import {BillsService} from '../services/BillsService';
import {Bill} from '../models/BillModel';
import {BaseController} from './BaseController';

'use strict';

export class BillsDashboardController extends BaseController {

  private billsService: BillsService = new BillsService();
  public currentMonth: Date;
  public bills: Array<Bill>;

  constructor($scope: ng.IScope) {
    super($scope);
    console.log('Bills dashboard controller initialized...');
    this.currentMonth = new Date();
    this.getBills();
  }

  public getBills(): void {
    this.billsService.getListByMonth(this.currentMonth).then((data: Array<Bill>)=> {
      this.bills = data;
      console.log('this.bills', this.bills);
      this.apply();
    })
  }

}
