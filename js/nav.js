$(document).ready(function(){
    $("#openMenu").click(function(){
        $("#navMenu").animate({
            height:'toggle'
        }, "slow" );
    });
});




// alternate way

// $(document).ready(function(){
//     $("#openMenu").click(function(){
//         if($("#navMenu").height()>0){
//             $("#navMenu").animate({
//                 height:0
//             }, 300);
//         }

//         else {
//             $("#navMenu").animate({
//                 height:300
//             }, 300);
//         }
//     });
// });