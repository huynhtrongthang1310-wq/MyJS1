// Đáp án đúng: câu 1 → index 1, câu 2 → index 2, câu 3 → index 0
const correctAnswers = { 1: 1, 2: 2, 3: 0 };

function checkAll() {
  let score = 0;

  for (let q = 1; q <= 3; q++) {
    const card = document.getElementById("q" + q);
    const options = card.querySelectorAll(".option");
    const selected = card.querySelector("input[name='q" + q + "']:checked");
    const explain = document.getElementById("ex" + q);

    // Disable inputs after checking
    card.querySelectorAll("input").forEach(input => (input.disabled = true));

    const selectedIndex = selected ? parseInt(selected.value) : null;

    options.forEach((opt, i) => {
      opt.classList.remove("correct", "wrong");
      if (i === correctAnswers[q]) {
        opt.classList.add("correct");
      } else if (i === selectedIndex && selectedIndex !== correctAnswers[q]) {
        opt.classList.add("wrong");
      }
    });

    if (selectedIndex === correctAnswers[q]) score++;

    explain.classList.add("show");
  }

  const scorebox = document.getElementById("scorebox");
  const scorenum = document.getElementById("scorenum");
  const scorelabel = document.getElementById("scorelabel");

  scorenum.textContent = score + "/3";

  if (score === 3) {
    scorelabel.textContent = "Xuất sắc! Bạn trả lời đúng tất cả.";
  } else if (score === 2) {
    scorelabel.textContent = "Tốt lắm! Xem lại phần giải thích bên trên nhé.";
  } else {
    scorelabel.textContent = "Cần ôn lại — đọc phần giải thích để hiểu rõ hơn.";
  }

  scorebox.classList.add("show");
}

function resetAll() {
  for (let q = 1; q <= 3; q++) {
    const card = document.getElementById("q" + q);
    const options = card.querySelectorAll(".option");
    const inputs = card.querySelectorAll("input");

    options.forEach(opt => opt.classList.remove("correct", "wrong"));
    inputs.forEach(input => {
      input.disabled = false;
      input.checked = false;
    });

    document.getElementById("ex" + q).classList.remove("show");
  }

  document.getElementById("scorebox").classList.remove("show");
}
