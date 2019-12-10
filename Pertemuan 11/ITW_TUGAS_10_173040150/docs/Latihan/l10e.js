var close = document.getElementsByTagName('span');
for (var i = 0; i < close.length; i++) {
	close[i].addEventListener('click', function(){
		if(confirm('hapus gambar?')) {
			this.parentNode.style.display =	'none';
		}
	});
}