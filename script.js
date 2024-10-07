1
function countEvenOdd(array) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    for (let element of array) {
        if (typeof element === 'number') {
        if (element === 0) {
            zeroCount++;
        } else if (element % 2 === 0) {
        evenCount++;
        } else {
        oddCount++;
        }
        }
    }

    console.log(`Чётных: ${evenCount}, Нечётных: ${oddCount}, Нулей: ${zeroCount}`);
    }

        
    countEvenOdd([1, 2, 3, 4, 0, null, 'a', 5, 0, 6]);





    
    2
    function isPrime(number) {
    if (number > 1000) {
        return "Данные неверны";
    }
    if (number <= 1) {
        return "Не является простым числом";
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
        return "Не является простым числом";
        }
    }
    return "Простое число";
    }

  // Пример вызова функции
  console.log(isPrime(997));  // Простое число
  console.log(isPrime(1001)); // Данные неверны
  console.log(isPrime(0));    // Не является простым числом
  console.log(isPrime(1));    // Не является простым числом
  console.log(isPrime(10));   // Не является простым числом
    




    3
    function createAdder(x) {
    return (y) => x + y;
    }

  // Пример использования
    console.log(createAdder(5)(3));
    console.log(createAdder(10)(7));





    4
    function printNumbers(from, to) {
    let current = from;

    const intervalId = setInterval(() => {
        console.log(current);
        if (current === to) {
        clearInterval(intervalId);
        }
        current++;
    }, 1000);
    }

  // Пример использования
    printNumbers(5, 15);






    5
  const power = (x, n) => x ** n;

console.log(power(2, 3));
console.log(power(5, 2));
console.log(power(10, 4));
