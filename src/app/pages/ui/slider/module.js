/**
 * @author a.demeshko
 * created on 12/22/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ui.slider', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.slider', {
          url: '/slider',
          templateUrl: 'app/pages/ui/slider/template.html',
          title: 'Sliders',
          sidebarMeta: {
            order: 1000,
          },
        });
  }

})();
