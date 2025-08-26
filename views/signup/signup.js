// Inicializar componentes de Materialize
document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
});

// Función principal de registro
function createProfessionalRegister() {
    return {
        form: document.getElementById('registerForm'),
        register: handleRegister,
        validate: validateRegisterForm,
        showError: showError,
        showSuccess: showSuccess,
        reset: resetForm,
        checkPasswordStrength: checkPasswordStrength
    };
}

// Manejar envío del formulario de registro
function handleRegister(event) {
    event.preventDefault();

    if (!validateRegisterForm()) {
        showError('Por favor, complete todos los campos correctamente');
        return false;
    }

    const formData = {
        firstName: document.getElementById('first_name').value,
        lastName: document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        password: document.getElementById('password').value,
        acceptTerms: document.getElementById('acceptTerms').checked,
        registrationMethod: 'email',
        timestamp: new Date().toISOString()
    };

    // Mostrar loading
    showLoading(true);

    // Simular registro
    setTimeout(() => {
        console.log('Datos de registro:', formData);

        showLoading(false);
        showSuccess('¡Cuenta creada exitosamente! Bienvenido al Sistema Ganadero.');

        // Simular redirección
        setTimeout(() => {
            M.toast({ html: 'Redirigiendo al dashboard...', classes: 'green' });
        }, 2000);
    }, 2500);

    return formData;
}

// Registro con Google
function registerWithGoogle() {
    showLoading(true);

    setTimeout(() => {
        const googleData = {
            provider: 'google',
            email: 'usuario@gmail.com',
            name: 'Usuario Demo',
            registrationMethod: 'google',
            timestamp: new Date().toISOString()
        };

        console.log('Registro con Google:', googleData);
        showLoading(false);
        showSuccess('¡Registro con Google exitoso! Bienvenido.');

        setTimeout(() => {
            M.toast({ html: 'Bienvenido, ' + googleData.name, classes: 'green' });
        }, 1500);
    }, 1500);
}

// Validar formulario de registro
function validateRegisterForm() {
    const requiredFields = ['first_name', 'last_name', 'email', 'password', 'confirm_password'];
    let isValid = true;

    // Validar campos requeridos
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            field.classList.add('invalid');
            isValid = false;
        } else {
            field.classList.remove('invalid');
            field.classList.add('valid');
        }
    });

    // Validar email
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        document.getElementById('email').classList.add('invalid');
        isValid = false;
    }

    // Validar contraseñas coincidan
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    if (password !== confirmPassword) {
        document.getElementById('confirm_password').classList.add('invalid');
        isValid = false;
    }

    // Validar longitud de contraseña
    if (password.length < 6) {
        document.getElementById('password').classList.add('invalid');
        isValid = false;
    }

    // Validar términos aceptados
    if (!document.getElementById('acceptTerms').checked) {
        M.toast({ html: 'Debe aceptar los términos y condiciones', classes: 'red' });
        isValid = false;
    }

    return isValid;
}

// Verificar fortaleza de contraseña
function checkPasswordStrength(password) {
    const strengthBar = document.getElementById('strengthBar');
    const strengthText = document.getElementById('strengthText');

    let strength = 0;
    let strengthLabel = '';

    if (password.length >= 6) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/\d/)) strength++;
    if (password.match(/[^a-zA-Z\d]/)) strength++;

    // Limpiar clases anteriores
    strengthBar.className = 'password-strength-bar';
    strengthText.className = 'password-strength-text';

    if (strength <= 1) {
        strengthBar.classList.add('strength-weak');
        strengthText.classList.add('strength-weak-text');
        strengthLabel = 'Débil';
    } else if (strength <= 2) {
        strengthBar.classList.add('strength-medium');
        strengthText.classList.add('strength-medium-text');
        strengthLabel = 'Media';
    } else {
        strengthBar.classList.add('strength-strong');
        strengthText.classList.add('strength-strong-text');
        strengthLabel = 'Fuerte';
    }

    strengthText.textContent = password ? `Fortaleza: ${strengthLabel}` : '';
}

// Mostrar loading
function showLoading(show) {
    const registerText = document.querySelector('.register-text');
    const loading = document.querySelector('.loading');
    const submitBtn = document.querySelector('.btn-register');

    if (show) {
        registerText.style.display = 'none';
        loading.style.display = 'inline-block';
        submitBtn.disabled = true;
    } else {
        registerText.style.display = 'inline';
        loading.style.display = 'none';
        submitBtn.disabled = false;
    }
}

// Mostrar mensaje de error
function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');
    const successDiv = document.getElementById('successMessage');

    successDiv.style.display = 'none';
    errorText.textContent = message;
    errorDiv.style.display = 'block';

    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 5000);
}

// Mostrar mensaje de éxito
function showSuccess(message) {
    const successDiv = document.getElementById('successMessage');
    const successText = document.getElementById('successText');
    const errorDiv = document.getElementById('errorMessage');

    errorDiv.style.display = 'none';
    successText.textContent = message;
    successDiv.style.display = 'block';

    setTimeout(() => {
        successDiv.style.display = 'none';
    }, 5000);
}

// Mostrar login
function showLogin() {
    M.toast({ html: 'Redirigiendo a página de inicio de sesión...', classes: 'blue' });
    // Aquí iría la redirección a la página de login
}

// Limpiar formulario
function resetForm() {
    document.getElementById('registerForm').reset();
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('successMessage').style.display = 'none';

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.classList.remove('valid', 'invalid');
    });

    // Limpiar indicador de fortaleza
    document.getElementById('strengthBar').className = 'password-strength-bar';
    document.getElementById('strengthText').textContent = '';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    const registerSystem = createProfessionalRegister();

    // Manejar envío del formulario
    document.getElementById('registerForm').addEventListener('submit', handleRegister);

    // Validación en tiempo real
    document.getElementById('email').addEventListener('blur', function () {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && emailRegex.test(this.value)) {
            this.classList.add('valid');
            this.classList.remove('invalid');
        } else if (this.value) {
            this.classList.add('invalid');
            this.classList.remove('valid');
        }
    });

    // Verificar fortaleza de contraseña
    document.getElementById('password').addEventListener('input', function () {
        checkPasswordStrength(this.value);

        if (this.value.length >= 6) {
            this.classList.add('valid');
            this.classList.remove('invalid');
        } else if (this.value) {
            this.classList.add('invalid');
            this.classList.remove('valid');
        }
    });

    // Validar confirmación de contraseña
    document.getElementById('confirm_password').addEventListener('blur', function () {
        const password = document.getElementById('password').value;
        if (this.value && this.value === password) {
            this.classList.add('valid');
            this.classList.remove('invalid');
        } else if (this.value) {
            this.classList.add('invalid');
            this.classList.remove('valid');
        }
    });

    // Validar teléfono
    document.getElementById('phone').addEventListener('blur', function () {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (this.value && phoneRegex.test(this.value.replace(/\s/g, ''))) {
            this.classList.add('valid');
            this.classList.remove('invalid');
        } else if (this.value) {
            this.classList.add('invalid');
            this.classList.remove('valid');
        }
    });
});