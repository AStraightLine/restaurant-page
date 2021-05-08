const populateHomeTab = () => {
    const subContentContainer = document.getElementById('subContentContainer');

    const header = document.createElement('h3');
    header.textContent = 'Welcome to Cafe Lee';
    subContentContainer.appendChild(header);

    const content = document.createElement('p');
    content.textContent = 'Small sunglasses will not be tolerated. Big sunglasses at all times, always.' 
                            + ' Yes even while you eat. Big sunglasses, cool restaurant.'
    subContentContainer.appendChild(content);
}

export {
    populateHomeTab,
}