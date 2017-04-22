module.exports = (function(){
	var menu = $("header div.menu");;

	function showMenu(logo){
		console.log("pressed");
		menu.toggleClass("visible");
		$(logo).toggleClass('open');
	}
	return {
		showMenu:showMenu
	}
})();