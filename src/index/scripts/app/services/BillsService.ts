/**
 * Created by s.zhitenev on 12.11.2015.
 *
 */
/// <reference path="../../../../../typings/tsd.d.ts" />

import {Bill} from '../models/BillModel';
import {BillsRepository} from '../repositories/BillsRepository';
import {Response} from '../models/ResponseModel';

'use strict';

export class BillsService {

  private billsRepository: BillsRepository = new BillsRepository();

  public getList(): Promise<Array<Bill>> {
    return this.billsRepository.getList();
  }

  public getByKey(key: number | string): Promise<Bill> {
    return this.billsRepository.getByKey(key);
  }

  public add(entity: Bill): Promise<Response> {
    return this.billsRepository.add(entity);
  }

  public update(key: number | string, entity: Bill): Promise<Response> {
    return this.billsRepository.update(key, entity);
  }

  public delete(key: number | string): Promise<Response> {
    return this.billsRepository.delete(key);
  }

  public getListByMonth(currentDate: Date): Promise<Array<Bill>> {

    console.log('wat', currentDate);

    let startDate: Date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    let endDate: Date = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    //console.log('startDate', startDate, 'endDate', endDate);

    return this.billsRepository.getListByMonth(startDate, endDate);
  }
}
