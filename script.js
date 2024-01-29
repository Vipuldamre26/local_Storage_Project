let text = document.querySelector('textarea');

function addtext(){
    localStorage.setItem('liveText', text.value);
}

if(localStorage.getItem('liveText')){
    text.value = localStorage.getItem('liveText');
}


text.addEventListener('input', addtext)