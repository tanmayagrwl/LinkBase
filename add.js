addButton = document.getElementById('addLinkButton');
nameField = document.getElementById('name');
linkField = document.getElementById('link');

    addButton.addEventListener('click', ()=> {
    chrome.storage.local.set({'nameData':nameField }, ()=> {console.log("name data has been stored")
    });
    chrome.storage.local.set({'linkData':linkField },()=> {console.log("link data has been stored")
    });
});