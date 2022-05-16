const btn = [...document.querySelectorAll(".pagination-btn")];
const img = document.getElementById("img-container");
const phrase = document.getElementById("phrase");
const phrases = [
  "some text1",
  "some text and text 2",
  "some text and heaadings 3",
  "some text",
];

btn.map((value, index) => {
  console.log(value);
  value.addEventListener("click", function () {
    if (document.querySelector(".current")) {
      document.querySelector(".current").classList.remove("current");
    }
    console.log(img.src.slice(0, -5) + index);
    img.src = `assets/img${index + 1}.jpg`;
    phrase.textContent = phrases[index];
    value.classList.add("current");
  });
});
