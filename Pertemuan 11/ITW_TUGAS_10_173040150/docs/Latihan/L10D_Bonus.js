var hasil = document.getElementById('hasil');
	var inputBaris = document.getElementById('input-baris');
	var tombolTampilkan = document.getElementById('tombol-tampilkan');

	tombolTampilkan.addEventListener('click', function(){

	hasil.innerHTMl = '';

	for( var i = 1; i <= inputBaris.value; i++ ) {

	for( var j = inputBaris.value; j >= 1; j--) {
	if(j >= i) {
		var box = document.createElement('div');
		box.className = 'box';
		box.innerHTML = parseInt(inputBaris.value)-parseInt(j-1);
		hasil.appendChild(box);
	}
	else{
		for( var k = inputBaris.value; k >= j; k--) {
			if(k <= j) {
			var box1 = document.createElement('div');
			box1.className = 'box1';
			box1.innerHTML = parseInt(inputBaris.value)-parseInt(k-1);
			hasil.appendChild(box1);	
			}
			}
		}
	}

	var br = document.createElement('br');
	hasil.appendChild(br);
				
	}

	inputBaris.value = '';

	});