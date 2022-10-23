export const accordion = () => {
  const questions = document.querySelectorAll("#accordion > p"),
    answers = document.querySelectorAll("#accordion > div");

  const showAnswers = (question, answer) => {
    question.classList.toggle("ui-accordion-header-active");

    if (question.classList.contains("ui-accordion-header-active")) {
      answer.classList.add("active");
      answer.style.maxHeight = `${answer.scrollHeight + 80}px`;
    } else {
      answer.classList.remove("active");
      answer.style.maxHeight = "0px";
    }
  };

  questions.forEach((question, index) => {
    const answer = answers[index];
    question.tabIndex = "0";
    question.addEventListener("click", () => {
      showAnswers(question, answer);
    });
    question.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        showAnswers(question, answer);
      }
    });
  });
};
