console.log("Main js loaded");

var $connect = $("#login");
var googleWindow;
// $(function() {
//     var win;
//     var checkConnect;
//     var oAuthURL = '/auth/google';
//
//     $connect.click(function() {
//         win = window.open(oAuthURL, 'SomeAuthentication', 'scrollbars=yes,resizable=yes,top=175,left=450,width=500,height=400');
//     });
//
// });
    checkConnect = setInterval(function() {
        if (googleWindow && googleWindow.location.pathname === "/close") {
        clearInterval(checkConnect);
        googleWindow.close();
      };
    }, 100);

$connect.on("click", function (){
  googleWindow = window.open('/auth/google', 'googleWindow', 'scrollbars=yes,resizable=yes,top=175,left=450,width=500,height=400');
  // loop interval, keep checking if googleWindwo
})
