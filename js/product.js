let productList = [
    {
        category:"bath",
        name:"베드타임™<br>베이비 바스",
        alt:"베드타임™ 베이비 바스",
        target:"유아용",
        imgFileName:"bedtime.png",
        bgClass:"pink"
    },
    {
        category:"bath",
        name:"탑투토™<br>베이비 바스",
        alt:"탑투토™ 베이비 바스",
        target:"신생아용",
        imgFileName:"toptuto-05-removebg-preview.png",
        bgClass:"skyblue"
    },
    {
        category:"bath",
        name:"액티브 키즈™<br>클린 앤드 프레시 바스",
        alt:"액티브 키즈™ 클린 앤드 프레시 바스",
        target:"일반용",
        imgFileName:"activekids.png",
        bgClass:"black"
    },
    {
        category:"bath",
        name:"액티브 키즈™<br>클린 앤드 프레시 바스",
        alt:"액티브 키즈™ 클린 앤드 프레시 바스",
        target:"일반용",
        imgFileName:"activekids.png",
        bgClass:"black"
    },
    {
        category:"shampoo",
        name:"액티브 키즈™<br>클린 앤드 프레시 샴푸",
        alt:"액티브 키즈™ 클린 앤드 프레시 샴푸",
        target:"유아용",
        imgFileName:"activesoft.png",
        bgClass:"pink"
    },
    {
        category:"shampoo",
        name:"액티브 키즈™<br>샤이니 샴푸",
        alt:"액티브 키즈™ 샤이니 샴푸",
        target:"유아용",
        imgFileName:"shy.png",
        bgClass:"pink"
    },
    {
        category:"shampoo",
        name:"액티브 키즈™<br>클린 앤드 프레시 샴푸",
        alt:"액티브 키즈™ 클린 앤드 프레시 샴푸",
        target:"유아용",
        imgFileName:"clean.png",
        bgClass:"pink"
    },
    {
        category:"cream",
        name:"수딩내추럴<br>인텐스 모이스처 크림",
        alt:"수딩내추럴 인텐스 모이스처 크림",
        target:"아기용",
        imgFileName:"green-06-removebg-preview.png",
        bgClass:"gray"
    },
    {
        category:"lotion",
        name:"베이비<br>로션 화이트",
        alt:"베이비 로션 핑크",
        target:"일반용",
        imgFileName:"baby_lotion_pink.png",
        bgClass:"black"
    },
    {
        category:"lotion",
        name:"베이비<br>로션 화이트",
        alt:"베이비 로션 화이트",
        target:"일반용",
        imgFileName:"white_c.png",
        bgClass:"black"
    },
    {
        category:"powder",
        name:"베이비 파우더<br>99% 퓨어 콘스타치",
        alt:"베이비 파우더 99% 퓨어 콘스타치",
        target:"일반용",
        imgFileName:"powder.png",
        bgClass:"black"
    },
    {
        category:"lotion",
        name:"베이비 수딩내추럴<br>너리싱 로션",
        alt:"베이비 수딩내추럴 너리싱 로션",
        target:"일반용",
        imgFileName:"greeny-09-removebg-preview.png",
        bgClass:"black"
    },
    {
        category:"oil",
        name:"베드타임™<br>베이비 오일",
        alt:"베드타임™ 베이비 오일",
        target:"신생아용",
        imgFileName:"pur.png",
        bgClass:"skyblue"
    },
    {
        category:"lotion",
        name:"베드타임™<br>베이비 로션",
        alt:"베드타임™ 베이비 로션",
        target:"유아용",
        imgFileName:"purlotion.png",
        bgClass:"pink"
    },
    {
        category:"oil",
        name:"베이비<br>오일",
        alt:"베이비 오일",
        target:"신생아용",
        imgFileName:"pinkoil_c.png",
        bgClass:"skyblue"
    }

]

function getItemFromArray(ArrayPro,cate="all"){
    let result = ""
    if(cate=="all"){
        for(let i=0 ; i<ArrayPro.length; i++){
            result += `<li class="${ArrayPro[i].category}">
            <div class="back"><a href="#"><img src="./img/catego/${ArrayPro[i].imgFileName}" alt="${ArrayPro[i].alt}"></a></div>  
            <h5><a href="#">${ArrayPro[i].name}</a></h5>
            <div class="${ArrayPro[i].bgClass}"><p>${ArrayPro[i].target}</p></div>
        </li>`
        }
    }else{
        for(let i=0 ; i<ArrayPro.length ; i++){
            if(cate == ArrayPro[i].category){
                result += `<li class="${ArrayPro[i].category}">
                <div class="back"><a href="#"><img src="./img/catego/${ArrayPro[i].imgFileName}" alt="${ArrayPro[i].alt}"></a></div>  
                <h5><a href="#">${ArrayPro[i].name}</a></h5>
                <div class="${ArrayPro[i].bgClass}"><p>${ArrayPro[i].target}</p></div>
            </li>`
            }
        }
    }
    
    return result
}
