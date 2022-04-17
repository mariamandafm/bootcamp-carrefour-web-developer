let texto = document.getElementById('page-title');
let b = document.getElementById('mode-selector')
let footer = document.getElementsByTagName('footer')[0];
let body = document.getElementsByTagName('body')[0];

function changeMode(){
    texto.classList.toggle('dark-mode');
    b.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');

    if (b.classList.contains('dark-mode')){
        b.innerHTML = 'Light Mode'
        texto.innerHTML = 'Dark Mode ON'
    } else {
        b.innerHTML = 'Dark Mode'
        texto.innerHTML = 'Light Mode ON'

    }
}

b.addEventListener('click', changeMode)