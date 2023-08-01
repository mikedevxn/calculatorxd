function add(val) {
    document.getElementById('screen').value += val;
}

function calc() {
    const valScreen = document.getElementById('screen').value;
    const result = eval(valScreen);
    document.getElementById('screen').value = result;
}

function cancel() {
    document.getElementById('screen').value = '';
}