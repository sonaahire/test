/**
 * Created by Pravin on 29/03/2018.
 */

angular.module('calenderCodeCtrl',[])
    .controller('calenderCtrl',function ($scope,$state,$http,$window) {
    // $scope.user = AuthService.authuser();

       $scope.names = ['Bitcoin',' Bitcoin Cash','Bitcoin Gold','Ripple','Litecoin','Ethereum'];
       $scope.user = {};
       $scope.allUser = [];
      $scope.adduser = function(){
        $http.post('/auth/addUser',$scope.user).then(function (response) {
                $scope.allUser.push(response.data)
                 
              });
         
      }

       $scope.checkUser = function(){
        $http.post('/auth/alluser',{}).then(function (response) {
                 $scope.allUser = response.data;
              });
       }





       $scope.checkUser();
})
