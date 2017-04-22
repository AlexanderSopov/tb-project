module.exports = (function(){
	var menu = $("header div.menu");;

	function showMenu(logo){
		menu.toggleClass("visible");
		$(logo).toggleClass('open');
	}
	return {
		showMenu:showMenu
	}
})();