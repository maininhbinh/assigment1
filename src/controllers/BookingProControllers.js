window.BookingProControllers = function($scope, $routeParams, $http){
    $scope.idPro = Number($routeParams.id);
    const apiKhoaHocPro = "http://localhost:3000/khoaHocPro";
    
    $scope.getDataKhoaHocPro = function() {
        $http.get(`${apiKhoaHocPro}/${$scope.idPro}`).then(function(res){
            if(res.status == 200){
                $scope.index = res.data;
            }
        });
    }

    $scope.getDataKhoaHocPro();
    
    $scope.check = function() {


        

        if($scope.checkNull("errorName",$scope.name) == false){
            $scope.checkNull("errorName",$scope.name)
        }else{
            $scope.checkName("errorName", $scope.name)
        }

        if($scope.checkNull("errorCmt",$scope.cmt) == false){
            $scope.checkNull("errorCmt",$scope.cmt)
        }else{
            $scope.checkCmt("errorCmt",$scope.cmt)
        }
        
        if($scope.checkNull("errorEmail", $scope.email) == false){
            $scope.checkNull("errorEmail", $scope.email)
        }else{
            $scope.checkEmail("errorEmail", $scope.email)
        }

        if($scope.checkNull("errorPhone", $scope.phone) == false){
            $scope.checkNull("errorPhone", $scope.phone)
        }else{
            $scope.checkPhone("errorPhone", $scope.phone)
        }

        if($scope.checkNull("errorDate", $scope.date) == false){
            $scope.checkNull("errorDate", $scope.date)
        }else{
            $scope.checkDate("errorDate", $scope.date)
        }
        
        let gioi_tinh = $scope.checkGt("errorGt", $scope.gioi_tinh);
        let thanh_toan = $scope.checkGt("errorTt", $scope.thanh_toan)
       

    }

    $scope.checkNull = function(errorDiv,data){
        let error = document.getElementById(errorDiv);
        let value = error.innerText;
        let show = document.querySelector(`.input-from.${errorDiv}`);
        let check = true;

        let checkData = (typeof data === "string")? data.trim() : data;

        if(typeof data === "undefined" || checkData == ''){
            error.innerHTML = 'không được để trống trường này';
            error.style.color = 'red';
            
            show.classList.add('show');
            check = false;
            window.scrollTo(0,0);
        }   
        return check;
    }

    $scope.checkName = function(errorDiv,data){
        const nameRegex = /^[A-Za-z\s]+$/;

        let error = document.getElementById(errorDiv);
        
        if(!nameRegex.test(data)){
            error.classList.add('show')
            error.innerText = "tên không được có số hoặc kí tự";
            error.style.color = 'red';
            window.scrollTo(0,0);
        }else{
            error.classList.remove('show')
        }
    }

    $scope.checkEmail = function(errorDiv,data) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let error = document.getElementById(errorDiv);
        
        if(!emailRegex.test(data)){
            error.classList.add('show')
            error.innerText = "định dạng email không đúng";
            error.style.color = 'red';
            window.scrollTo(0,0);
        }else{
            error.classList.remove('show')
        }

    }

    $scope.checkPhone = function(errorDiv,data) {
        const phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g; 
        let error = document.getElementById(errorDiv);

        if(!phoneRegex.test(data)){
            error.classList.add('show')
            error.innerText = "định dạng số điện thoại không đúng";
            error.style.color = 'red';
            window.scrollTo(0,0);
        }else{
            error.classList.remove('show')
        }
    }

    $scope.checkCmt = function(errorDiv,data) {
        const cmtRegex = /^[A-Za-z]+$/; 
        let error = document.getElementById(errorDiv);
        
        if(cmtRegex.test(data)){
            error.classList.add('show')
            error.innerText = "chứng minh thư không được để kí tự";
            error.style.color = 'red';
            window.scrollTo(0,0);
        }else{
            error.classList.remove('show')
        }
    }

    $scope.checkDate = function(errorDiv,data) {
        const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d{2}$/;

        let error = document.getElementById(errorDiv);
        
        if(!dateRegex.test(data)){
            error.classList.add('show')
            error.innerText = "ngày tháng không đúng";
            error.style.color = 'red';
            window.scrollTo(0,0);
        }else{
            error.classList.remove('show')
        }
    }
    $scope.remove = function(errorElement, text) {
        let checkData = errorElement.toString();
        let error = document.getElementById(checkData);
        let show = document.querySelector(`.input-from.${errorElement}`);
        
        show.classList.remove('show');
        error.innerText = text;
        error.style.color = 'gray';
    }

    $scope.checkGt = function(errorDiv, data) {
        let checkData = errorDiv.toString();
        let error = document.querySelectorAll(`#${checkData}`)
        
        for(let i = 0; i < error.length; i++){
            if(typeof data === "undefined"){
                error[i].style.color = 'red';
                error[i].classList.add('show');
            }else{
                error[i].style.color = 'gray';
                error[i].classList.remove('show');
            }
        }
    }

    $scope.removeRadio = function(errorDiv) {
        let checkData = errorDiv.toString();
        let error = document.querySelectorAll(`#${checkData}`);
        
        for(let i = 0; i < error.length; i++){
            error[i].style.color = 'gray';
            error[i].classList.remove('show');
        }
    }
    
}