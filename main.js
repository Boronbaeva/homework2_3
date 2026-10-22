for (let i = 1; i <= 20; i++) {
    console.log(i);
}

for (let i = 20; i >= 1; i--) {
    console.log(i);
}

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let sum1 = 0;
for (let i = 1; i <= 100; i++) {
    sum1 += i;
}
console.log(sum1);

for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}

for (let i = 1; i <= 10; i++) {
    console.log(`5 × ${i} = ${5 * i}`);
}

let sum2 = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sum2 += i;
    }
}
console.log(sum2);

for (let i = 0; i <= 100; i += 5) {
    console.log(i);
}

let count1 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        count1++;
    }
}
console.log(count1);

let user = {
    name: "Бермет",
    age: 20,
    city: "Бишкек"
};

console.log(user.name);
console.log(user.age);
console.log(user.city);

user.age = 21;
console.log(user.age);

user.phone = "+996 700 123 456";
console.log(user);

delete user.city;
console.log(user);

console.log("email" in user);

for (let key in user) {
    console.log(key);
}

for (let key in user) {
    console.log(user[key]);
}

let count2 = 0;
for (let key in user) {
    count2++;
}
console.log(count2);

let numbers = [10, -3, 7, 20, 4];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let sum3 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum3 += numbers[i];
}
console.log(sum3);

let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max);

let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log(min);

let count3 = 0;
for (let i = 0; i < numbers.length; i++) {
    count3++;
}
console.log(count3);

let sum4 = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        sum4 += numbers[i];
    }
}
console.log(sum4);

let count4 = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        count4++;
    }
}
console.log(count4);

let product = 1;
for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
}
console.log(product);

let maxIndex = 0;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[maxIndex]) {
        maxIndex = i;
    }
}
console.log(maxIndex);

let minIndex = 0;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[minIndex]) {
        minIndex = i;
    }
}
console.log(minIndex);

let found10 = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) {
        found10 = true;
    }
}

if (found10) {
    console.log("Число 10 есть в массиве");
} else {
    console.log("Числа 10 нет в массиве");
}

let count7 = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 7) {
        count7++;
    }
}
console.log(count7);

let lastPositive = null;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        lastPositive = numbers[i];
    }
}
console.log(lastPositive);

let sum5 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum5 += numbers[i];
}
let average = sum5 / numbers.length;
console.log(average);