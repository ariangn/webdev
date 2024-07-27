document.addEventListener('DOMContentLoaded', function () {
    // product quantity change 
    document.querySelectorAll('input[type="number"]').forEach(function (input) {
        input.addEventListener('change', function () {
            total();
        });
    });

    // shipping method change 
    document.getElementById('shipping').addEventListener('change', function () {
        total();
    });

    // form submission 
    document.querySelector('form').addEventListener('submit', function (e) {
        if (!validateForm()) {
            e.preventDefault(); // prevent form submission if validation fails
        } else {
            receipt();
        }
    });
});

function total() {
    const sweeneyPrice = 73;
    const hadesPrice = 68;
    const wickedPrice = 94;

    const sweeneyQuantity = parseInt(document.getElementById('sweeney').value);
    const hadesQuantity = parseInt(document.getElementById('hadestown').value);
    const wickedQuantity = parseInt(document.getElementById('wicked').value);

    const shippingMethod = document.getElementById('shipping').value;

    const sweeneySub = sweeneyPrice * sweeneyQuantity;
    const hadesSub = hadesPrice * hadesQuantity;
    const wickedSub = wickedPrice * wickedQuantity;

    document.getElementById('sweeney_total').value = sweeneySub;
    document.getElementById('hadestown_total').value = hadesSub;
    document.getElementById('wicked_total').value = wickedSub;

    const subtotal = sweeneySub + hadesSub + wickedSub;

    let shippingAmount = 0;
    if (shippingMethod === 'shipping') {
        shippingAmount = 10; 
    }
    document.getElementById('fee').value = shippingAmount;

    const t = subtotal * 0.0825;
    const tax = Math.round(t*100) / 100;
    document.getElementById('tax').value = tax;

    const totalAmount = subtotal + shippingAmount + tax;

    document.getElementById('total').value = subtotal;
    document.getElementById('grandTotal').value = totalAmount;
}

function validateForm() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const zip = document.getElementById('zip').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const payment = document.getElementById('payment').value;
    const cardNumber = document.getElementById('cardNumber').value;

    if (
        name === '' ||
        address === '' ||
        zip === '' ||
        phone === '' ||
        email === '' ||
        payment === 'Select' ||
        cardNumber === ''
    ) {
        alert('Please fill out all required fields.');
        return false;
    }

    if (zip.length !== 5 || !/^\d+$/.test(zip)) {
        alert('invalid ZIP code');
        document.getElementById('zip').focus();
        document.getElementById('zip').select();
        return false;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert('invalid email address');
        document.getElementById('email').focus();
        document.getElementById('email').select();
        return false;
    }

    if (phone.length !== 10) {
        alert('invalid phone number');
        document.getElementById('phone').focus();
        document.getElementById('phone').select();
        return false;
    }

    if (cardNumber.length !== 16) {
        alert('invalid card number');
        document.getElementById('cardNumber').focus();
        document.getElementById('cardNumber').select();
        return false;
    }

    return true; 
}

function receipt() {
    // replace all but the last 4 digits of the card number with 'x'
    const lastFourDigits = cardNumber.slice(-4);
    const maskedCardNumber = 'x'.repeat(cardNumber.length - 4) + lastFourDigits;

    // prepare the receipt HTML
    const receiptHTML = `
        <h2>Receipt</h2>
        <p>Name: ${name}</p>
        <p>Address: ${address}</p>
        <p>ZIP Code: ${zip}</p>
        <p>Phone Number: ${phone}</p>
        <p>Email: ${email}</p>
        <p>Payment Method: ${payment}</p>
        <p>Card Number: ${maskedCardNumber}</p>
        <p>Products:
            <ul>
                <li>Sweeney Todd: ${document.getElementById('sweeney').value} tickets</li>
                <li>Hadestown: ${document.getElementById('hadestown').value} tickets</li>
                <li>Wicked: ${document.getElementById('wicked').value} tickets</li>
            </ul>
        </p>
        <p>Subtotal: $${document.getElementById('total').value}</p>
        <p>Shipping Method: ${document.getElementById('shipping').value}</p>
        <p>Grand Total: $${document.getElementById('grandTotal').value}</p>
    `;

    // display the receipt in a new HTML document 
    document.getElementById('display').innerHTML = receiptHTML;
}
