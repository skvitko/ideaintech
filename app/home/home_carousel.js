angular.module('home_carousel', ['ui.bootstrap'])
.controller('CarouselDemoCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

    $scope.myInterval = 5000;

    var slides = $scope.slider = [{
            image: 'images/slide0.png',
        },{
            image: 'images/slide1.png',
        },{
            image: 'images/slide2.png',           
        },{
            image: 'images/slide3.png',           
        },{
            image: 'images/slide4.png',           
        }];                     
}])
;