var Nrp1 = document.getElementById('nrp');
var Jurusan = document.getElementById('jurusan');

Nrp1.addEventListener('keyup', function() {
var Nrp2 = Nrp1.value;
if(Nrp2.match(/(301)/)){
jurusan.selectedIndex = 1;
}
				
else if(Nrp2.match(/(302)/)){
	jurusan.selectedIndex = 2;
}
				
else if(Nrp2.match(/(303)/)){
	jurusan.selectedIndex = 3;
}
				
else if(Nrp2.match(/(304)/)){
	jurusan.selectedIndex = 4;
}
				
else if(Nrp2.match(/(305)/)){
	jurusan.selectedIndex = 5;
}
				
else if(Nrp.match(/(306)/)){
	jurusan.selectedIndex = 6;
}
				
});

function pilihjurusan(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode
	if (charCode > 31 && (charCode < 48 ||charCode > 57)) 
	return false;
	return true;
}