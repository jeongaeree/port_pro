$(document).ready(function(){    

    // 새로고침 상단으로 이동
    window.onload = function(){
        setTimeout(function(){
            scrollTo(0,0);

        },0);
    }



    // 메뉴바

    let menustate = false
    let btnmenu = document.querySelector(".linebar")
    let btnnn = document.querySelector(".gnbback")
    btnmenu.addEventListener("click",function(){
        if(menustate == false){
            btnmenu.classList.add("close")
            btnnn.classList.add("active")
            menustate = true

        }else{
            btnmenu.classList.remove("close")
            btnnn.classList.remove("active")
            menustate = false
        }
    })


    // 모바일 메뉴바
    let momenustate = false
    let mobtnmenu = document.querySelector(".molinebar")
    let mobtnnn = document.querySelector(".mognbback")
    mobtnmenu.addEventListener("click",function(){
        if(momenustate == false){
            mobtnmenu.classList.add("close")
            mobtnnn.classList.add("active")
            momenustate = true

        }else{
            mobtnmenu.classList.remove("close")
            mobtnnn.classList.remove("active")
            momenustate = false
        }
    })

    // 메인페이지 텍스트 애니메이션

    $(window).scroll(function(e){
        e.preventDefault(); 
        let wonst = $(window).scrollTop()
        let putop = $(".pure").offset().top - 77
        let catop = $(".care").offset().top - 77
        let satop = $(".safety").offset().top - 77
        console.log(putop)
        
        if(wonst>=putop){
            $(".pure").addClass("on")
        }else{
            $(".pure").removeClass("on")
        }
        if(wonst>=catop){
            $(".care").addClass("on")
        }else{
            $(".care").removeClass("on")
        }
        if(wonst>=satop){
            $(".safety").addClass("on")
        }else{
            $(".safety").removeClass("on")
        }
    })

 
    
    
   // 배너 슬라이드

    let count1 = 0;
    setInterval(function(){
        count1++;
        if(count1>=2){count1=0}        
        $(".trainone_pc").css("transform","translateX("+(-50*count1)+"%)")    
        console.log(count1)    
    },3000)
    
        

    let count2 = 0;
    setInterval(function(){
        count2++;
        if(count2>=2){count2=0}        
        $(".trainone_mo").css("transform","translateX("+(-50*count2)+"%)")        
    },3000)
    clearInterval(Interval);

    

    

    // 마우스 휠 동작

    $(".wrap>.pcmain>section").on("wheel DOMMouseScroll",function(event){
    //    console.log(event)
        let E = event.originalEvent
        let delta = 0;

    //    scroll_top = scroll_top + 60;
    //     scroll.style.top = scroll_top + "px";
        if(E.detail){
        delta = E.detail * - 40
        }else{
        delta = E.wheelDelta
        }
        
        if(delta<0){
        //마우스 휠을 내렸을 때
        if($(this).next().length!=0){
            let posTop = $(this).next().offset().top - 76;
            $("html,body").stop().animate({scrollTop:posTop},1000)
        }
        // $("header").css("background","#fff")
        }else{
        //마우스 휠을 올렸을 때
        if($(this).prev().length!=0){
            let posTop = $(this).prev().offset().top - 76;
            $("html,body").stop().animate({scrollTop:posTop},1000)
        }
        }
        return false

    })    

    

        

    $(".thsli>li").click(function(e){  
        e.preventDefault();          
        $(".thsli>li").removeClass("on")
        $(this).addClass("on")
    })

 


        
  
        

});






