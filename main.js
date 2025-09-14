import { initializePreloader } from './preloader.js';
import { initializeNavbar } from './navbar.js';
import { initializeScrollAnimations, revealDynamicContent } from './scroll-animations.js';
import { initializeTypedSubtitle } from './typed-subtitle.js';
import { initializeDynamicContent } from './dynamic-content.js';
import { initializeTypingGame } from './typing-game.js';
import { initializeAIChatbot } from './ai-chatbot.js';
import { initializeParticles } from './particles-config.js';

document.addEventListener('DOMContentLoaded', () => {
    initializePreloader();
    initializeNavbar();
    const srInstance = initializeScrollAnimations(); // Get the ScrollReveal instance
    initializeTypedSubtitle();
    initializeDynamicContent(); // Render content first
    revealDynamicContent(srInstance); // Then reveal it
    initializeTypingGame();
    initializeAIChatbot();
    initializeParticles();
});