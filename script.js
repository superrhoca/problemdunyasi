
async function loadQuestions() {
  const response = await fetch("soru/toplama.json");
  const questions = await response.json();
  const randomQs = questions.sort(() => 0.5 - Math.random()).slice(0, 10);
  const leftCol = document.getElementById("left-col");
  const rightCol = document.getElementById("right-col");
  randomQs.forEach((q, i) => {
    let div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `<b>${i+1})</b> ${q}<br><span class="answer"></span>`;
    if (i < 5) { leftCol.appendChild(div); } else { rightCol.appendChild(div); }
  });
}
loadQuestions();
