/**
 * Created by s.zhitenev on 17.11.2015.
 *
 */
/// <reference path="../../../../../typings/tsd.d.ts" />

import IAugmentedJQuery = angular.IAugmentedJQuery;
import {Product} from "../models/ProductModel";

interface BillAddFieldDirectiveScope extends ng.IScope {
  addField: Action;
  removeField: Action;
  field: Product;
  autoCalcTotal: Action;
  updatePrice: Action;
}

interface BillAddFieldDirectiveAttrs extends ng.IAttributes {
  field: string;
  updatePrice: Action;
}

export class BillAddFieldDirective {

  public $compile: ng.ICompileService;

  public restrict: string = 'AE';
  public replace: boolean = true;
  public scope: Object = {
    field: '=',
    updatePrice: '&'
  };
  public templateUrl: string = 'views/directives/bills-field-template.html';
  public link: ng.IDirectiveLinkFn = (scope: BillAddFieldDirectiveScope, elem: ng.IAugmentedJQuery, attrs: BillAddFieldDirectiveAttrs) => {

    let plusBtn: JQuery = elem.find('.field-btn-control.plus');
    let minusBtn: JQuery = elem.find('.field-btn-control.minus');

    let index: number = parseInt(attrs.field.split('vm.bill.fields.field')[1], 10) + 1;

    if (!scope.field) {
      scope.field = new Product();
    }

    scope.autoCalcTotal = () => {
      if (scope.field.price && scope.field.quantity) {
        scope.field.total = scope.field.price * scope.field.quantity;
        scope.updatePrice();
      }
    };

    scope.addField = () => {
      plusBtn.removeClass('active');
      minusBtn.addClass('active');
      let directive: IAugmentedJQuery = this.$compile('<div '
        + 'data-bill-add-field '
        + 'data-field="vm.bill.fields.field' + index + '"'
        + 'data-update-price="vm.updateTotal()"'
        + '></div>')(scope.$parent);
      elem.after(directive);
    };

    scope.removeField = () => {
      elem.remove();
    }
  };

  constructor($compile: ng.ICompileService) {
    this.$compile = $compile;
  }

  public static factory($compile: ng.ICompileService): BillAddFieldDirective {
    return new BillAddFieldDirective($compile);
  }
}
