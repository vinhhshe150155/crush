const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const additionalMessage = document.querySelector(".additional-message");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Tới công chuyện với bà mày rồi =)))))";
  gif.src =
    "https://media.giphy.com/media/MFkTITj69pMOPlbfeX/giphy.gif";
  // Ẩn cả hai nút "Yes" và "No"
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
