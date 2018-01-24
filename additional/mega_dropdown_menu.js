// メガドロップダウンメニューにおいて、展開中のメニューエリア内をクリックしたときに、ドロップダウンが閉じてしまう現象を解消する。

$('.mega-dropdown-menu').click(function(e) {
  e.stopPropagation();
});
