var navbar = document.getElementsByClassName("navbar");
window.onscroll = windowScroll;
function windowScroll(e){
	var offset = window.pageYOffset;
	if(offset > 100){
		console.log(offset);
		navbar[0].className = navbar[0].className + " navbar-fixed";
	}else if(offset < 100){
	navbar[0].className = "navbar";
	}
}