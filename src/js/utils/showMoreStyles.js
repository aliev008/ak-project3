export const showMoreStyles = (trigger, styles) => {
    const card = document.querySelectorAll(styles);
    cards.forEach(card => {
        card.classList.add('animated');
        
    });
}