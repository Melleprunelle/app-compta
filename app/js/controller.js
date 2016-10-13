app.controller("userController", function ($scope) {
    $scope.users = [
        {
            id: 1,
            username: "Exemple User",
            usergroup: "Exemple Usergroup",
            usercolor: "Exemple Color",
        }
  ]
});

app.controller("userFormController", function ($scope) {
    $scope.addUser = function (user) {
        $scope.users.push(user);
        $scope.user = {};
    };

});

app.controller("StyleController", function ($scope) {
    $scope.CustomStyle = {};
    $scope.BColor = "Yellow";

    $scope.SetStyle = function () {
        $scope.CustomStyle = {
            'background-color': $scope.BColor,
        };
    }
});