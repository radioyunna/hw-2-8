// Задание 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 console.log(people.sort((a, b) => a.age - b.age));


// Задание 2

 function filter(arr, ruleFunction) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (ruleFunction(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  function isPositive(num) {
    return num > 0;
  }
  
  function isMale(person) {
    return person.gender === 'male';
  }
  
  console.log(filter([3, -4, 1, 9], isPositive));
  console.log(filter(people, isMale));


// Задание 3

function printCurrentDate() {
    console.log(new Date());
  }
  
  function printAfter30Seconds() {
    console.log("30 секунд прошло");
  }
  
  let counter = 0;
  const interval = setInterval(() => {
    printCurrentDate();
    counter += 3;
    if (counter >= 30) {
      clearInterval(interval);
      printAfter30Seconds();
    }
  }, 3000);

// Задание 4

function delayForSecond(callback) {
    setTimeout(callback, 1000);
  }
  
  delayForSecond(function () {
     console.log('Привет, Глеб!');
  });

  
// Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { cb(); }
    }, 1000)
}

function sayHi (name) {
    return function () {
        console.log(`Привет, ${name}!`);
    };
}

delayForSecond(sayHi('Глеб'));
  



