console.log("1. Числа от 1 до 20:");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}


console.log("2. Числа от 20 до 1:");
for (let i = 20; i >= 1; i--) {
    console.log(i);
}

console.log("3. Чётные числа от 1 до 50:");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let sum1 = 0;
for (let i = 1; i <= 100; i++) {
    sum1 += i;
}
console.log("4. Сумма чисел от 1 до 100:", sum1);

console.log("5. Квадраты чисел от 1 до 10:");
for (let i = 1; i <= 10; i++) {
    console.log("Квадрат", i, "=", i * i);
}

console.log("6. Таблица умножения на 5:");
for (let i = 1; i <= 10; i++) {
    console.log(`5 × ${i} = ${5 * i}`);
}

let sum2 = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sum2 += i;
    }
}
console.log("7. Сумма чётных чисел:", sum2);

console.log("8. Числа от 0 до 100 с шагом 5:");
for (let i = 0; i <= 100; i += 5) {
    console.log(i);
}


let count1 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        count1++;
    }
}
console.log("9. Количество чисел, делящихся на 7:", count1);


let user = {
    name: "Бермет",
    age: 20,
    city: "Бишкек"
};

console.log("1. Объект user:");
console.log(user.name);
console.log(user.age);
console.log(user.city);

user.age = 21;
console.log("2. Изменённый возраст:", user.age);

user.phone = "+996 700 123 456";
console.log("3. Добавлено свойство phone:", user.phone);

delete user.city;
console.log("4. Объект после удаления city:", user);

console.log("5. Есть ли свойство email:", "email" in user);

console.log("6. Ключи объекта:");
for (let key in user) {
    console.log(key);
}

console.log("7. Значения объекта:");
for (let key in user) {
    console.log(user[key]);
}

let count2 = 0;
for (let key in user) {
    count2++;
}
console.log("8. Количество свойств объекта:", count2);


let numbers = [10, -3, 7, 20, 4];

console.log("1. Элементы массива:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let sum3 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum3 += numbers[i];
}
console.log("2. Сумма элементов:", sum3);

let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log("3. Максимальный элемент:", max);

let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log("4. Минимальный элемент:", min);

let count3 = 0;
for (let i = 0; i < numbers.length; i++) {
    count3++;
}
console.log("5. Количество элементов:", count3);

let sum4 = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        sum4 += numbers[i];
    }
}
console.log("6. Сумма чётных элементов:", sum4);

let count4 = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        count4++;
    }
}
console.log("7. Количество отрицательных чисел:", count4);

let product = 1;
for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
}
console.log("8. Произведение элементов:", product);

let maxIndex = 0;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[maxIndex]) {
        maxIndex = i;
    }
}
console.log("9. Индекс максимального элемента:", maxIndex);

let minIndex = 0;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[minIndex]) {
        minIndex = i;
    }
}
console.log("10. Индекс минимального элемента:", minIndex);

let found10 = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) {
        found10 = true;
    }
}

if (found10) {
    console.log("11. Число 10 есть в массиве");
} else {
    console.log("11. Числа 10 нет в массиве");
}
let count7 = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 7) {
        count7++;
    }
}
console.log("12. Число 7 встречается раз:", count7);

let lastPositive = null;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        lastPositive = numbers[i];
    }
}
console.log("13. Последнее положительное число:", lastPositive);

let sum5 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum5 += numbers[i];
}
let average = sum5 / numbers.length;
console.log("14. Среднее арифметическое:", average);
