// Nama : Fahrul Muhammad Neor
// exercise 4 week 3 phase 0

// //contoh output
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
// ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  

function dataHandling2(info = []) {
    info.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    info.splice(4, 1, "Pria", "SMA Internasional Metro");

    var tanggal = info[3].split("/");
    var tanggalbaru = tanggal.join("-");
    var bulan = ""
    switch (Number(tanggal[1])) {
        case 1:
            bulan = "Januari"
            break;
        case 2:
            bulan = "Februari"
            break;
        case 3:
            bulan = "Maret"
            break;
        case 4:
            bulan = "April"
            break;
        case 5:
            bulan = "Mei"
            break;
        case 6:
            bulan = "Juni"
            break;
        case 7:
            bulan = "Juli"
            break;
        case 8:
            bulan = "Agustus"
            break;
        case 9:
            bulan = "September"
            break;
        case 10:
            bulan = "Oktober"
            break;
        case 11:
            bulan = "November"
            break;
        case 12:
            bulan = "Desember"
            break;

        default:
            console.log("Bulan Salah")
            break;
    }
    var nama = info[1].slice(0,15);

    console.log(info);
    console.log(bulan);
    console.log(tanggal.sort(function(a, b) { return b - a }));
    console.log(tanggalbaru);
    console.log(nama);
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */