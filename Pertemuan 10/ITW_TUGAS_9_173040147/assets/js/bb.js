var lemari = [];

var input = document.getElementById('input');
var jumlah = document.getElementById('jumlah');
var isiLemari = document.getElementById('isi-lemari');

input.addEventListener('keyup', simpan);
function simpan(e){
	if(e.which == 13 && input.value != ""){

		lemari.push(input.value);
		var jumlahIsiLemari = lemari.length;
		jumlah.innerHTML = jumlahIsiLemari;
		isiLemari.innerHTML = lemari.toString();
		reset(input);
	}
}
	function reset(input){
			input.value ="";
	}