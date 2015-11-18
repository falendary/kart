/**
 * Created by sergey on 19.11.15.
 */
/// <reference path="../../../../../typings/tsd.d.ts" />

export class ChartService {

  private getDaysInMonth(month?: Date): number {

    let date: Date = month || new Date();

    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  public getLabelsForMonth(): Array<string> {

    let daysInMonth: number = this.getDaysInMonth();

    let labels: Array<string> = [];

    let i: number;

    for (i = 1; i <= daysInMonth; i = i + 1) {
      labels.push(i.toString());
    }

    return labels;
  }

  public fillValuesForMonth(items: Array<any>, itemType?: string): Array<number> {

    console.log('fill', items);

    let i: number, j: number;
    let itemDayIndex: number;
    let values: Array<number> = [];
    let daysInMonth: number = this.getDaysInMonth();

    for (i = 0; i < daysInMonth; i = i + 1) {
      values.push(i);
    }

    if (itemType === 'bill') {

      for (j = 0; j < items.length; j = j + 1) {
        itemDayIndex = new Date(items[j].billsDate).getDate();
        if (values[itemDayIndex] > 0) {
          values[itemDayIndex] = values[itemDayIndex] + items[j].total;
        } else {
          values[itemDayIndex] = items[j].total;
        }
      }
    }

    return values;
  }

}
