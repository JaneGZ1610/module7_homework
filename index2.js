const person = {
    city: "Moscow",
    name:  "Jane",
    age: 33,
    999: 111,
    
}
  
  const checkProp = (prop, person) => {
    if (prop in person) return true
    else return false
  }
  
  console.log(checkProp('city', person))
  console.log(checkProp('str', person))
  

// Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

