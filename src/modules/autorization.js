const autorization = () => {
    let login = document.querySelector('#name')
    let passwod = document.querySelector('#type')
    let btn = document.querySelector('.button')
    let logWar = document.querySelectorAll('.text-warning')[0]
    let passWar = document.querySelectorAll('.text-warning')[1]
    logWar.style.opacity = "0"
    passWar.style.opacity = "0"

    btn.addEventListener('click', function (e) {
        e.preventDefault()
        if (login.value === 'admin' && passwod.value === 'admin') {
            location="http://insanejavascriptdiplom/admin/table.html";
            passWar.style.opacity = "0"
        } else if (login.value != 'admin') {
            logWar.style.opacity = "1"
        } else if (passwod.value != 'admin') {
            logWar.style.opacity = "0"
            passWar.style.opacity = "1"
        }
    })

    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll('input').forEach(function(e) {
            if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
            e.addEventListener('input', function() {
                window.sessionStorage.setItem(e.name, e.value);
            })
        })
    }); 
};
export default autorization; 27