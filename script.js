function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var displayValue = document.getElementById('display').value;
    var result;
    try {
        result = eval(displayValue);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid expression');
        }
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
