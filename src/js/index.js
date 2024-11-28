const button = document.querySelector(".advice-update");
const number = document.querySelector(".advice-id");
const description = document.querySelector(".advice-description");

async function getAdvice() {
  try {
    const url = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await url.json();
    const changeId = `Advice #${adviceContent.slip.id}`;
    const changeText = `"${adviceContent.slip.advice}"`;

    number.innerText = changeId;
    description.innerText = changeText;
  } catch (error) {
    console.log("Ocorreu um erro ao tentar buscar as informações na API");
  }
}

button.addEventListener("click", getAdvice);
getAdvice();
