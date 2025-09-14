// Typed is expected to be available globally via CDN
export function initializeTypedSubtitle() {
    new window.Typed('#typed-subtitle', { // Use window.Typed
        strings: [
            "Étudiant en BTS SIO - Option SISR",
            "Passionné de Réseaux et Systèmes",
            "Futur Administrateur Systèmes & Réseaux"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        smartBackspace: true
    });
}