const populateContactTab = () => {
    const subContentContainer = document.getElementById('subContentContainer');

    const contactWrapper = document.createElement('div');
    contactWrapper.setAttribute('id', 'contactContainer');

    const header = document.createElement('h3');
    header.textContent = "Contact Us"

    const numberHead = document.createElement('div');
    numberHead.classList.add('contactHead');
    numberHead.textContent = 'Call';
    const numberContent = document.createElement('div');
    numberContent.classList.add('contactContent');
    numberContent.textContent = '07712345678';

    const emailHead = document.createElement('div');
    emailHead.classList.add('contactHead');
    emailHead.textContent = 'Email';
    const emailAddressContent = document.createElement('div');
    emailAddressContent.classList.add('contactContent');
    emailAddressContent.textContent = 'cafeLee@gmail.com';

    const addressHead = document.createElement('div');
    addressHead.classList.add('contactHead');
    addressHead.textContent = 'Locate';
    const addressContent = document.createElement('div');
    addressContent.classList.add('contactContent');
    addressContent.textContent = 'Schweigaards gate 56, 0656 Oslo, Norway';

    contactWrapper.appendChild(header);
    contactWrapper.appendChild(numberHead);
    contactWrapper.appendChild(numberContent);
    contactWrapper.appendChild(emailHead);
    contactWrapper.appendChild(emailAddressContent);
    contactWrapper.appendChild(addressHead);
    contactWrapper.appendChild(addressContent);

    subContentContainer.appendChild(contactWrapper);
}

export {
    populateContactTab,
}