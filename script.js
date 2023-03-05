const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    if (email === 'vantanminh61@gmail.com' && password === 'Tanminh2009') {
        window.location.href = 'https://0vbry-my.sharepoint.com/personal/vantanminh_0vbry_onmicrosoft_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fvantanminh%5F0vbry%5Fonmicrosoft%5Fcom%2FDocuments%2FISO%2FWindows%2010%2Eiso&parent=%2Fpersonal%2Fvantanminh%5F0vbry%5Fonmicrosoft%5Fcom%2FDocuments%2FISO';
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
