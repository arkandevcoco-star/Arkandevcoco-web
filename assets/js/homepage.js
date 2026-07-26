const tanggalLahir = new Date("2011-09-24T00:00:00");

function hitungUmur() {
    const sekarang = new Date();

    let tahun = sekarang.getFullYear() - tanggalLahir.getFullYear();
    let bulan = sekarang.getMonth() - tanggalLahir.getMonth();
    let hari = sekarang.getDate() - tanggalLahir.getDate();

    if (hari < 0) {
        bulan--;
        hari += new Date(
            sekarang.getFullYear(),
            sekarang.getMonth(),
            0
        ).getDate();
    }

    if (bulan < 0) {
        tahun--;
        bulan += 12;
    }

    document.getElementById("umur").textContent =
        `${tahun} Tahun ${bulan} Bulan ${hari} Hari`;
}

hitungUmur();            // Jalankan saat halaman dibuka
setInterval(hitungUmur, 1000); // Update setiap detik