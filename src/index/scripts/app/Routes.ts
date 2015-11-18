/**
 * Created by sergey on 17.10.15.
 *
 */
/// <reference path="../../../../typings/tsd.d.ts" />

'use strict';

export class Routes {

  constructor($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) {

    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'views/shell.html',
        controller: 'ShellController as vm'
      })
      .state('app.main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'MainController as vm'
      })
      .state('app.products', {
        url: '/products',
        templateUrl: 'views/products/products.html',
        controller: 'ProductsController as vm'
      })
      .state('app.products-detail', {
        url: '/products/:productId',
        templateUrl: 'views/products/products-detail.html',
        controller: 'ProductsDetailController as vm'
      })
      .state('app.products-add', {
        url: '/add/product',
        templateUrl: 'views/products/product-add.html',
        controller: 'ProductsAddController as vm'
      })
      .state('app.reports', {
        url: '/reports',
        templateUrl: 'views/reports/reports.html',
        controller: 'ReportsController as vm'
      })
      .state('app.reports-new-chart', {
        url: '/reports/newChart',
        templateUrl: 'views/reports/reports-new-chart.html',
        controller: 'ReportsNewChartController as vm',
        params: {
          chartType: null
        }
      })
      .state('app.bills', {
        url: '/bills',
        templateUrl: 'views/bills/bills-dashboard.html',
        controller: 'BillsDashboardController as vm'
      })
      .state('app.bills-detail', {
        url: '/bills/:billId',
        templateUrl: 'views/bills/bills-detail.html',
        controller: 'BillsDetailController as vm'
      })
      .state('app.bills-add', {
        url: '/add/bill',
        templateUrl: 'views/bills/bills-add.html',
        controller: 'BillsAddController as vm'
      })
      .state('app.stats', {
        url: '/stats',
        templateUrl: 'views/stats/stats.html',
        controller: 'StatsController as vm'
      })
      .state('app.settings', {
        url: '/settings',
        templateUrl: 'views/settings/settings.html',
        controller: 'SettingsController as vm'
      });

    console.log('Router initialized...');

    $urlRouterProvider.otherwise('/app/main');
  }

}
