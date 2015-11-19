/**
 * Created by sergey on 29.10.15.
 *
 */
/// <reference path="../../../../../typings/tsd.d.ts" />

import {BaseController} from './BaseController';
import {Bill} from '../models/BillModel';
import {Response} from '../models/ResponseModel';
import {Product} from '../models/ProductModel';
import {BillsService} from '../services/BillsService';

'use strict';

export class BillsAddController extends BaseController {

  private billsService: BillsService = new BillsService();

  public state: ng.ui.IStateService;
  public bill: Bill;
  public ionicDatePickerObj: any;
  public valid: boolean = false;
  public weekDaysList: Array<string> = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  public monthList: Array<string> = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

  constructor($scope: ng.IScope, $state: ng.ui.IStateService) {
    super($scope);
    console.log('Bills add controller initialized...');

    this.state = $state;

    this.bill = new Bill();
    this.bill.total = 0;
    this.bill.fields = [];

    this.ionicDatePickerObj = {
      titleLabel: 'Дата чека',  //Optional
      todayLabel: 'Сегодня',  //Optional
      closeLabel: 'Закрыть',  //Optional
      setLabel: 'Сохранить',  //Optional
      setButtonType: 'button-assertive',  //Optional
      todayButtonType: 'button-assertive',  //Optional
      closeButtonType: 'button-assertive',  //Optional
      inputDate: new Date(),  //Optional
      mondayFirst: true,  //Optional
      weekDaysList: this.weekDaysList, //Optional
      monthList: this.monthList, //Optional
      templateType: 'popup', //Optional
      showTodayButton: 'true', //Optional
      modalHeaderColor: 'bar-positive', //Optional
      modalFooterColor: 'bar-positive', //Optional
      from: new Date(2012, 8, 2), //Optional
      to: new Date(2018, 8, 25),  //Optional
      callback: (val: Date) => {  //Mandatory
        this.datePickerCallback(val);
      },
      dateFormat: 'dd-MM-yyyy', //Optional
      closeOnSelect: false, //Optional
    };
  }

  public datePickerCallback(val: Date): void {
    this.bill.billsDate = val;
    console.log('this.bill.fields.length', Object.keys(this.bill.fields).length);
    console.log(this.bill.fields);
    let key: any;
    for (key in this.bill.fields) {
      if (this.bill.fields.hasOwnProperty(key)) {
        if (!this.bill.fields[key].removed) { // check only active fields
          if (this.bill.fields[key].total || this.bill.fields[key].total === 0) {  // if total has a value
            this.valid = true;
          } else {
            this.valid = false;
          }
        }
      }
    }
    console.log('var', this.bill.billsDate);
  }

  public updateTotal(price: number): void {
    console.log(this.bill.fields);
    console.log(this.bill.fields.length);
    this.bill.total = 0;
    let key: any;
    for (key in this.bill.fields) {
      if (this.bill.fields.hasOwnProperty(key)) {
        if (!this.bill.fields[key].removed) { // check only active fields
          if (this.bill.fields[key].total || this.bill.fields[key].total === 0) { // if total has a value
            let fieldTotal: string = this.bill.fields[key].total + ''; // typescript bug;
            if (fieldTotal !== '') {
              this.bill.total = this.bill.total + parseInt(fieldTotal, 10);
              if (this.bill.billsDate) {
                this.valid = true;
              }
            }
          } else {
            this.valid = false;
          }
        }
      }
    }
  }

  public addBill(): void {

    let numericFields: Array<Product> = [];
    let key: any;
    console.log('this.bill.fields', this.bill.fields);
    for (key in this.bill.fields) {
      if (this.bill.fields.hasOwnProperty(key)) {
        if (!this.bill.fields[key].removed && (this.bill.fields[key].total !== 0)) {
          numericFields.push(this.bill.fields[key]);
        }
      }
    }
    this.bill.fields = numericFields;

    if (this.bill.fields.length) {
      this.billsService.add(this.bill).then((response: Response)=> {
        console.log('Bills add Controller add bill', response);
        this.bill = null;
        this.state.go('app.bills', {}, {reload: true});
      })
    }
  }

}

