const menuButton = document.querySelector('.burger-icon');
const closeButton = document.querySelector('.cross-icon');
const navDropdown = document.querySelector('.nav-dropdown');
const body = document.querySelector('body');


menuButton.addEventListener('click', (e)=>{
    navDropdown.style.display = 'flex';
    menuButton.style.display = 'none';
    return body.style.position = 'fixed';

});
closeButton.addEventListener('click', (e)=>{
    navDropdown.style.display = 'none';
    menuButton.style.display = 'flex';
    return body.style.position = 'static';

});