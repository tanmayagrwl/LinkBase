const formEl = document.querySelector('.addForm');

formEl.addEventListener('submit', event=> {
    event.preventDefault();

    const formData = new FormData(formEl);
    
    const data = Object.fromEntries(formData);
    
});