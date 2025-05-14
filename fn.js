// Script for dynamic functionality

// Example: Button click for course
const courseButton = document.getElementById('iniciar-curso');
if (courseButton) {
    courseButton.addEventListener('click', () => {
        alert('Iniciando curso para eximir multa.');
    });
}

// Example: Button click for paying driving license
const payButton = document.getElementById('pagar-pase');
if (payButton) {
    payButton.addEventListener('click', () => {
        alert('Redirigiendo al pago del pase de conducción.');
    });
}
