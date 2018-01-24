// nav.nav-bigfooter 用の挙動制御 

// ページを読み込んだ時点で画面幅を取得する。

$(function() {
    var w = $(window).width();
    var x = 992; //値の992 は Bootstrap の lg に合わせている。
    if (w >= x) {
       $('#bigfooter-1').removeClass('collapse');
       $('#bigfooter-2').removeClass('collapse');
       $('#bigfooter-3').removeClass('collapse');
    } else {
       $('#bigfooter-1').addClass('collapse');
       $('#bigfooter-2').addClass('collapse');
       $('#bigfooter-3').addClass('collapse');
    }
});

// ユーザーが画面幅をリサイズした際に画面幅を取得する。

$(window).resize(function(){
    var w = $(window).width();
    var x = 992; //値の992 は Bootstrap の lg に合わせている。
    if (w >= x) {
        $('#bigfooter-1').removeClass('collapse');
        $('#bigfooter-2').removeClass('collapse');
        $('#bigfooter-3').removeClass('collapse');
        } else {
        $('#bigfooter-1').addClass('collapse');
        $('#bigfooter-2').addClass('collapse');
        $('#bigfooter-3').addClass('collapse');
        }
});