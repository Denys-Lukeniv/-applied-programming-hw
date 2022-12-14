// ### Данное задание не обязательно для выполнения

// ## Задание

// Реализовать функцию полного клонирования объекта.

// #### Технические требования:
// - Написать функцию для рекурсивного полного клонирования объекта (без единой передачи по ссылке, внутренняя вложенность свойств объекта может быть достаточно большой).
// - Функция должна успешно копировать свойства в виде объектов и массивов на любом уровне вложенности.
// - В коде нельзя использовать встроенные механизмы клонирования, такие как функция `Object.assign()` или спред-оператор. 

// #### Литература:
// - [Объекты как ассоциативные массивы](https://learn.javascript.ru/object)
// - [Деструкрутризация](https://learn.javascript.ru/destructuring)
// - [Рекурсия, стек](https://learn.javascript.ru/recursion)
// - [Array.isArray()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)


function test() {
    initialObject.size.block.height = 100
    console.log(deepIteration(initialObject))
    console.log(deepIteration(clonedObj))
    console.log('Objects equal: ', checkObjects(initialObject, clonedObj))
  }
  
  function deepIteration(
    obj,
    array = []
  ){
    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        deepIteration(obj[key], array)
      } else {
        array.push([key, obj[key]])
      }
    }
    return array
  }
  
  function checkObjects(obj1, obj2) {
    const [arr1, arr2] = [deepIteration(obj1), deepIteration(obj2)]
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i][1] !== arr2[i][1]) {
        return false
      } else {
        continue
      }
    }
    return true
  }
  
  
  function deepClone(object, result = {}) {
    for (let key in object) {
      if (typeof object[key] === 'object') {
        result[key] = deepClone(object[key])
      } else {
        result[key] = object[key]
      }
    }
    return result
  }
  
  const initialObject = {
    color: 'white',
    isValid: true,
    size: {
      width: 10,
      height: 10,
      block: {
        isValid: true,
        width: 30,
        height: 30
      }
    }
  }
  
  const clonedObj = deepClone(initialObject)
  
  test()