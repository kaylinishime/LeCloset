console.log("Main js loaded");

$(function() {
    var win;
    var checkConnect;
    var $connect = $("#login");
    var oAuthURL = '/auth/google';

    $connect.click(function() {
        win = window.open(oAuthURL, 'SomeAuthentication', 'scrollbars=yes,resizable=yes,top=175,left=450,width=500,height=400');
    });

    checkConnect = setInterval(function() {
        if (!win || !win.closed) return;
        clearInterval(checkConnect);
        window.location.reload();
    }, 100);
});
