app.controller("userController", function ($scope) {
    $scope.users = [
        {
            id: 0,
            username: "Exemple User",
            usergroup: "Exemple Usergroup",
            usercolor: "#0D3C76",
        }
  ]
});

app.controller("userFormController", function ($scope) {
    $scope.addUser = function (user) {
        $scope.users.push(user);
        $scope.user = {};
    };

});

/*
app.controller("StyleController", function ($scope) {
    $scope.CustomStyle = {};
    $scope.BColor = "crimson";

    $scope.SetStyle = function () {
        $scope.CustomStyle = {
            'background-color': $scope.BColor,
        };
    }
});*/