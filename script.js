const loginButton = document.querySelector('.primary-button');
const usernameInput = document.getElementById('log-in');
const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('toggle-password');
const validCredentials = [
    { email: 'maulanairawan@gmail.com', password: 'maulanairawan' },
    { email: 'irawan@gmail.com', password: '12345678' },
    { email: 'indahhhrahmawati09@gmail.com', password: 'ch3coohasamasetat'}
];

// Fungsi validasi login
function validateForm(event) {
    event.preventDefault();

    const email = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validasi email dan password
    if (email === '') {
        alert('Email tidak boleh kosong.');
        usernameInput.focus();
        return;
    }
    if (password === '') {
        alert('Password tidak boleh kosong.');
        passwordInput.focus();
        return;
    }

    // Cek kredensial yang valid
    const isValid = validCredentials.some((cred) => cred.email === email && cred.password === password);
    if (!isValid) {
        alert('Email atau password salah.');
        return;
    }
    window.location.href = "https://sura444t.netlify.app/";
}

// Show password
togglePasswordButton.addEventListener('click', () => {
    const isPasswordVisible = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPasswordVisible ? 'text' : 'password');
    const icon = togglePasswordButton.querySelector('i');
    if (icon) {
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    }
});

// Tombol login
loginButton.addEventListener('click', validateForm);
