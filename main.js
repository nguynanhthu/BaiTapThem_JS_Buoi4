//Bài 1

var isLeapYear = function (year) {
	if (year % 400 === 0) return true;
	if (year % 4 === 0 && year % 100 != 0) return true;

	return false;
};

var dateInMonth = function (thang, nam) {
	var ketQua;
	if (
		thang == 1 ||
		thang == 3 ||
		thang == 5 ||
		thang == 7 ||
		thang == 8 ||
		thang == 10 ||
		thang == 12
	) {
		ketQua = 31;
	} else if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
		ketQua = 30;
	} else if (thang == 2) {
		if (isLeapYear(nam) == true) {
			ketQua = 29;
		} else {
			ketQua = 28;
		}
	} else {
		ketQua = false;
	}
	return ketQua;
};
document.getElementById("tinhNgayThangNam").onclick = function () {
	var day = Number(document.getElementById("txt_ngay").value);
	var month = Number(document.getElementById("txt_thang").value);
	var year = Number(document.getElementById("txt_nam").value);

	var nextDay = 0;
	var preDay = 0;
	var nextMonth = 0;
	var preMonth = 0;
	var nextYear = 0;
	var preYear = 0;

	if (day === 1) {
		if (month === 1) {
			preDay = 31;
			preMonth = 12;
			preYear = year - 1;
		} else {
			preDay = dateInMonth(month - 1, year);
			preMonth = month - 1;
			preYear = year;
		}
		nextDay = day + 1;
		nextMonth = month;
		nextYear = year;
	} else {
		if (dateInMonth(month, year) === day) {
			preDay = day - 1;
			preMonth = month;
			preYear = year;
			nextDay = 1;
			if (month === 12) {
				nextMonth = 1;
				nextYear = year + 1;
			} else {
				nextMonth = month + 1;
				nextYear = year;
			}
		} else {
			nextDay = day + 1;
			nextMonth = month;
			nextYear = year;
			preDay = day - 1;
			preMonth = month;
			preYear = year;
		}
	}
	document.getElementById("xuatNgayThangNam").innerHTML =
		"Ngày tháng năm tiếp theo là: " +
		nextDay +
		"/" +
		nextMonth +
		"/" +
		nextYear +
		", " +
		"Ngày tháng năm trước đó là: " +
		preDay +
		"/" +
		preMonth +
		"/" +
		preYear;
};

// Bài 2
document.getElementById("tinhNgay").onclick = function () {
	var thang = Number(document.getElementById("nhap_thang").value);
	var nam = Number(document.getElementById("nhap_nam").value);
	var ketQua = dateInMonth(thang, nam);

	if (ketQua == false)
		document.getElementById("xuatNgay").innerHTML = "Nhập sai tháng";
	else
		document.getElementById("xuatNgay").innerHTML =
			"Số ngày trong tháng là " + ketQua;
};

// bài 3
document.getElementById("tinhSoNguyen").onclick = function () {
	var nhap = document.getElementById("txt_nhap").value;
	var hangTram = Math.floor(nhap / 100);
	var hangChuc = Math.floor((nhap % 100) / 10);
	var hangDonVi = Math.floor((nhap % 100) % 10);

	var inHangTram = "";
	var inHangChuc = "";
	var inHangDonVi = "";

	console.log(hangTram);
	console.log(hangChuc);
	console.log(hangDonVi);
	if (hangTram <= 9 || hangTram >= 1) {
		switch (hangTram) {
			case 1:
				inHangTram = "Một trăm";
				break;
			case 2:
				inHangTram = "Hai trăm";
				break;
			case 3:
				inHangTram = "Ba trăm";
				break;
			case 4:
				inHangTram = "Bốn trăm";
				break;
			case 5:
				inHangTram = "Năm trăm";
				break;
			case 6:
				inHangTram = "Sáu trăm";
				break;
			case 7:
				inHangTram = "Bảy trăm";
				break;
			case 8:
				inHangTram = "Tám trăm";
				break;
			case 9:
				inHangTram = "Chín trăm";
				break;
		}
	}

	if (hangChuc <= 9 || hangChuc >= 1) {
		switch (hangChuc) {
			case 1:
				inHangChuc = "mười";
				break;
			case 2:
				inHangChuc = "hai mươi";
				break;
			case 3:
				inHangChuc = "ba mươi";
				break;
			case 4:
				inHangChuc = "bốn mươi";
				break;
			case 5:
				inHangChuc = "năm mươi";
				break;
			case 6:
				inHangChuc = "sáu mươi";
				break;
			case 7:
				inHangChuc = "bảy mươi";
				break;
			case 8:
				inHangChuc = "tám mươi";
				break;
			case 9:
				inHangChuc = "chín mươi";
				break;
		}
	}

	if (hangDonVi >= 1 || hangDonVi <= 0) {
		switch (hangDonVi) {
			case 1:
				if (hangChuc === 1) inHangDonVi = "một";
				else inHangDonVi = "mốt";
				break;
			case 2:
				inHangDonVi = "hai";
				break;
			case 3:
				inHangDonVi = "ba";
				break;
			case 4:
				inHangDonVi = "bốn";
				break;
			case 5:
				inHangDonVi = "lăm";
				break;
			case 6:
				inHangDonVi = "sáu";
				break;
			case 7:
				inHangDonVi = "bảy";
				break;
			case 8:
				inHangDonVi = "tám";
				break;
			case 9:
				inHangDonVi = "chín";
				break;
		}
	}

	document.getElementById("xuatSoNguyen").innerHTML =
		"Cách đọc là: " + inHangTram + " " + inHangChuc + " " + inHangDonVi;
};

// bài 4

document.getElementById("tinhToaDo").onclick = function () {
	var x1 = Number(document.getElementById("txt_x1").value);
	var y1 = Number(document.getElementById("txt_y1").value);
	var x2 = Number(document.getElementById("txt_x2").value);
	var y2 = Number(document.getElementById("txt_y2").value);
	var x3 = Number(document.getElementById("txt_x3").value);
	var y3 = Number(document.getElementById("txt_y3").value);
	var x4 = Number(document.getElementById("txt_x4").value);
	var y4 = Number(document.getElementById("txt_y4").value);
	var ketQua = "";

	//Tính khoảng cách các tọa độ
	// var d1 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	// console.log(d1);
	var d1 = Math.floor(Math.sqrt(Math.pow(x4 - x1, 2) + Math.pow(y4 - y1, 2)));
	console.log(d1);
	var d2 = Math.floor(Math.sqrt(Math.pow(x4 - x2, 2) + Math.pow(y4 - y2, 2)));
	console.log(d2);
	var d3 = Math.floor(Math.sqrt(Math.pow(x4 - x3, 2) + Math.pow(y4 - y3, 2)));
	console.log(d3);

	if (d1 - d2 > 0 && d1 - d3 > 0) {
		ketQua = "Sinh viên A xa trường nhất";
	} else if (d2 - d1 > 0 && d2 - d3 > 0) {
		ketQua = "Sinh viên B xa trường nhất";
	} else if (d3 - d1 > 0 && d3 - d2 > 0) {
		ketQua = "Sinh viên C xa trường nhất";
	} else if ((d3 = d2 = d1)) {
		ketQua = "Khoảng cách đến trường của 3 người bằng nhau";
	} else {
	}

	document.getElementById("xuatToaDo").innerHTML = ketQua;
};