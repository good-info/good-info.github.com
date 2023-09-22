document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generateButton');
    const lottoNumbers = document.getElementById('lottoNumbers');

    generateButton.addEventListener('click', function () {
        const numbers = generateLottoNumbers();
        displayLottoNumbers(numbers);
    });

    function generateLottoNumbers() {
        const lottoNumbers = [];
        while (lottoNumbers.length < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            if (!lottoNumbers.includes(randomNumber)) {
                lottoNumbers.push(randomNumber);
            }
        }
        return lottoNumbers.sort((a, b) => a - b);
    }

    function displayLottoNumbers(numbers) {
        lottoNumbers.innerHTML = '';
        numbers.forEach((number, index) => {
            const ball = document.createElement('div');
            ball.classList.add('lotto-ball', `ball-${index + 1}`);
            ball.innerText = number;
            lottoNumbers.appendChild(ball);
        });
    }
});
