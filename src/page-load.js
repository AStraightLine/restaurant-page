const pageInit = () => {
    const container = document.getElementById('content');

    // Create Elements
    // Header
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.textContent = 'Cafe Lee';
    const subTitle = document.createElement('h2');
    subTitle.textContent = 'Big Sunglasses, Cool Restaurant';
    header.appendChild(title);
    header.appendChild(subTitle);

    // Main content container
    const contentContainer  = document.createElement('div');
    contentContainer.setAttribute('id', 'contentContainer')
    
    // Nav
    const contentNav = document.createElement('nav');
    contentContainer.appendChild(contentNav);

    const contentNavItemHome = document.createElement('div');
    contentNavItemHome.classList.add('navTab');
    contentNavItemHome.classList.add('navSelected');
    contentNavItemHome.textContent = 'Home';
    contentNav.appendChild(contentNavItemHome);
    const contentNavItemMenu = document.createElement('div');
    contentNavItemMenu.classList.add('navTab');
    contentNavItemMenu.textContent = 'Menu';
    contentNav.appendChild(contentNavItemMenu);
    const contentNavItemContact = document.createElement('div');
    contentNavItemContact.classList.add('navTab');
    contentNavItemContact.textContent = 'Contact'
    contentNav.appendChild(contentNavItemContact);
    const navBlank = document.createElement('div');
    navBlank.setAttribute('id', 'navBlank');
    contentNav.appendChild(navBlank);

    // Main content area container
    const subContentContainer = document.createElement('div');
    subContentContainer.setAttribute('id', 'subContentContainer');
    contentContainer.appendChild(subContentContainer);

    container.appendChild(header);
    container.appendChild(contentContainer);
}

export {
    pageInit,
}