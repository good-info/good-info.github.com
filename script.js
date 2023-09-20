function calculate() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert("입력값을 확인하세요.");
        return;
    }

    var tableHTML = "<table>";
    tableHTML += "<tr><th>년도</th><th>원금(원)</th><th>이자(원)</th><th>누적(원)</th></tr>";

    for (var year = 1; year <= time; year++) {
        var interest = Math.floor(principal * rate / 100);
        var total = Math.floor(principal + interest);
        tableHTML += "<tr>";
        tableHTML += "<td>" + year + "년</td>";
        tableHTML += "<td>" + formatNumberWithCommas(principal) + "원</td>";
        tableHTML += "<td>" + formatNumberWithCommas(interest) + "원</td>";
        tableHTML += "<td>" + formatNumberWithCommas(total) + "원</td>";
        tableHTML += "</tr>";
        principal = total;
    }

    tableHTML += "</table>";
    document.getElementById("result").innerHTML = "<h2>년도별 복리 계산 결과</h2>" + tableHTML;
}

// 숫자를 1000단위 콤마로 형식화하는 함수
function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
