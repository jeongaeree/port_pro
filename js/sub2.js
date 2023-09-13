$(document).ready(function(){

    // $(".list>li").each(function(){
    //     let result = Math.round(Math.random()*1000)%4
    //     if(result==0){
    //         $(this).addClass("a")
    //     }
       
    // })

   


    $(window).scroll(function(){
        let winst = $(window).scrollTop()  //스크롤바가 위에서 얼만큼 내려왔는지 계산
        let winHeight = $(window).height()*0.7 //브라우저의 높이가 계산된다.
        // console.log(winHeight).height()/2  //브라우저화면의 높이를 계산
        

        $(".a,.b").each(function(){
            if(winst+winHeight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })
    })

})
