const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login',{
            method: 'POST',
            body: JSON.stringify({ email,password }),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/api/post/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

const registerFormHandler = async (event) => {
    event.preventDefault();

    const userName = document.querySelector('#username-register').value.trim()
    const email = document.querySelector('#email-register').value.trim();
    const password = document.querySelector('#password-register').value.trim();

    if (userName && email && password) {
        const response = await fetch('/api/users',{
            method:'POST',
            body: JSON.stringify({userName,email,password}),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/api/post/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.register-form').addEventListener('submit', registerFormHandler);