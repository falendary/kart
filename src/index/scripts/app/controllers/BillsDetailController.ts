/**
 * Created by s.zhitenev on 18.11.2015.
 *
 */
/// <reference path="../../../../../typings/tsd.d.ts" />

import {BaseController} from './BaseController';

import {BillsService} from '../services/BillsService';
import {Bill} from "../models/BillModel";

interface IBillsDetailControllerStateParams extends ng.ui.IStateParamsService {
  billId: string;
}

'use strict';

export class BillsDetailController extends BaseController {

  private billsService: BillsService = new BillsService();
  public billId: string;
  public bill: Bill;

  constructor($scope: ng.IScope, $state: ng.ui.IState, $stateParams: IBillsDetailControllerStateParams) {
    super($scope);

    console.log('Bills detail controller initialized...');

    this.billId = $stateParams.billId;

    this.getBill();

  }

  public getBill(): void {
    this.billsService.getByKey(this.billId).then((data: Bill) => {
      console.log('getBill', data);
      this.bill = data;
      this.apply();
    })
  }

}
