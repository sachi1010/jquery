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
// additem
$("#addItem").click(function(){
    $("#input").append('<div class="items">new item</div>');
})
//remove
$("#removeItem").click(function(){
$("#input .items:last").remove()
})
// change css
$("#changecss").click(function(){
    $("#box").css({
        "background-color":"blue",
    })
})
// changetext
$("#changetext").click(function(){
    $("#message").text('text can changed')
})
// changeinput
$("#changeinput").click(function(){
    $("#fetchdata").val('change value')
})
// clear input
$("#clearinput").click(function(){
    $("#fetchdata").val('')
})
// clone
$("#clone").click(function(){
    $("#box").clone().appendTo('#input').fadeIn()
})
// detach
$("#detach").click(function(){
    $("#box").detach()
})
//append item
$("#append").click(function(){
    $("#input").append('<div class="items">append item</div>');
})
// prepend
$("#prepend").click(function(){
    $("#input").prepend('<div class="items">prepend item</div>');
    })
// reset animation
$("#reset").click(function(){
    $("#box").stop(true,true).css({left:'0',opacity:'1'});
})
// form submit
$("#dataForm").on("submit",function(e){
    e.preventDefault();
    const inputvalue=$("#fetchdata").val();
    $("#message").text(`you entered:${inputvalue}`);
    $("#inputvalue").val('')
});
$("#fetch").click(function(){
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/users/1',
        method:'GET',
        success:function(data){
            $("#message").text(`name:${data.name}`);
            },
            error:function(){
                $("#message").text('error')
            }
        }
    );
})
})