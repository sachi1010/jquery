$(document).ready(function(){
    // show
    $("#show").click(function(){
        $("#box").fadeIn(1000);
    });
// hide
$("#hide").click(function(){
    $("#box").fadeOut(1000);
});

// toogle
$("#toogle").click(function(){
    $("#box").fadeToggle()
})
// animate
$("#animate").click(function(){
    $("#box").animate(
        {
            left:"+=100px"
        },1000
    )
});
// fade
$("#fade").click(function(){
    $("#box").fadeTo(1000,0.4)
});
// slide
$("#slide").click(function(){
    $("#box").slideDown()
})
// slideup
$("#slideup").click(function(){
    $("#box").slideUp()
});
// 

})