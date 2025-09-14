// ScrollReveal is expected to be available globally via CDN
export function initializeScrollAnimations() {
    const sr = window.ScrollReveal({ // Use window.ScrollReveal
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false
    });

    sr.reveal('.hero h1', { delay: 300, origin: 'top' });
    sr.reveal('.hero .subtitle', { delay: 400 });
    sr.reveal('.scroll-down-link', { delay: 800, scale: 0.8 });

    sr.reveal('.content-section h2', { delay: 200, origin: 'left' });
    sr.reveal('.content-section > .container > p', { delay: 300 });
    sr.reveal('.card, .skill-item', { interval: 100 });
    sr.reveal('.contact-links', { delay: 300, scale: 0.9 });
    sr.reveal('.terminal-window', { delay: 300, scale: 0.95 });

    return sr;
}

export function revealDynamicContent(srInstance) {
    if (srInstance) {
        srInstance.reveal('.timeline-item', {
            origin: 'bottom',
            distance: '100px',
            interval: 200,
            easing: 'ease-out'
        });
        srInstance.reveal('.skill-item', { interval: 100 });
        srInstance.reveal('.cert-item', { interval: 100 });
    }
}