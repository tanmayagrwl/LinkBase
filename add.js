addButton = document.getElementById('addLinkButton');
nameField = document.getElementById('name');
linkField = document.getElementById('link');

if(addButton){
addButton.addEventListener('click', ()=> {
    chorme.storage.local.set({'nameData':nameField }, ()=> {console.log("name data has been stored")
    });
    chorme.storage.local.set({'linkData':linkField },()=> {console.log("name data has been stored")
    });

    
});}


else {
    console.error("Could not find addLinkButton element in document");
  }