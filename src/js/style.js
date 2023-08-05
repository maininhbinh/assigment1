var home = document.getElementById('home');
var contact = document.getElementById('contact');
var khoaHoc = document.getElementById('khoaHoc');
var booking = document.getElementById('booking');


home.addEventListener('click', function(){
    window.location.href = '#!/'
})
contact.addEventListener('click', function(){
    window.location.href = '#!/contact'
})
khoaHoc.addEventListener('click', function(){
    window.location.href = '#!/cuser'
})

function amazing(value){
    switch(value){
        case 'home':
            home.style.backgroundColor = '#e8ebed';
            contact.style.background = '';
            khoaHoc.style.background = '';
            break;
        case 'contact':
            contact.style.backgroundColor = '#e8ebed';
            home.style.background = '';
            khoaHoc.style.background = '';
            break;
        case 'khoaHoc':
            khoaHoc.style.background = '#e8ebed';
            home.style.background = '';
            contact.style.background = '';
            break;
    }
}


