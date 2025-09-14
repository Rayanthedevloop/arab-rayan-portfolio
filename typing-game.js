export function initializeTypingGame() {
    const gameTextElement = document.getElementById('game-text');
    const gameInputElement = document.getElementById('game-input');
    const startGameBtn = document.getElementById('start-game-btn');
    const timerElement = document.getElementById('timer');
    const wpmElement = document.getElementById('wpm');
    const gameResultElement = document.getElementById('game-result');

    const textSnippets = [
        "Le protocole TCP/IP est la base de la communication sur Internet.",
        "La virtualisation permet de créer plusieurs machines virtuelles sur un seul serveur physique.",
        "Un pare-feu filtre le trafic réseau pour protéger contre les accès non autorisés.",
        "L'administration système implique la gestion et la maintenance des serveurs et des réseaux.",
        "Le DNS traduit les noms de domaine lisibles par l'homme en adresses IP.",
        "Le déploiement d'une image Windows peut être automatisé pour plus d'efficacité.",
        "La cybersécurité est un domaine crucial pour protéger les données sensibles."
    ];

    let timer;
    let time = 0;
    let currentSnippet = '';
    let characterTyped = 0;

    function startGame() {
        gameResultElement.classList.add('hidden');
        gameResultElement.textContent = '';
        wpmElement.textContent = '0';
        timerElement.textContent = '0';
        time = 0;
        characterTyped = 0;

        currentSnippet = textSnippets[Math.floor(Math.random() * textSnippets.length)];
        gameTextElement.innerHTML = '';
        currentSnippet.split('').forEach(char => {
            const span = document.createElement('span');
            span.innerText = char;
            gameTextElement.appendChild(span);
        });

        gameInputElement.value = '';
        gameInputElement.disabled = false;
        gameInputElement.focus();
        startGameBtn.textContent = 'Recommencer';

        clearInterval(timer);
        timer = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
        time++;
        timerElement.textContent = time;
        const wordsTyped = (characterTyped / 5);
        const wpm = time > 0 ? Math.round((wordsTyped / time) * 60) : 0;
        wpmElement.textContent = wpm;
    }

    function checkInput() {
        const textChars = gameTextElement.querySelectorAll('span');
        const inputChars = gameInputElement.value.split('');
        characterTyped = 0;

        let allCorrect = true;
        textChars.forEach((charSpan, index) => {
            const char = inputChars[index];
            if (char == null) {
                charSpan.classList.remove('correct', 'incorrect');
                allCorrect = false;
            } else if (char === charSpan.innerText) {
                charSpan.classList.add('correct');
                charSpan.classList.remove('incorrect');
                characterTyped++;
            } else {
                charSpan.classList.add('incorrect');
                charSpan.classList.remove('correct');
                allCorrect = false;
            }
        }); 

        if (allCorrect) {
            endGame();
        }
    }

    function endGame() {
        clearInterval(timer);
        gameInputElement.disabled = true; 

        const finalWPM = wpmElement.textContent;
        gameResultElement.textContent = `Terminé ! Votre score : ${finalWPM} WPM.`;
        gameResultElement.classList.remove('hidden');
        startGameBtn.textContent = 'Rejouer';
    }

    startGameBtn.addEventListener('click', startGame);
    gameInputElement.addEventListener('input', checkInput);
}