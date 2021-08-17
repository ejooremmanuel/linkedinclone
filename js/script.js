const show = document.getElementById('show');

const password = document.getElementById('password')

show.addEventListener('click', () => {


    if (password.type === "password") {

        password.type = "text"
        show.innerHTML = "hide"
    } else {
        password.type = "password"
        show.innerHTML = "show"

    }

})