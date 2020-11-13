//active slide show
$(document).ready(function(){
    var l = $(".slide-img").length
    $(".prev").click(function(){
        for(let i = 0 ;i < l ; i++){
            if($(".slide-img").eq(i).css("display") != "none"){
                $(".slide-img").eq((i - 1 + l) % l).css("display","block");
                $(".slide-img").eq(i).css("display","none")
                break;
            }
        }
    })
    $(".next").click(function(){
        for(let i = 0 ;i < l ; i++){
            if($(".slide-img").eq(i).css("display") == "block"){
                $(".slide-img").eq((i + 1 + l) % l).show();
                $(".slide-img").eq(i).hide();
                break;
            }
        }
    })
})