/**
 * Created by sergey on 01.11.15.
 */

declare var ionic: any;
declare var openDatabase: any;
declare var cordova: any;
declare var PouchDB: any;

declare type Action = (key1?: any, key2?: any, key3?: any, key4?: any) => void;

interface Window {
  ionic: any;
  openDatabase: any;
  cordova: any;
  kart: any;
  mozIndexedDB: any;
  webkitIndexedDB: any;
}

