const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    if (email === 'vantanminh61@gmail.com' && password === 'Tanminh2009') {
        window.location.href = 'https://vantanminh.github.io/4-button-/';
    } else {
        alert('Invalid email or password');
    }
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = registerForm.name.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;
    // Add register logic here
});
