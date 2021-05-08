const populateMenuTab = () => {
    const subContentContainer = document.getElementById('subContentContainer');

    const menuItemOneContainer = document.createElement('div');
    const menuItemTwoContainer = document.createElement('div');
    const menuItemThreeContainer = document.createElement('div');
    const menuItemFourContainer = document.createElement('div');
    menuItemOneContainer.classList.add('menuItem');
    menuItemTwoContainer.classList.add('menuItem');
    menuItemThreeContainer.classList.add('menuItem');
    menuItemFourContainer.classList.add('menuItem');

    const menuItemOneHeader = document.createElement('h4');
    menuItemOneHeader.textContent = 'Menu Item One: £0.00';
    const menuItemOneContent = document.createElement('p');
    menuItemOneContent.textContent = 'Great meal, fresh local ingredients, low price.';
    menuItemOneContent.classList.add('menuItemContent');
    menuItemOneContainer.appendChild(menuItemOneHeader);
    menuItemOneContainer.appendChild(menuItemOneContent);

    const menuItemTwoHeader = document.createElement('h4');
    menuItemTwoHeader.textContent = 'Menu Item Two: £0.00';
    const menuItemTwoContent = document.createElement('p');
    menuItemTwoContent.textContent = "Great meal, fresh local ingredients, low price.";
    menuItemTwoContent.classList.add('menuItemContent');
    menuItemTwoContainer.appendChild(menuItemTwoHeader);
    menuItemTwoContainer.appendChild(menuItemTwoContent);

    const menuItemThreeHeader = document.createElement('h4');
    menuItemThreeHeader.textContent = 'Menu Item One: £0.00';
    const menuItemThreeContent = document.createElement('p');
    menuItemThreeContent.textContent = 'Great meal, fresh local ingredients, low price.';
    menuItemThreeContent.classList.add('menuItemContent');
    menuItemThreeContainer.appendChild(menuItemThreeHeader);
    menuItemThreeContainer.appendChild(menuItemThreeContent);

    const menuItemFourHeader = document.createElement('h4');
    menuItemFourHeader.textContent = 'Menu Item Four: £0.00';
    const menuItemFourContent = document.createElement('p');
    menuItemFourContent.textContent = 'Great meal, fresh local ingredients, low price.';
    menuItemFourContent.classList.add('menuItemContent');
    menuItemFourContainer.appendChild(menuItemFourHeader);
    menuItemFourContainer.appendChild(menuItemFourContent);
    
    subContentContainer.appendChild(menuItemOneContainer);
    subContentContainer.appendChild(menuItemTwoContainer);
    subContentContainer.appendChild(menuItemThreeContainer);
    subContentContainer.appendChild(menuItemFourContainer);
}

export {
    populateMenuTab,
}