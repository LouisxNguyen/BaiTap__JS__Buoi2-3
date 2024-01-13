// Bài tập 1: Tính lương nhân viên theo ngày
document.getElementById("btnResult1").onclick = function () {
    let soNgay = document.getElementById("soNgay").value;
    let tongLuong = Number(soNgay) * 100000;
    document.getElementById("textResult1").innerHTML = 'Tổng lương nhân viên: ' + tongLuong.toLocaleString() + ' VNĐ';
    document.getElementById("textResult1").className = 'aler alert-success';
}

// Bài tập 2: Tính trung bình 5 số thực
document.getElementById("btnResult2").onclick = function () {
    let soHang1 = Number(document.getElementById("soHang1").value);
    let soHang2 = Number(document.getElementById("soHang2").value);
    let soHang3 = Number(document.getElementById("soHang3").value);
    let soHang4 = Number(document.getElementById("soHang4").value);
    let soHang5 = Number(document.getElementById("soHang5").value);
    let trungBinh = 0;
    trungBinh = (soHang1+soHang2+soHang3+soHang4+soHang5)/5;
    document.getElementById("textResult2").innerHTML = 'Tổng trung bình 5 số hạng: ' + trungBinh.toLocaleString();
    document.getElementById("textResult2").className = 'aler alert-success';
}

// Bài tập 3: Quy đổi USD sang VNĐ
document.getElementById("btnResult3").onclick = function () {
    let soUSD = document.getElementById("soUSD").value;
    let soVND = Number(soUSD) * 23500;
    document.getElementById("textResult3").innerHTML = 'Mệnh giá VNĐ: ' + soVND.toLocaleString() + ' VNĐ';
    document.getElementById("textResult3").className = 'aler alert-success';
}

// Bài tập 4: Tính chu vi + diện tích Hình chữ nhật
document.getElementById("btnResult4").onclick = function () {
    let chieuDai = Number(document.getElementById("chieuDai").value);
    let chieuRong = Number(document.getElementById("chieuRong").value);
    let dienTich = chieuDai*chieuRong;
    let chuVi = (chieuDai + chieuRong)*2;
    document.getElementById("textResult4").innerHTML = 'Diện tích: ' + dienTich.toLocaleString() + ' cm^2';
    document.getElementById("textResult4__2").innerHTML = 'Chu vi: ' + dienTich.toLocaleString() + ' cm';
    document.getElementById("textRS").className = 'aler alert-success my-2';
}

// Bài tập 5: Tính tổng 2 chữ số của một số hạng
document.getElementById("btnResult5").onclick = function () {
    let soHang = Number(document.getElementById("soHang").value);
    let soChuc = Math.floor(soHang/10);
    let soDonvi = soHang%10;
    let tong2chuSo = soChuc + soDonvi;
    document.getElementById("textResult5").innerHTML = 'Tổng hai chữ số của số hạng: ' + tong2chuSo.toLocaleString();
    document.getElementById("textResult5").className = 'aler alert-success my-2';
}