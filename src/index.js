import {pageInit} from './page-load'
import {populateHomeTab} from './homeTab'
import {populateMenuTab} from './menuTab'
import {populateContactTab} from './contactTab'

const handlePreviousTab = () => {
    const contentContainer = document.getElementById('subContentContainer');
    // Get the tab which was selected
    const previousTabArray = document.getElementsByClassName('navSelected');
    const previousTab = previousTabArray[0];
    // remove navSelected class if present (so this code is only run after a new tab has been activated)
    previousTab.classList.toggle('navSelected');
    // remove all children from content container
    while(contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.lastChild);
    }
}

const handleCurrentTab = (tab) => {
    tab.classList.toggle('navSelected');
    const newTab = tab.textContent;
    
    switch (newTab) {
        case 'Home':
            populateHomeTab();
            break;
        case 'Menu':
            populateMenuTab();
            break;
        case 'Contact':
            populateContactTab();
            break;
    }
}

const navEventHandler = (tab) => {
    if(tab.classList.contains('navSelected')) {
        return
    } else {
        handlePreviousTab();
        handleCurrentTab(tab);
    }
}

pageInit();
populateHomeTab();

const navTabs = document.querySelectorAll('.navTab');

navTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        navEventHandler(tab);
    });
});