require.config({
  baseUrl: 'js/',
  urlArgs: "cachebuster=" + (new Date()).getTime(),
  waitSeconds: 200,
  paths: {
    'jquery': 'libs/jquery', // jQuery v2.1.3
    'angular': 'libs/angular', // AngularJS v1.4.0.1
    'angular-route': 'libs/angular-route',
    'angular-ui-router': 'libs/angular-ui-router', // angular-ui v0.2.14
    'angularAMD': 'libs/angularAMD', // angularAMD v0.2.1 - @doc : https://github.com/marcoslin/angularAMD
    'ngload': 'libs/ngload', 
    'angular-resource': 'libs/angular-resource', // angular-resource v1.2.16
    'bootstrap': 'libs/bootstrap',
    'angular-animate': 'libs/angular-animate',
    'angular-sanitize':'libs/angular-sanitize'
  },

  shim: {    
    'angularAMD': [ 'angular' ],
    'angular-route': [ 'angular' ],
    'ngload': [ 'angularAMD' ],
    'angular-resource': [ 'angular' ],
    'angular-ui-router': [ 'angular' ],
    'bootstrap': [ 'jquery' ],
    'angular-animate': [ 'angular' ],
    'angular-sanitize': [ 'angular' ]
  },

  // start application
  deps: ['app']
});