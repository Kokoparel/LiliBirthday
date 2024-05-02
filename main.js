function createConfetti() {
    const colors = ['#FFC0CB', '#FFD700', '#8A2BE2', '#00FF00', '#00BFFF', '#FF6347']; // Fun colors
    const confettiCount = 400;
    const confettiWrapper = document.getElementById('confetti-wrapper');

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const widthHeight = `${Math.random() * 8 + 5}px`;
        const opacity = Math.random() + 0.3;

        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * window.innerWidth}px`;
        confetti.style.background = color;
        confetti.style.opacity = opacity;
        confetti.style.width = widthHeight;
        confetti.style.height = widthHeight;
        confetti.style.transform = `scale(${Math.random() + 0.5})`;

        // Improved initial vertical position
        const initialYPosition = -(Math.random() * 100 + 20); // Start positions scattered more naturally

        const rotation = Math.random() * 360;
        const xEnd = Math.random() * (window.innerWidth / 2) - window.innerWidth / 4;
        const yEnd = window.innerHeight + 100;
        const duration = Math.random() * 3.5 + 2;

        confetti.style.animation = `confetti-fall ${duration}s ease-in-out forwards`;
        confetti.style.animationDelay = `${Math.random() * 25}s`; // Shorter delay
        confetti.style.transform = `translateY(${initialYPosition}vh) rotate(${rotation}deg)`;

        confettiWrapper.appendChild(confetti);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen kartu
    var cardFront = document.querySelector('.cardFront');

    // Tambahkan event listener untuk saat kartu ditekan
    cardFront.addEventListener('click', function() {
        // Mulai pemutaran audio saat kartu diklik
        var audio = document.querySelector('audio');
        audio.play();

        // Panggil fungsi untuk membuat confetti jatuh
        createConfetti();
        
        // Toggling the opening/closing of the card
        if (cardFront.style.transform === 'rotateY(-160deg)') {
            cardFront.style.transform = 'rotateY(0deg)';
        } else {
            cardFront.style.transform = 'rotateY(-160deg)';
        }
    });
});
var cardInside = document.querySelector('.cardInside');
cardInside.innerHTML += '😸';

