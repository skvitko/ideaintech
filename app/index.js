angular.module('ideaInTech', [
    'ngRoute',
    'home_carousel'
])
 .config(['$routeProvider', function ($routeProvider) {
     $routeProvider.
     when('/', {
         templateUrl: 'app/home/tpl.home.html'

     }).
     when('/projects', {
         templateUrl: 'app/projects/tpl.projects.html'
     }).
     when('/project/:id', {
         templateUrl: 'app/projects/tpl.project.html',
         controller: 'projectCtrl'
     }).
     when('/careers', {
         templateUrl: 'app/careers/tpl.careers.html'

     }).
     when('/contact', {
         templateUrl: 'app/contact/tpl.contact.html'

     }).
     when('/projects/proj1', {
         templateUrl: 'app/projects/tpl.proj1.html'

     }).
     otherwise({
         redirectTo: '/'
     })

 }])
.controller('homeController', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
    $rootScope.year = new Date().getFullYear();
    $rootScope.language = localStorage.getItem('language') || 'en';
    $scope.presentationWidth = innerWidth > 970 ? 970 : innerWidth;
    $scope.presentationHeight = $scope.presentationWidth / 1.5;

    window.onresize = function () {
        $scope.presentationWidth = innerWidth > 970 ? 970 : innerWidth;
        $scope.presentationHeight = $scope.presentationWidth / 1.5;
    }

    $scope.isLanguage = function (val) {
        return $rootScope.language === val
    }

    $scope.setLanguage = function (val) {
        $rootScope.language = val;

        try { //Fix for IE
            localStorage.setItem('language', val)
        } catch (Exception) { }

        changeLocalization();
    }

    function changeLocalization() {

        $http.get($rootScope.language + '.json').then(function (response) {
            $rootScope.menu = response.data.menu;
            $rootScope.footer = response.data.footer;
            $rootScope.slides = response.data.slides;
            $rootScope.home = response.data.home;
            $rootScope.projects = response.data.projects;

        }, function () {
            //alert('server do not find catalog\'s data')
        });
    }
    changeLocalization();


}]).controller('projectCtrl', ['$scope', '$rootScope', '$routeParams', function ($scope, $rootScope, $routeParams) {
    $rootScope.project = $rootScope.projects[ parseInt( $routeParams.id, 10 )]
}]);