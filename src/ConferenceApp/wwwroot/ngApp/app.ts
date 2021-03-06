namespace ConferenceApp {

    angular.module('ConferenceApp', ['ui.router', 'ngResource', 'ngMaterial', 'mdPickers'])
        .config((
            $stateProvider: ng.ui.IStateProvider,
            $urlRouterProvider: ng.ui.IUrlRouterProvider,
            $locationProvider: ng.ILocationProvider
        ) => {
            // Define routes
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '/ngApp/views/home.html',
                    controller: ConferenceApp.Controllers.HomeController,
                    controllerAs: 'controller'
                })
                .state('conferenceManage', {
                    url: '/conferences/manage',
                    templateUrl: '/ngApp/views/conferenceManage.html',
                    controller: ConferenceApp.Controllers.ConferenceManageController,
                    controllerAs: 'controller'
                })
                .state('schedule', {
                    url: '/schedule/:id',
                    templateUrl: '/ngApp/views/schedule.html',
                    controller: ConferenceApp.Controllers.ScheduleController,
                    controllerAs: 'controller'
                })
                .state('slotAdd', {
                    url: '/slots/add/:id',
                    templateUrl: '/ngApp/views/slotAddEdit.html',
                    controller: ConferenceApp.Controllers.SlotAddController,
                    controllerAs: 'controller'
                })
                .state('slotEdit', {
                    url: '/slots/edit/:id',
                    templateUrl: '/ngApp/views/slotAddEdit.html',
                    controller: ConferenceApp.Controllers.SlotEditController,
                    controllerAs: 'controller'
                })
                .state('conferenceEdit', {
                    url: '/conferences/edit/:id',
                    templateUrl: '/ngApp/views/conferenceAddEdit.html',
                    controller: ConferenceApp.Controllers.ConferenceEditController,
                    controllerAs: 'controller'
                })
                .state('conferenceAdd', {
                    url: '/conferences/add',
                    templateUrl: '/ngApp/views/conferenceAddEdit.html',
                    controller: ConferenceApp.Controllers.ConferenceAddController,
                    controllerAs: 'controller'
                })
                .state('displayRooms', {
                    url: '/rooms/:id',
                    templateUrl: '/ngApp/views/roomDisplay.html',
                    controller: ConferenceApp.Controllers.RoomDisplayController,
                    controllerAs: 'controller'
                })
                .state('displayPresentations', {
                    url: '/presentations/:id',
                    templateUrl: '/ngApp/views/presentationDisplay.html',
                    controller: ConferenceApp.Controllers.PresentationDisplayController,
                    controllerAs: 'controller'
                })
                .state('displaySpeakers', {
                    url: '/speakers/:id',
                    templateUrl: '/ngApp/views/speakerDisplay.html',
                    controller: ConferenceApp.Controllers.SpeakerDisplayController,
                    controllerAs: 'controller'
                })
                .state('presentationEdit', {
                    url: '/presentations/edit/:id',
                    templateUrl: '/ngApp/views/presentationAddEdit.html',
                    controller: ConferenceApp.Controllers.PresentationEditController,
                    controllerAs: 'controller'
                })
                .state('presentationAdd', {
                    url: '/presentations/add/:id',
                    templateUrl: '/ngApp/views/presentationAddEdit.html',
                    controller: ConferenceApp.Controllers.PresentationAddController,
                    controllerAs: 'controller'
                })
                .state('speakerEdit', {
                    url: '/speakers/edit/:id',
                    templateUrl: '/ngApp/views/speakerAddEdit.html',
                    controller: ConferenceApp.Controllers.SpeakerEditController,
                    controllerAs: 'controller'
                })
                .state('speakerAdd', {
                    url: '/speakers/add/:id',
                    templateUrl: '/ngApp/views/speakerAddEdit.html',
                    controller: ConferenceApp.Controllers.SpeakerAddController,
                    controllerAs: 'controller'
                })
                .state('roomEdit', {
                    url: '/rooms/edit/:id',
                    templateUrl: '/ngApp/views/roomAddEdit.html',
                    controller: ConferenceApp.Controllers.RoomEditController,
                    controllerAs: 'controller'
                })
                .state('roomAdd', {
                    url: '/rooms/add/:id',
                    templateUrl: '/ngApp/views/roomAddEdit.html',
                    controller: ConferenceApp.Controllers.RoomAddController,
                    controllerAs: 'controller'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: '/ngApp/views/login.html',
                    controller: ConferenceApp.Controllers.LoginController,
                    controllerAs: 'controller'
                })
                .state('register', {
                    url: '/register',
                    templateUrl: '/ngApp/views/register.html',
                    controller: ConferenceApp.Controllers.RegisterController,
                    controllerAs: 'controller'
                })
                .state('externalRegister', {
                    url: '/externalRegister',
                    templateUrl: '/ngApp/views/externalRegister.html',
                    controller: ConferenceApp.Controllers.ExternalRegisterController,
                    controllerAs: 'controller'
                })
                .state('notFound', {
                    url: '/notFound',
                    templateUrl: '/ngApp/views/notFound.html'
                });

            // Handle request for non-existent route
            $urlRouterProvider.otherwise('/notFound');

            // Enable HTML5 navigation
            $locationProvider.html5Mode(true);
        })
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.definePalette('secondaryPalette', {
                '50': '#1b4e6d',
                '100': '#205d81',
                '200': '#256b96',
                '300': '#2a7aaa',
                '400': '#2f89bf',
                '500': '#3a96ce',
                '600': '#62acd8',
                '700': '#77b7dd',
                '800': '#8bc2e2',
                '900': '#a0cce7',
                'A100': '#62acd8',
                'A200': '#4ea1d3',
                'A400': '#3a96ce',
                'A700': '#b4d7ec',
                'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                // on this palette should be dark or light
                'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                    '200', '300', '400', 'A100'],
                'contrastLightColors': undefined    // could also specify this if default was 'dark'
            });
            $mdThemingProvider.theme('default')
                .primaryPalette('blue-grey', {
                    'default': '800', // by default use shade 400 from the pink palette for primary intentions
                    'hue-1': '200', // use shade 100 for the <code>md-hue-1</code> class
                    'hue-2': '300', // use shade 600 for the <code>md-hue-2</code> class
                    'hue-3': '500' // use shade A100 for the <code>md-hue-3</code> class
                })
                // If you specify less than all of the keys, it will inherit from the
                // default shades
                .accentPalette('light-blue', {
                    'default': '50',
                    'hue-1': '300',
                    'hue-2': '600',
                    'hue-3': 'A700'
                })
                .warnPalette('red', {
                    'default': '400'
                });


            angular.module('ConferenceApp').factory('authInterceptor', (
                $q: ng.IQService,
                $window: ng.IWindowService,
                $location: ng.ILocationService
            ) =>
                ({
                    request: function (config) {
                        config.headers = config.headers || {};
                        config.headers['X-Requested-With'] = 'XMLHttpRequest';
                        return config;
                    },
                    responseError: function (rejection) {
                        if (rejection.status === 401 || rejection.status === 403) {
                            $location.path('/login');
                        }
                        return $q.reject(rejection);
                    }
                })
            );

            angular.module('ConferenceApp').config(function ($httpProvider) {
                $httpProvider.interceptors.push('authInterceptor');
            });



        }
        )
}