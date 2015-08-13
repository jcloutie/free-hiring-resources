var App = angular.module('exams',['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/main',{
    templateUrl : 'step4.html',
    controller : 'MainCtrl'
  }).
  when('/basic-outlook',{
    templateUrl : 'basic-outlook.html',
    controller : 'BasicOutlookQuestionsCtrl'
  }).
  when('/intermediate-outlook',{
    templateUrl : 'intermediate-outlook.html',
    controller : 'IntermediateOutlookQuestionsCtrl'
  }).
  when('/expert-outlook',{
    templateUrl : 'expert-outlook.html',
    controller : 'ExpertOutlookQuestionsCtrl'
  }).
  otherwise({redirectTo:"/main"});
}])

.controller('MainCtrl', ['$scope', function($scope){
  
}])

.controller('BasicOutlookQuestionsCtrl', ['$scope', '$http', function($scope,$http){
  $http.get('basic-outlook.json').then(function(response){
    $scope.questions = response.data;
  })
}])

.controller('IntermediateOutlookQuestionsCtrl', ['$scope', '$http', function($scope,$http){
  $http.get('intermediate-outlook.json').then(function(response){
    $scope.questions = response.data;
  })
}])

.controller('ExpertOutlookQuestionsCtrl', ['$scope', '$http', function($scope,$http){
  $http.get('expert-outlook.json').then(function(response){
    $scope.questions = response.data;
  })
}]);