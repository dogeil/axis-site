function openMenu(){
    let menu = document.getElementById('menu');
    menu.style.display = 'flex';
}

function closeMenu(){
    let menu = document.getElementById('menu');
    menu.style.display = 'none';
}

window.addEventListener('load', () => {
    const startupLayer = document.getElementById('startupAnimation');
    const headerLogo = document.getElementById('headerLogo');

    if (!startupLayer || !headerLogo) {
        return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
        document.body.classList.add('startup-done');
        startupLayer.remove();
        return;
    }
    
    startupLayer.addEventListener(
        'animationend',
        () => {
            document.body.classList.add('startup-done');
            startupLayer.remove();
        },
        { once: true }
    );
});
