function calculate() {
    const num1 = document.getElementById('position_1').value;
    const num2 = document.getElementById('position_2').value;
    const nehto = document.getElementById('znak').value;
    if (num1 === '' || num2 === '') {
        if (num1 === '' && num2 === '') {
            alert("Оба поля ввода заполнены не корректно")
        } else if (num1 === '') {
            alert("Первое поле ввода заполнено не корректно")
        } else if (num2 === '') {
            alert("Второе поле ввода заполненно не корректно")
        }
        return;
    }

    massiv = ["-", "+", "/", "%", "**"] // массив допутимых символов математических операций

    console.log("Знак, введённый пользователем", nehto)
    znak = nehto

    console.log("Массив допустимых символов операций -", massiv)

    for (i = 0; i < massiv.length; i++) {
        if (znak === massiv[i]) {
            result = 1;
        }
    }

    if (result != 1) {
        result = 0;
    }

    if (result === 1) {
        console.log("Алгоритм проверки успешно пройден");
    } else {
        alert("Ошибка в поле ввода знака операции");
        console.log("Не корректоное значние в поле ввода знака математических операций")
    }

    a = Number(num1);
    b = Number(num2);
    znak = String(nehto);
    console.log("Первое число, которое вёл пользователь", num1);
    console.log("Второе число, которое вёл пользователь", num2);
    console.log("Знак, которое вёл пользователь", znak);
    console.log("Отслеживаю нажатые пользователем значения")
    if (znak === '-') {
        const result = a - b;
        document.getElementById('result').innerText = `Ответ: ${result}`;
    } else if (znak === '+') {
        const result = a + b;
        document.getElementById('result').innerText = `Ответ: ${result}`;
    } else if (znak === '*') {
        const result = a * b;
        document.getElementById('result').innerText = `Ответ: ${result}`;
    } else if (znak === '**') {
        const result = a ** b;
        document.getElementById('result').innerText = `Ответ: ${result}`;
    } else if (znak === '/') {
        const result = a / b;
        document.getElementById('result').innerText = `Ответ: ${result}`;
    } else if (znak === '%') {
        const result = a ** b;
        document.getElementById('result').innerText = `Ответ: ${result}`;
    }
}

const themeToggleButton = document.getElementById('themeToggle');
let isDarkTheme = false;

themeToggleButton.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;

    if (isDarkTheme) {
        // Темная тема
        document.body.style.backgroundColor = '#121212'; // Темный фон
        document.body.style.color = '#ffffff';  // Белый текст
        document.querySelector('.container').style.backgroundColor = '#1e1e1e'; // Фон контейнера
        document.querySelectorAll('h1, h2, .result').forEach(element => {
            element.style.color = '#ffffff'; // Белый текст для заголовков и результатов
        });
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.style.backgroundColor = '#2a2a2a'; // Темный фон для вводов
            input.style.color = '#ffffff'; // Белый текст для вводов
            input.style.borderColor = '#ffffff'; // Цвет границы
        });
        document.querySelectorAll('input[type="string"]').forEach(input => {
            input.style.backgroundColor = '#2a2a2a'; // Темный фон для вводов
            input.style.color = '#ffffff'; // Белый текст для вводов
            input.style.borderColor = '#ffffff'; // Цвет границы
        });
        themeToggleButton.textContent = '☀️'; // Символ солнца для переключения на светлую тему
    } else {
        document.body.style.backgroundColor = '#f5f5f5'; // Светлый фон
        document.body.style.color = '#333333'; // Черный текст
        document.querySelector('.container').style.backgroundColor = '#ffffff'; // Фон контейнера
        document.querySelectorAll('h1, h2, .result').forEach(element => {
            element.style.color = '#333333'; // Черный текст для заголовков и результатов
        });
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.style.backgroundColor = '#ffffff'; // Светлый фон для вводов
            input.style.color = '#333333'; // Черный текст для вводов
            input.style.borderColor = '#ccc'; // Цвет границы
        });
        document.querySelectorAll('input[type="string"]').forEach(input => {
            input.style.backgroundColor = '#ffffff'; // Светлый фон для вводов
            input.style.color = '#333333'; // Черный текст для вводов
            input.style.borderColor = '#ccc'; // Цвет границы
        });
        themeToggleButton.textContent = '🌙'; // Символ луны для переключения на темную тему
    }
});
