// Bài 5 — Event playground: click, change, keyup, submit

// 1. click — bấm nút → hiện thông báo hoặc đổi chữ
const btnClick = document.getElementById("btnClick");
const clickResult = document.getElementById("clickResult");
let clickCount = 0;

btnClick.addEventListener("click", function () {
  clickCount++;
  clickResult.textContent = `Đã bấm ${clickCount} lần!`;
  btnClick.textContent = clickCount === 1 ? "Bấm thêm nữa" : `Bấm thêm (${clickCount})`;
});

// 2. change — chọn màu → đổi văn bản kết quả
const colorSelect = document.getElementById("colorSelect");
const changeResult = document.getElementById("changeResult");

const colorNames = {
  red: "Đỏ 🔴",
  blue: "Xanh dương 🔵",
  green: "Xanh lá 🟢",
  orange: "Cam 🟠",
  purple: "Tím 🟣",
};

colorSelect.addEventListener("change", function () {
  const val = this.value;
  if (val) {
    changeResult.textContent = `Bạn đã chọn màu: ${colorNames[val]}`;
    changeResult.style.color = val;
  } else {
    changeResult.textContent = "Chưa chọn màu";
    changeResult.style.color = "#1a1a1a";
  }
});

// 3. keyup — gõ tên → hiển thị xem trước
const nameInput = document.getElementById("nameInput");
const namePreview = document.getElementById("namePreview");

nameInput.addEventListener("keyup", function () {
  const val = this.value.trim();
  namePreview.textContent = val !== "" ? val : "...";
});

// 4. submit — gửi form → chặn mặc định bằng preventDefault()
const myForm = document.getElementById("myForm");
const emailInput = document.getElementById("emailInput");
const submitResult = document.getElementById("submitResult");

myForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Chặn trang reload

  const email = emailInput.value.trim();

  if (email === "") {
    submitResult.textContent = "⚠ Vui lòng nhập email trước khi gửi.";
    submitResult.className = "result error";
    return;
  }

  submitResult.textContent = `✅ Form đã được gửi thành công! Email: ${email}`;
  submitResult.className = "result success";
  emailInput.value = "";
});
