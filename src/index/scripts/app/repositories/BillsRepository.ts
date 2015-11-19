/**
 * Created by s.zhitenev on 12.11.2015.
 *
 */
/// <reference path="../../../../../typings/tsd.d.ts" />

import {IEntityRepository} from '../repositories/interfaces/IEntityRepository';
import {Bill} from '../models/BillModel';
import {Response} from "../models/ResponseModel";

'use strict';

export class BillsRepository implements IEntityRepository<Bill> {

  public getList(): Promise<Array<Bill>> {
    return undefined;
  }

  public getByKey(key: number | string): Promise<Bill> {
    return new Promise((resolve)=>{
      window.kart.db.get(key).then((doc: any)=> {
        resolve(new Bill().deserialize(doc));
      })
    })
  }

  public add(entity: Bill): Promise<Response> {
    return window.kart.db.put({
      _id: 'bill' + new Date().getTime(),
      createDate: new Date(),
      billsDate: entity.billsDate,
      fields: entity.fields,
      total: entity.total,
      type: 'bill'
    }).then((response: Response) => {
      return new Response().deserialize(response);
    });
  }

  public update(key: number | string, entity: Bill): Promise<Response> {
    return undefined;
  }

  public delete(key: number | string): Promise<Response> {
    return undefined;
  }

  public getListByRange(startDate: Date, endDate: Date): Promise<Array<Bill>> {
    return window.kart.db.query({
      map: (doc: any, emit: any) => {
        if (new Date(doc.billsDate) > startDate && new Date(doc.billsDate) < endDate) {
          //console.log('doc', doc);
          emit(doc);
        }
      }
    }).then((result: any)=> {
      let bills: Array<Bill> = [];
      let i: number;
      for (i = 0; i < result.rows.length; i = i + 1) {
        bills.push(result.rows[i].key);
      }
      return bills;
    })
  }
}
