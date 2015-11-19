/**
 * Created by sergey on 19.11.15.
 */
/// <reference path="../../../../../typings/tsd.d.ts" />

export class ChartService {

  private getDaysInMonth(month?: Date): number {

    let date: Date = month || new Date();

    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  public getLabelsForMonth(month?: number): Array<string> {

    let daysInMonth: number = this.getDaysInMonth();

    let labels: Array<string> = [];

    let i: number;

    for (i = 1; i <= daysInMonth; i = i + 1) {
      labels.push(i.toString());
    }

    return labels;
  }

  public fillValuesForMonth(items: Array<any>, itemType: string, month: Date): Array<number> {

    //console.log('fill', items);

    let i: number, j: number;
    let itemDayIndex: number;
    let values: Array<number> = [];
    let daysInMonth: number = this.getDaysInMonth(month);

    for (i = 0; i < daysInMonth; i = i + 1) {
      values.push(0);
    }

    if (itemType === 'bill') {

      for (j = 0; j < items.length; j = j + 1) {
        itemDayIndex = new Date(items[j].billsDate).getDate();
        if (values[itemDayIndex] > 0) {
          values[itemDayIndex] = values[itemDayIndex] + items[j].total;
        } else {
          if (items[j].total) {
            values[itemDayIndex] = items[j].total;
          } else {
            values[itemDayIndex] = 0;
          }
        }
      }
    }

    return values;
  }

  public fillValuesForWeek(items: Array<any>, itemType: string,
                           dayFrom?: Date, dayTo?: Date): Array<number> {

    //console.log('week fill', items, dayFrom, dayTo);

    let i: number, j: number, x: number;
    let itemDayIndex: number;
    let values: Array<number> = [];
    let valuesIndexed: Array<number> = [];
    let dayFromIndex: number = dayFrom.getDate();
    let dayToIndex: number = dayTo.getDate();

    //console.log('dayFromIndex', dayFromIndex);
    //console.log('dayToIndex', dayToIndex);

    for (i = dayFromIndex; i <= dayToIndex; i = i + 1) {
      values[i] = 0
    }

    if (itemType === 'bill') {
      for (j = 0; j < items.length; j = j + 1) {
        itemDayIndex = new Date(items[j].billsDate).getDate();
        if (values[itemDayIndex] > 0) {
          values[itemDayIndex] = values[itemDayIndex] + items[j].total;
        } else {
          if (items[j].total) {
            values[itemDayIndex] = items[j].total;
          } else {
            values[itemDayIndex] = 0;
          }
        }
      }
    }

    valuesIndexed = values.filter(()=>{return true});

    //console.log('valuesIndexed', valuesIndexed);
    return valuesIndexed;

  }

}
