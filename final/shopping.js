document.addEventListener('DOMContentLoaded', function () {
    // product quantity change 
    document.querySelectorAll('input[type="number"]').forEach(function (input) {
        input.addEventListener('change', function () {
            console.log('Quantity changed');
            total();
        });
    });

    // shipping method change 
    document.getElementById('shipping').addEventListener('change', function () {
        total();
    });

    // form submission 
    document.querySelector('form').addEventListener('submit', receipt);
});

function total() {
    const pacPrice = 25;
    const monoPrice = 30;
    const tetPrice = 15;

    const pacQuantity = parseInt(document.getElementById('pacman').value);
    const monoQuantity = parseInt(document.getElementById('monopoly').value);
    const tetQuantity = parseInt(document.getElementById('tetris').value);

    const shippingMethod = document.getElementById('shipping').value;

    // hold values for each item
    const pacSub = pacPrice * pacQuantity;
    const monoSub = monoPrice * monoQuantity;
    const tetSub = tetPrice * tetQuantity;

    const subtotal = pacSub + monoSub + tetSub;

    // shipping cost update
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
    let flag = true;

    const form = document.querySelector('form');
    
    // goes thru all elements and makes bg red if not valid
    form.querySelectorAll('input[type=text], input[type=tel], input[type=email], input[type=number]').forEach(input => {
        if (!input.value) {
            alert(`Please enter a value for ${input.name}`);
            input.style.backgroundColor = 'red';
            input.focus();
            input.select();
            flag = false;
        } 
        else {
            input.style.backgroundColor = ''; 
        }
    });

    console.log('flag:', flag);

    const email = form.querySelector('input[type=email]');
    if (email.value && !validateEmail(email.value)) {            
        alert('Please enter a valid email address');
        email.style.backgroundColor = 'red';
        email.focus();
        email.select();
        flag = false;
    } 
    else {
        email.style.backgroundColor = '';
    }

    console.log('flag:', flag);

    const zip = form.querySelector('input[name="zip"]');
    if (zip.value && zip.value.length !== 5) {
        alert('Please enter a 5-digit zip code');
        zip.style.backgroundColor = 'red';
        zip.focus();
        zip.select();
        flag = false;
    } 
    else {
        zip.style.backgroundColor = ''; 
    }

    console.log('flag:', flag);

    const phoneNumber = form.querySelector('input[type="tel"]').value;
    if (phoneNumber && !validatePhoneNumber(phoneNumber)) {
        const phoneInput = form.querySelector('input[type="tel"]');
        phoneInput.style.backgroundColor = 'red';
        phoneInput.focus();
        phoneInput.select();
        flag = false;
    }
    else {
    }

    console.log('flag:', flag);

    const creditCardInput = form.querySelector('input[name="cc"]');
    if (creditCardInput && !validateCreditCard(creditCardInput)) {
        flag = false; 
    }
    
    console.log('flag:', flag);

    const expInput = form.querySelector('input[name="exp"]');
    if (expInput && !validateExpirationDate(expInput)) {
        flag = false;
    }

    console.log('flag:', flag);

    const cvvInput = form.querySelector('input[name="cvv"]');
    if (cvvInput && !validateCVV(cvvInput)) {
        flag = false; 
    }

    console.log('flag:', flag);
    return flag;
}

function validateCreditCard(creditCardInput) {
    const creditCardNumber = creditCardInput.value;
    
    if (!/^\d{16}$/.test(creditCardNumber)) {
        alert('Please enter a 16-digit credit card number');
        creditCardInput.style.backgroundColor = 'red';
        creditCardInput.focus();
        creditCardInput.select();
        return false;
    }
   
    creditCardInput.style.backgroundColor = '';
    return true;
}

function validateExpirationDate(expInput) {
    const pattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const expDate = expInput.value;

    if (!pattern.test(expDate)) {
        alert('Please enter a valid expiration date in the format (MM/YY)');
        expInput.style.backgroundColor = 'red';
        expInput.focus();
        expInput.select();
        return false; 
    }

    const [month, year] = expDate.split('/');
    const numericMonth = parseInt(month, 10);
    const numericYear = parseInt(year, 10);
    const currentYear = new Date().getFullYear() % 100; 
    if (numericMonth >= 1 || numericMonth <= 12 || numericYear >= currentYear) {
        expInput.style.backgroundColor = '';
        return true;
    }
    alert('Card is expired. Please enter a valid expiration date');
    expInput.style.backgroundColor = 'red';
    expInput.focus();
    expInput.select();
    return false;
}



function validatePhoneNumber(phoneNumber) {
    const phonePattern = /^\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/;

    if (!phonePattern.test(phoneNumber)) {
        alert('Please enter a valid phone number');
        return false;
    }

    return true;
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateCVV(cvvInput) {
    const cvvValue = cvvInput.value;
    // check if cvv is 3 digits
    if (!/^\d{3}$/.test(cvvValue)) {
        alert('Please enter a valid 3-digit CVV number');
        cvvInput.style.backgroundColor = 'red';
        cvvInput.focus();
        cvvInput.select();
        return false;
    }
    
    // clear any red background and return true
    cvvInput.style.backgroundColor = '';
    return true;
}

// function to print receipt
function receipt(event) {

    const form = document.querySelector('form');

    event.preventDefault();

    // replace all but the last 4 digits of the card number with 'x'
    creditCardNumber = document.getElementById("cardNumber").value;
    const lastFourDigits = creditCardNumber.slice(-4);
    const maskedCardNumber = 'x'.repeat(creditCardNumber.length - 4) + lastFourDigits;

    if (validateForm() === false) {
        // validation failed
        return;
    } 

    // validation passed 
    else {
        const formData = new FormData(form);
        console.log(formData.get('payment'));
        fetch('shopping.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            // Display the receipt in a new window
            const receiptWindow = window.open('', '_blank');
            receiptWindow.document.write(data);
        })
        .catch(error => console.error('Error:', error));
    }
    
}
