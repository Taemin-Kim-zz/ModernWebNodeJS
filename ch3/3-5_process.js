//process argv
process.argv.forEach(function (item ,index) {
    
    console.log(index + ' : ' + typeof(itme) +  ' : ', item);

    //실행 매개 변수에 --exit가 있을 떄
    if(item == '--exit'){
        //다음 실행 매개 변수를 얻습니다.  
        var exitTime = Number(process.argv[index - 1]);

        //일정 시간 후 프로그램을 종료 
        setTimeout(function() {process.exit();}, exitTime);
    }
});