function runCode() {
  const input = document.getElementById("scoreInput");
  const score = parseFloat(input.value);
  const output = document.getElementById("output");

  if (isNaN(score) || score < 0 || score > 10) {
    output.innerHTML = '<span style="color:#f87171;">⚠ Vui lòng nhập điểm hợp lệ từ 0 đến 10.</span>';
    resetChecks();
    return;
  }

  let lines = [];

  // TODO 1: dùng if...else if...else để in ra xếp loại
  let xepLoai;
  if (score >= 9) {
    xepLoai = "Xuất sắc";
  } else if (score >= 8) {
    xepLoai = "Giỏi";
  } else if (score >= 6.5) {
    xepLoai = "Khá";
  } else if (score >= 5) {
    xepLoai = "Trung bình";
  } else {
    xepLoai = "Yếu";
  }

  lines.push(`Điểm: <span class="highlight">${score}</span> → Xếp loại: <span class="highlight">${xepLoai}</span>`);
  lines.push("");

  // TODO 2: viết vòng for in các số từ 1 đến 5
  lines.push('In các số từ 1 đến 5 bằng vòng for:');
  let soList = [];
  for (let i = 1; i <= 5; i++) {
    soList.push(i);
  }
  lines.push("  " + soList.join("  "));
  lines.push("");

  // TODO 3: viết vòng for tính tổng từ 1 đến 5
  let total = 0;
  for (let i = 1; i <= 5; i++) {
    total += i;
  }
  lines.push(`Tổng = <span class="total">${total}</span>`);

  output.innerHTML = lines.join("\n");

  // Tự động tick checklist
  setCheck(1, true);
  setCheck(2, true);
  setCheck(3, total === 15);
}

function setCheck(n, done) {
  const cb = document.getElementById("cb" + n);
  const item = document.getElementById("check" + n);
  cb.checked = done;
  if (done) {
    item.classList.add("done");
  } else {
    item.classList.remove("done");
  }
}

function resetChecks() {
  for (let i = 1; i <= 3; i++) setCheck(i, false);
}

// Chạy ngay khi tải trang với giá trị mặc định
window.onload = () => runCode();
