(function () {
    'use sctrict';

    angular.module("LunchCheck", [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunch = '';

        $scope.checkLunch = function() {
            const lunch_length = $scope.lunch.split(",").length;

            if(lunch_length == 0) {
                $scope.message = 'Please enter data first';
            } else if (lunch_length <= 3) {
                $scope.message = 'Enjoy!';               
            } else {
                $scope.message = 'Too much!';
            }
        

        }
    }

})();