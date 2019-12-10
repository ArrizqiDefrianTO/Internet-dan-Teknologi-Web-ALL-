var coverContent = document.getElementById('cover-content');
var btnUppercase = document.getElementById('btn-uppercase');
btnUppercase.onclick = function(e){
	if(btnUppercase.innerHTML == 'uppercase'){
		coverContent.className = 'uppercase';
		btnUppercase.innerHTML = 'lower case';
	}else{
		coverContent.className = 'lowercase';
		btnUppercase.innerHTML = 'uppercase';
	}
}