module.exports = (function(){
	var menu = $("header div.menu");;

	function showMenu(logo){
		menu.toggleClass("visible");
	}

	return {
		showMenu:showMenu
	}
})();