// memberi warna
const tUbahWarna = document.getElementById('tUbahWarna'); // tangkap dulu tombolnya
	// cara 1
	// tUbahWarna.addEventListener('click', function(){
	// 	document.body.style.backgroundColor = 'lightblue';
	// });

	// cara 2
	tUbahWarna.onclick = function() {
		// document.body.style.backgroundColor = 'lightgreen'; //cara1
		// document.body.setAttribute('class', 'biru-muda'); //cara2
		document.body.classList.toggle('biru-muda'); //cara3 memanipulasi class
	}


// memberi warna acak
	const tAcakWarna = document.createElement('button');
	const teksAcakWarna = document.createTextNode('Warna Acak'); 
	tAcakWarna.appendChild(teksAcakWarna);
	tAcakWarna.setAttribute('type', 'button'); //memberikan attribute
	const tBaru = document.getElementById('tUbahWarna');
	tBaru.after(tAcakWarna); 

	// membuat fungsi dari tombol acak warna
		tAcakWarna.addEventListener('click', function(){
			const r = Math.round(Math.random() * 255 + 1); //membuat rumus angka acak 
			const g = Math.round(Math.random() * 255 + 1); //membuat rumus angka acak 
			const b = Math.round(Math.random() * 255 + 1); //membuat rumus angka acak 
			// console.log(r); //melihat var r di console
			document.body.style.backgroundColor = 'rgb('+ r +', '+ g +','+ b +')'; //merubah warna menjadi random
		});


// memberi fungsi pada slider 
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
	sMerah.addEventListener('input', function() {
		// console.log(sMerah.value); // melihat value pada slider merah di console	
		const r = sMerah.value;
		const g = sHijau.value;
		const b = sBiru.value;
		document.body.style.backgroundColor = 'rgb('+ r +', '+ g +' , '+ b +')'; //merubah warna menjadi random
	});

	sHijau.addEventListener('input', function() {
		const r = sMerah.value;
		const g = sHijau.value;
		const b = sBiru.value;
		document.body.style.backgroundColor = 'rgb('+ r +', '+ g +' , '+ b +')'; //merubah warna menjadi random
	});

	sBiru.addEventListener('input', function() {
		const r = sMerah.value;
		const g = sHijau.value;
		const b = sBiru.value;
		document.body.style.backgroundColor = 'rgb('+ r +', '+ g +' , '+ b +')'; //merubah warna menjadi random
	});


// mengubah warna melalui cursor
document.body.addEventListener('mousemove', function(event){
	// posisi mouse
	// console.log(event.clientX);  // untuk mengetahui posisi/value mouse ketika di geser
	// console.log(event.clientY);  // untuk mengetahui posisi/value mouse ketika di geser
	// ukuran browser
	// console.log(window.innerWidth);  // untuk mengetahui ukuran window 

	// posisi x
	const xPos = Math.round((event.clientX / window.innerWidth) * 255);  // menentukan value yang akan di jadikan rgb nya
	// posisi x
	const yPos = Math.round((event.clientY / window.innerWidth) * 255);  // menentukan value yang akan di jadikan rgb nya

	document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +' , '+ 100 +')';  // merubah warna menjadi random		
});