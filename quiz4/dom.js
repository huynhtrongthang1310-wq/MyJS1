const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const btnChange = document.getElementById("btnChange");
const btnStyle = document.getElementById("btnStyle");
const btnReset = document.getElementById("btnReset");
const logText = document.getElementById("logText");
const demoCard = document.getElementById("demoCard");

// Trạng thái hiện tại
let contentChanged = false;
let styleChanged = false;

// TODO: đổi title thành "Học DOM thật vui!" và đổi màu chữ
btnChange.addEventListener("click", function () {
  if (!contentChanged) {
    title.textContent = "Học DOM thật vui!";
    subtitle.textContent = "Nội dung đã được thay đổi bằng JavaScript — title.textContent = '...'";
    title.classList.add("changed");
    btnChange.textContent = "Khôi phục nội dung";
    logText.textContent = 'title.textContent = "Học DOM thật vui!" ✅';
  } else {
    title.textContent = "Xin chào";
    subtitle.textContent = "Đây là bài thực hành DOM — thay đổi nội dung và giao diện bằng JavaScript.";
    title.classList.remove("changed");
    btnChange.textContent = "Đổi nội dung";
    logText.textContent = 'title.textContent = "Xin chào" — đã khôi phục';
  }
  contentChanged = !contentChanged;
});

// TODO: đổi màu nền hoặc giao diện
btnStyle.addEventListener("click", function () {
  if (!styleChanged) {
    document.body.classList.add("dark");
    demoCard.classList.add("highlight");
    btnStyle.textContent = "Khôi phục giao diện";
    logText.textContent = 'document.body.classList.add("dark") ✅ — đã đổi sang dark mode';
  } else {
    document.body.classList.remove("dark");
    demoCard.classList.remove("highlight");
    btnStyle.textContent = "Đổi giao diện";
    logText.textContent = 'document.body.classList.remove("dark") — đã khôi phục';
  }
  styleChanged = !styleChanged;
});

// Reset tất cả
btnReset.addEventListener("click", function () {
  title.textContent = "Xin chào";
  subtitle.textContent = "Đây là bài thực hành DOM — thay đổi nội dung và giao diện bằng JavaScript.";
  title.classList.remove("changed");
  document.body.classList.remove("dark");
  demoCard.classList.remove("highlight");
  btnChange.textContent = "Đổi nội dung";
  btnStyle.textContent = "Đổi giao diện";
  logText.textContent = "Đã reset về trạng thái ban đầu.";
  contentChanged = false;
  styleChanged = false;
});
