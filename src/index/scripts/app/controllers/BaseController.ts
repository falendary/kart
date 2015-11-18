/**
 * Created by s.zhitenev on 12.11.2015.
 *
 */
/// <reference path="../../../../../typings/tsd.d.ts" />

'use strict';

export class BaseController {

  private scope: ng.IScope;

  constructor($scope: ng.IScope) {
    this.scope = $scope;
    $scope.$on('$destroy', this.onDestroy);
    $scope.$on('$apply', this.apply);
  }

  public apply(): void {
    this.scope.$apply();
  }

  public onDestroy(): Action {
    console.log('Controller destroyed');
    return undefined;
  }
}
