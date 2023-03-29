function createObject () {
    return Object.create(null);
  }
  
  const person = createObject();
  console.log(person);
  console.log(Object.getPrototypeOf(person));


// Задание 3.

// Написать функцию, которая создает пустой объект, но без прототипа.

