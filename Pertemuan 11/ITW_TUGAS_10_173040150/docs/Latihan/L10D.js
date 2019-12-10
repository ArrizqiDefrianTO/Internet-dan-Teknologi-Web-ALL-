var hasil = document.getElementById('hasil');
	var inputBaris = document.getElementById('input-baris');
	var tombolTampilkan = document.getElementById('tombol-tampilkan');

	tombolTampilkan.addEventListener('click', function(){

	hasil.innerHTMl = '';

	for( var i = 1; i <= inputBaris.value; i++ ) {

		for( var j = 1; j <= i; j++) {
			var box = document.createElement('div');
			box.className = 'box';
			box.innerHTML = parseInt(inputBaris.value)-parseInt(j-1);
			hasil.appendChild(box);
		}

			var br = document.createElement('br');
			hasil.appendChild(br);
				
		}

		inputBaris.value = '';

	});