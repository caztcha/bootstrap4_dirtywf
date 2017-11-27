// mega-dropdown-menu のメニューエリア内クリックでドロップダウンが閉じてしまう現象の解消

$('.mega-dropdown-menu').click(function(e) {
  e.stopPropagation();
});
