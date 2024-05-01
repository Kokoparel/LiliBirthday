function createConfetti() {
    const colors = ['#FFC0CB', '#FFD700', '#8A2BE2', '#00FF00', '#00BFFF', '#FF6347']; // Fun colors
    const confettiCount = 150;
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
        const duration = Math.random() * 2 + 2;

        confetti.style.animation = `confetti-fall ${duration}s ease-in-out forwards`;
        confetti.style.animationDelay = `${Math.random() * 15}s`; // Shorter delay
        confetti.style.transform = `translateY(${initialYPosition}vh) rotate(${rotation}deg)`;

        confettiWrapper.appendChild(confetti);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createConfetti();
});
