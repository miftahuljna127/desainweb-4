var tanggal = new Date();

arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
date = new Date();
hari = date.getDay();
tanggal = date.getDate();
bulan = date.getMonth();
tahun = date.getFullYear();

document.write(tanggal+"-"+arrbulan[bulan]+"-"+tahun);
document.getElemenById("Hasil").innerHTML = tanggal;
document.querySelector('home').onclick = function() {
            
            alert('Ohh, halaman diklik !')
}

