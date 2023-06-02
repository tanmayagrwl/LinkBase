// Listen for the 'click' event on the button element
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.clear();
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === 'storeData') {
      const addButton = document.getElementById('addLinkButton');
      const nameField = document.getElementById('name');
      const linkField = document.getElementById('link');
      
      addButton.addEventListener('click', () => {
        const nameData = nameField.value;
        const linkData = linkField.value;
        
        chrome.storage.local.set({ nameData, linkData }, () => {
          console.log('Data has been stored');
        });
      });
    }
  });