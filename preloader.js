// Function for preloader
export function initializePreloader() {
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        const pageContent = document.getElementById('page-content');
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            pageContent.style.opacity = '1';
            pageContent.style.visibility = 'visible';
        }, 500);
    });
}

