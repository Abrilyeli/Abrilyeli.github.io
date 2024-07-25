function validateInput(text) {
    const regex = /^[a-zñ\s]+$/;
    return regex.test(text);
}

function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
}

function encryptText() {
    const inputTextElement = document.getElementById('inputText');
    const inputText = inputTextElement.value;
    if (!validateInput(inputText)) {
        showError('El texto solo debe contener letras minúsculas y espacios. No se permiten números ni caracteres especiales.');
        return;
    }
    const encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = encryptedText;

    // Borrar el texto del primer input
    inputTextElement.value = '';

    showError('');
}

function decryptText() {
    const inputTextElement = document.getElementById('inputText');
    const inputText = inputTextElement.value;
    if (!validateInput(inputText)) {
        showError('El texto solo debe contener letras minúsculas y espacios. No se permiten números ni caracteres especiales.');
        return;
    }
    const decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = decryptedText;

    // Borrar el texto del primer input
    inputTextElement.value = '';

    showError('');
}

function copyText() {
    const outputTextElement = document.getElementById('outputText');
    outputTextElement.select();
    document.execCommand('copy');

    // Limpiar los campos de texto
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';

    // Mostrar mensaje de copiado
    showCopyMessage();
}

function showCopyMessage() {
    const copyMessage = document.getElementById('copyMessage');
    copyMessage.classList.add('show');
    setTimeout(() => {
        copyMessage.classList.remove('show');
    }, 2000);
}

function detectDevice() {
    const deviceMessage = document.getElementById('deviceMessage');
    const width = window.innerWidth;
    if (width <= 600) {
        deviceMessage.textContent = 'Estás usando un dispositivo móvil.';
    } else if (width <= 1024) {
        deviceMessage.textContent = 'Estás usando una tablet.';
    } else {
        deviceMessage.textContent = 'Estás usando una  computadora.';
    }
}

window.onload = detectDevice;
window.onresize = detectDevice;
