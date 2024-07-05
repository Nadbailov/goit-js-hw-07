const inputElement = document.getElementById('name-input')
const outputElement = document.getElementById('name-output')

inputElement.addEventListener('input', () => {
    const trimValue = inputElement.value.trim()
    const outputText = trimValue === '' ? 'Anonymous' : trimValue;
            outputElement.textContent = outputText;
})
