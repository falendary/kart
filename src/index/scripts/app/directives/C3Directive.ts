/**
 * Created by s.zhitenev on 19.11.2015.
 */
/// <reference path="../../../../../typings/tsd.d.ts" />

interface IC3DirectiveScope extends ng.IScope {
  entityDataSet: Array<any>;
  chartType: string;
  chartTitle: string;
}

export class C3Directive {

  restrict: string = 'AE';
  scope: Object = {
    entityDataSet: '=',
    chartType: '=',
    chartTitle: '='
  };
  link: ng.IDirectiveLinkFn = (scope: IC3DirectiveScope, elem: ng.IAugmentedJQuery, attr: ng.IAttributes) => {

    let dataSet1: Array<any> = scope.entityDataSet;
    dataSet1.unshift(scope.chartTitle);

    let chart: any = window.c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          dataSet1
        ],
        type: scope.chartType
      },
      bar: {
        width: {
          ratio: 1 // this makes bar width 50% of length between ticks
        }
      },
      zoom: {
        enabled: true
      }
    });

  };

  public static factory(): C3Directive {
    return new C3Directive();
  }
}
