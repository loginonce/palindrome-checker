const button = document.getElementById('check-btn');
const input = document.getElementById('text-input');
const result = document.getElementById('result');

function palindrome(input) {
    const cleanString = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanString === cleanString.split('').reverse().join('');
};

button.addEventListener("click", function () {
    const inputValue = input.value.trim();
    if (inputValue === "") {
        alert("Please input a value");
    } else if (palindrome(inputValue)) {
        result.textContent = inputValue + " is a palindrome";
    } else {
        result.textContent = inputValue + " is not a palindrome";
    }
});
