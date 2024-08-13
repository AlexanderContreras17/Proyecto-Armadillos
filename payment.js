document.addEventListener('DOMContentLoaded', function () {
    const paymentForm = document.getElementById('payment-form');
    const receiptSection = document.getElementById('receipt-section');
    const paymentContainer = document.querySelector('.payment-container');
    const openPaymentFormButton = document.getElementById('open-payment-form');
    const closeButton = document.querySelector('.close-btn');
    const realizarAbonoBtn = document.getElementById('realizar-abono-btn');
    const abonoInput = document.getElementById('abono-input');

    // Show the payment form
    openPaymentFormButton.addEventListener('click', function () {
        paymentContainer.classList.remove('hidden');
    });

    // Hide the payment form
    closeButton.addEventListener('click', function () {
        paymentContainer.classList.add('hidden');
    });

    // Handle form submission
    paymentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        setTimeout(function () {
            paymentForm.classList.add('hidden');
            receiptSection.classList.remove('hidden');
        }, 10); // Simular un tiempo de procesamiento
    });

    // Handle custom abono submission
    realizarAbonoBtn.addEventListener('click', function () {
        const abonoAmount = abonoInput.value;
        if (abonoAmount && abonoAmount > 0) {
            alert(`Has realizado un abono de $${abonoAmount}`);
            // Aquí podrías enviar la cantidad al servidor o procesar el pago
        } else {
            alert('Por favor, ingresa una cantidad válida.');
        }
    });
});


