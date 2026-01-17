document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn.home, .btn.ab, .btn.con');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`Proceeding to: ${button.textContent}`);
        });
    });
});