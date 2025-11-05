let wrongAttempts = 0;

function checkPassword() {
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");
    const hintButton = document.getElementById("hintButton");

    if (password === "08.03.25/20:55") {
        // переход на страницу поздравления
        window.location.href = "happy.html";
    } else {
        wrongAttempts++;
        message.textContent = "Неправильный пароль 😿";
        if (wrongAttempts === 1) {
            hintButton.style.display = "inline-block"; // показать кнопку после первой ошибки
        }
    }
}

function showHint() {
    document.getElementById("hint").style.display = "block";
}
