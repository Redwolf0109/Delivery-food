const  buttonauth = document.querySelector('.button-auth')
const modalauth = document.querySelector('.modal-auth')
const buttonout = document.querySelector('.button-out')
const username = document.querySelector('.user-name')
const closeauth = document.querySelector('.close-auth')
const logInForm = document.getElementById('logInForm')
const inputlogin = document.getElementById('login')
const inputpassword = document.getElementById('password')



const login = (user) => {
    buttonauth.style.display = 'none'

    buttonout.style.display = 'flex'
    username.style.display = 'flex'

    username.textContent = user.login
    modalauth.style.display = 'none'
}
const logout = () =>{
    buttonauth.style.display = 'flex'

    buttonout.style.display = 'none'
    username.style.display = 'none'
    username.textContent = ''

localStorage.removeItem('user')
}


buttonauth.addEventListener('click', () =>{
    modalauth.style.display = 'flex'
})

closeauth.addEventListener('click', () =>{
    modalauth.style.display = 'none'
})

buttonout.addEventListener('click', () =>{
 logout()
})
logInForm.addEventListener('submit', (event) =>{
    event.preventDefault()
    

    const user ={
        login: inputlogin.value,
        password: inputpassword.value,
    }
    localStorage.setItem('user', JSON.stringify(user))
    login(user);
})

if (localStorage.getItem('user')){
    login(JSON.parse(localStorage.getItem('user')));
}