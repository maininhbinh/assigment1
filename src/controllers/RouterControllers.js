
window.RouterControllers = function($scope, $routeParams, $http){
    const apiKhoaHocNomar = "http://localhost:3000/khoaHocNomar";
    const apiKhoaHocPro = "http://localhost:3000/khoaHocPro";
    const apiSlideShow = "http://localhost:3000/slideShow";
     const apiregister = "http://localhost:3000/thong_tin_dang_ki";
    
    $scope.getDataKhoaHocNomar = function() {
        $http.get(apiKhoaHocNomar).then(function(res){
            if(res.status == 200){
                $scope.khoaHocNomar = res.data;
            }
        });
    }

    $scope.getDataKhoaHocPro = function() {
        $http.get(apiKhoaHocPro).then(function(res){
            if(res.status == 200){
                $scope.khoaHocPro = res.data;
            }
        })
    }

    $scope.getSlideShow = function() {
        $http.get(apiSlideShow).then(function(res){
            if(res.status == 200){
                $scope.slideShow = res.data;
            }
        })
    }

    $scope.getRegister = function() {
        $http.get(apiregister).then(function(res){
            if(res.status == 200){
                $scope.register = res.data;
            }
        })
    }

    $scope.getDataKhoaHocPro();
    $scope.getDataKhoaHocNomar();
    $scope.getSlideShow();
    $scope.getRegister();
};

