$ (document).ready(function(){
    $(".designs").hide();
    $("#service1").on("click", function(){
        $("#service1").toggle();
        $(".designs").show();
    });

    $(".designs").on("click",function(){
        $("#service1").show();
        $(".designs").toggle();
    });

    $(".developments").hide();
    $("#service2").on("click", function(){
        $("#service2").toggle();
        $(".developments").show();
    });

    $(".developments").on("click", function(){
        $("#service2").show();
        $(".developments").toggle();
    });

    $(".products").hide();
    $("#service3").on("click", function(){
       $(".products").show();
       $("#service3").hide();
    });

    $(".products").on("click",function(){
       $("#service3").show();
       $(".products").toggle();
    });

});

$("#submit").click(function(){
    let mail=("e-mail").val();
    let name=$("#name").val();
    if (mail==" " && name==" "){
        alert("You name should not be empty or e-mail should be valid");
    } 
    else{
        alert("We have received your message. Thank you "+name+" for contacting us.");
    }
});