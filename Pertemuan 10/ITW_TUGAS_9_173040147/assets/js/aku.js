alert("Silahkan isi Username dan Password!!");

				function login() {
					var user = document.getElementById('user').value;
					var pass = document.getElementById('pass').value;

					if (user == "admin" && pass == "admin"){
						alert("Selamat datang akun!");
						location = "admin.html";
					}else if (user == "" && pass == ""){
					alert("Anda belum mengisi Username atau Password!");
					}else{
					alert("pastikan anda mengisi Username atau password yang anda masukkan benar!");
					}
				}