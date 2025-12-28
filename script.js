const quoteTab = document.getElementById('quoteTab');
const quoteDrawer = document.getElementById('quoteDrawer');
const quoteClose = document.getElementById('quoteClose');
const quoteOverlay = document.getElementById('quoteOverlay');

let lastFocusElement = null;

function getFocusableElements(container) {
    return container.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
}

lastFocuseElement = null;

function openDrawer() {
    lastFocusElement = document.activeElement

    quoteDrawer.classList.add('open');
    quoteOverlay.classList.add('open');
    document.body.classList.add('drawer-open');

    const focusableElements = getFocusableElements(quoteDrawer);
    if (focusableElements.length) {
        focusableElements[0].focus();
    }
}

function closeDrawer() {
    quoteDrawer.classList.remove('open');
    quoteOverlay.classList.remove('open');
    document.body.classList.remove('drawer-open');

    if (lastFocusElement) {
        lastFocusElement.focus();
    }
}

quoteTab.addEventListener('click', () => {
    if(!quoteDrawer.classList.contains('open')) {
        openDrawer();
    }
});
quoteClose.addEventListener('click', closeDrawer);
quoteOverlay.addEventListener('click', closeDrawer);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && quoteDrawer.classList.contains('open')) {
        closeDrawer();
    }});

