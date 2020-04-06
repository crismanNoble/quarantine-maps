// var $=window.pardot.$;
// function putErrorTextInALogicalAndUseablePlace(e){
//   function t(){
//     $(".error").each(function(){
//       if(!$(this).hasClass("form-field")){
//         var e=$(this),t=e.text(),r=e.prev().prev().find("label");
//         r.length||(r=e.parent().prev().find("label"));
//         var n=$(document.createElement("span")).addClass("error-text").text(t);
//         r.find("span").length<1&&r.append(n),e.hide()}}),$(".form-field").each(function(){
//           $(this).next().find("p.error").length||$(this).next().next().hasClass("error")&&!$(this).next().next().hasClass("form-field")||$(this).find("span.error-text").remove()})}e?window.setTimeout(t,1e3):t()
//   }
//   $(".form-field").each(function(){
//         var e=$(this),t=$(this).find("input");
//         if(e.hasClass("required")){
//           t.attr("required","required");
//           var r=$(this).find("label").text();
//           $(this).find("label").text(r+"*")
//         }
//         e.hasClass("email")&&(window.setTimeout(function(){
//           var e=t.attr("onChange")+";putErrorTextInALogicalAndUseablePlace(true);";
//           t.attr("onchange",e)
//          },1e3),t[0].setAttribute("type","email"))
//   }),putErrorTextInALogicalAndUseablePlace(!0);

// // $(".form-field").each(function(){
// //         var e=$(this),t=$(this).find("input");
// //         if(e.hasClass("required")){
// //           t.attr("required","required");
// //           var r=$(this).find("label").text();
// //           $(this).find("label").text(r+"*")
// //         }
// //         e.hasClass("email")&&(window.setTimeout(function(){
// //           var e=t.attr("onChange")+";putErrorTextInALogicalAndUseablePlace(true);";
// //           t.attr("onchange",e)
// //          },1e3),t[0].setAttribute("type","email"))
// //   })