let currentQuestion = 1;
const totalQuestions = 5;

document.addEventListener("DOMContentLoaded", () => {
    showQuestion(currentQuestion);
    updateButton();
    document.querySelectorAll('.answer-input').forEach(input => {
        input.addEventListener('input', updateButton);
    });
});

function showQuestion(questionNumber) {
    document.querySelectorAll(".question").forEach((question, index) => {
        question.style.display = (index + 1 === questionNumber) ? "block" : "none";
    });
}

function updateButton() {
    const currentAnswer = document.getElementById(`answer${currentQuestion}`).value.trim();
    const nextBtn = document.getElementById("nextBtn");
    nextBtn.disabled = currentAnswer === "";
}

function nextQuestion() {
    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        showQuestion(currentQuestion);
        updateButton();
    } else {
        alert("Quiz completato!");
    }
}
