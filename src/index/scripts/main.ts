/**
 * Created by sergey on 17.10.15.
 */
/// <reference path="../../../typings/tsd.d.ts" />

import {Routes} from './app/Routes';
import {MainController} from './app/controllers/MainController';
import {ShellController} from './app/controllers/ShellController';

import {InitDatabaseRepository} from './app/repositories/InitDatabaseRepository';

import {StatsController} from './app/controllers/StatsController';
import {SettingsController} from './app/controllers/SettingsController';

import {ProductsController} from './app/controllers/ProductsController';
import {ProductsDetailController} from './app/controllers/ProductsDetailController';
import {ProductsAddController} from './app/controllers/ProductsAddController';

import {BillsDashboardController} from './app/controllers/BillsDashboardController';
import {BillsAddController} from './app/controllers/BillsAddController';
import {BillsDetailController} from "./app/controllers/BillsDetailController";


import {ReportsController} from './app/controllers/ReportsController';
import {ReportsNewChartController} from "./app/controllers/ReportsNewChartController";

import {BillAddFieldDirective} from './app/directives/BillAddFieldDirective';
import {C3Directive} from './app/directives/C3Directive';

let app = angular.module('app', [
  'ionic',
  'ionic-datepicker',
  'ngCordova'
]);

app.config(['$stateProvider', '$urlRouterProvider', Routes]);

app.run([function () {
  console.log('App initialized...');
  window.kart = window.kart || {}; // creating namespace;
  window.kart.db = new PouchDB('kart', {adapter: 'websql'});

  let initDatabaseRepository: InitDatabaseRepository = new InitDatabaseRepository();

  initDatabaseRepository.createCategories();
  initDatabaseRepository.createProducts();

  console.log('window.kart.db', window.kart.db);
}]);

app.controller('ShellController', ['$scope', ShellController]);
app.controller('MainController', ['$scope', MainController]);

app.controller('StatsController', ['$scope', StatsController]);
app.controller('SettingsController', ['$scope', SettingsController]);

app.controller('ProductsController', ['$scope', ProductsController]);
app.controller('ProductsDetailController', ['$scope', '$state', '$stateParams', ProductsDetailController]);
app.controller('ProductsAddController', ['$scope', '$state', ProductsAddController]);

app.controller('BillsDashboardController', ['$scope', BillsDashboardController]);
app.controller('BillsAddController', ['$scope', '$state', BillsAddController]);
app.controller('BillsDetailController', ['$scope', '$state', '$stateParams', BillsDetailController]);

app.controller('ReportsController', ['$scope', ReportsController]);
app.controller('ReportsNewChartController', ['$scope', '$state', '$stateParams', ReportsNewChartController]);

app.directive('billAddField', ['$compile', BillAddFieldDirective.factory]);
app.directive('c3Directive', [C3Directive.factory]);

require('./templates.min.js');
