
const person = {
    city: "Moscow",
    name:  "Jane",
    age: 33,
    999: 111,
}

const ownProp = person => {
  for(let key in person) {
    if(person.hasOwnProperty(key))
    console.log(key,  person[key])
}
}
ownProp(person)

// Задание 1.

// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

