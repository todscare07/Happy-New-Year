function throwColors() {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
    for (let i = 0; i < 30; i++) {
        let splash = document.createElement('div');
        splash.classList.add('colorSplash');
        splash.style.background = colors[Math.floor(Math.random() * colors.length)];
        splash.style.left = Math.random() * 100 + "vw";
        splash.style.top = Math.random() * 100 + "vh";
        document.body.appendChild(splash);

        setTimeout(() => {
            splash.remove();
        }, 1500);
    }
}

// CSS for color splashes (can be added inside styles.css)
const style = document.createElement('style');
style.innerHTML = `
    .colorSplash {
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        opacity: 0.7;
        animation: fadeOut 1.5s ease-in-out forwards;
    }
    @keyframes fadeOut {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(3); opacity: 0; }
    }
`;
document.head.appendChild(style);