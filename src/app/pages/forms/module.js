/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.forms', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('forms', {
          url: '/forms',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Form Elements',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 250,
          },
        })
        .state('forms.inputs', {
          url: '/inputs',
          templateUrl: 'app/pages/forms/inputs/template.html',
          title: 'Form Inputs',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('forms.layouts', {
          url: '/layouts',
          templateUrl: 'app/pages/forms/layouts/template.html',
          title: 'Form Layouts',
          sidebarMeta: {
            order: 100,
          },
        })
        .state('forms.wizard',
        {
          url: '/wizard',
          templateUrl: 'app/pages/forms/wizard/template.html',
          controller: 'WizardCtrl',
          controllerAs: 'vm',
          title: 'Form Wizard',
          sidebarMeta: {
            order: 200,
          },
        });
  }
})();
