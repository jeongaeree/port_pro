$(document).ready(function(){
   document.querySelector(".product_ul").innerHTML = getItemFromArray(productList)
   $(".all_menu>li").click(function(){
    let cate = $(this).attr("data-cate")
    document.querySelector(".product_ul").innerHTML = getItemFromArray(productList,cate)

    //탭메뉴기능
    $(".all_menu>li").removeClass("on")
    $(this).addClass("on")
  



   })
})

