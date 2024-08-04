//Создайте функцию makeOne, которая пытается вызвать функцию functionWithErrors, и при этом отлавливает ошибку с помощью блока try/catch.
function makeOne() {
	const resultOne = document.getElementById('practicum')
	try {
	functionWithErrors() //Попытка вызова несуществующей функции
	resultOne.textContent = 'Функция вызвана без ошибок'
	} catch (error) {
	resultOne.textContent = 'Ошибка была перехвачена: ' + error.message
	}
}
makeOne()

//Cоздайте функцию makeTwo, которая использует блок try/catch. Создайте код, который пытается перезаписать константу e, обрабатывает ошибку и выводит в <p> - 'Не удалось перезаписать константу: _текст ошибки_', если этот код не выполняется.
function makeTwo() {
    const resultTwo = document.getElementById('practicum')
    const e = 'Меня нельзя перезаписать'
        try {
      e = 'Попытка перезаписать'
      resultTwo.textContent = 'Получилось'
      } catch (error) {
      resultTwo.textContent = 'Не удалось перезаписать константу: ' + error.message
      }
  }
  makeTwo()

  //Допишите функцю makeFive так, чтобы она создала объект ошибки (new Error) и выводила текст ошибки в консоль.
  function makeFive(number) {
    try {
      if (number===0)
      throw new Error('Ошибка')
    // если number равна 0, генерируем ошибку и выводим сообщение ошибки в консоль 
      console.log(number * (number - 1))
    // иначе выводим в консоль результат выражения number * (number - 1)
    } catch (error) {
      console.log('Ваш формат данных некорректен: ' + error.message)
    }
  }
  // makeFive(0)
  makeFive(-1)

  //Создайте функцию makeSix, которая дополнит код предыдущей функции так, чтобы она использовала оператор throw для генерации исключения в случае ошибки, а затем перехватывала это исключение и выводила в консоль сообщение "Ошибка перехвачена".

  function makeSix(number) {
	try {
	  if(number === 0) {
        throw new Error('Ошибка перехвачена')
      } else {
        console.log(num)
      }
	} catch (error) {
	  console.log(error.message)
	}
}
makeSix(0)

//Допишите функцию makeSeven так, что если делитель равен нулю, бросьте исключение с сообщением "Деление на ноль недопустимо".
function makeSeven() {
    try {
      let dividend = 10
      let divisor = 0
      if(divisor===0)
      throw new Error('Деление на ноль недопустимо')
      console.log(dividend / divisor)
    } catch (error) {
      console.log('Ошибка: ' + error.message)
    }
  }
  makeSeven()

//Добавьте в функцию makeNine блок try, в котором адрес будет проверяться на валидность и пробрасываться ошибка, если адрес некорректен Если проверка пройдена успешно, выведите сообщение "Email-адрес корректен" на страницу в <p> Если возникла ошибка (некорректный email), перехватите исключение с помощью блока catch В блоке catch выведите сообщение об ошибке 'Некорректный email-адрес' на страницу в <p>
function makeNine() {
    let email = 'example.com'
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    
    try {
      if(!emailPattern.test(email)) {
        throw 'Некорректный email-адрес'
      }
      document.getElementById('practicum').textContent = 'Email-адрес корректен';
    } catch (error) {
      document.getElementById('practicum').textContent = error
    }
  }
  makeNine()

  //Допишите проверку телефона пользователя, если длина телефона менее 10 символов бросьте исключение throw new Error с сообщением "Некорректная длина телефонного номера"
  function makeTen() {
    try {
      const phoneNumber = '066298207'
      if (!/^\d+$/.test(phoneNumber)) {
          throw new Error('Телефонный номер должен состоять только из цифр')
      }
      if (phoneNumber.length < 10) {
          throw new Error('Некорректная длина телефонного номера')
      }
      console.log('Телефонный номер корректен');  
    } catch (error) {
          console.log(error.message)
    }
  }
  makeTen()

 // Создайте функцию makeEleven, которая проверит возраст пользователя.Если возраст меньше 18 лет, необходимо бросить в консоль исключение типа Error с сообщением "Доступ запрещен для лиц младше 18 лет". В противном случае, выведите в консоль сообщение "Доступ разрешен".
 function makeEleven() {
	try {
    let age = 12
	if (age < 18) {
	  throw new Error('Доступ запрещен для лиц младше 18 лет')
     }
	 else {
		 console.log('Доступ разрешен')
	}
    }
	 catch (error) {
	  console.log(error.message)
}
}
makeEleven()

//Создайте функцию makeSixteen и добавьте try, catch, finally так, чтобы в элемент с id practicum выводился 0 при ошибке. А в элемент с id practicumFinally всегда выводилось слово finally
function makeSixteen() {
    const result = document.getElementById('practicum')
    const forWordFinally = document.getElementById('practicumFinally')
    try {
        if (true) {
        throw new Error('Division by zero')
    }
        const result = 12 / 0
    } catch (error) {
       result.textContent = '0'
    } finally {
      forWordFinally.textContent = 'finally'
    }
  }
  makeSixteen()

  //Создайте функцию makeSeventeen и добавьте try, catch, finally так, чтобы в элемент с id practicum выводилась сумма элементов массива при успешном выполнении функции и сообщение "Ошибка" при ошибке.А в элемент с id practicumFinally всегда выводилась строка "finally17"
  function makeSeventeen() {
	const resultSeventeen = document.getElementById('practicum')
   const forWordFinally = document.getElementById('practicumFinally')
	try{
    const arr = [1, 2, 3]
	const sum = arr.reduce((acc, val) => acc + val, 0)
	resultSeventeen.textContent = sum
    } catch{
      	resultSeventeen.textContent = 'Ошибка'
    } finally{
       forWordFinally.textContent = 'finally17'
    }
}
makeSeventeen()

//Создайте функцию makeEighteen и добавьте try, catch, finally так, чтобы в элемент с id practicum выводилось значение, возвращаемое функцией calculateValue, при успешном выполнении и сообщение "Ошибка" при ошибке А в элемент с id practicumFinally всегда выводилась строка "finally18"
function calculateValue() {
	if (Math.random() < 0.5) {
		throw new Error('Произошла ошибка')
	}
	return 'Успешное выполнение'
}

function makeEighteen() {
    try {
      calculateValue()
    } catch (error) {
      document.getElementById('practicum').textContent = error.message
    } finally {
      document.getElementById('practicumFinally').textContent = 'finally18'
    }
}
makeEighteen()

//Создайте функцию makeTwenty, которая получает json файл, который некорректен. Чтобы предотвратить ошибку, добавьте блок try/catch.
const json = '{ некорректный JSON }';

function makeTwenty() {
  const resultTwenty = document.getElementById('practicum')
  try {
  let user = JSON.parse(json) //Возникает ошибка
  resultTwenty.textContent = user.name //Не сработает
  } catch (error) {
    resultTwenty.textContent = 'Извините, в данных ошибка, мы попробуем получить их ещё раз.'
  }
}

makeTwenty()

//Создайте функцию makeTwentyTwo, которая пытается выполнить некорректную операцию и использует оператор throw и выводит 'Ошибка',ошибка обрабатывается в блоке catch
function makeTwentyTwo() {
    const resultTwentyTwo = document.getElementById('practicum')
    try {
    const divisor = 0
    if (divisor === 0) {
      throw new Error('Ошибка')
    }
    const result = 24 / divisor
    resultTwentyTwo.textContent = result
    } catch (error){
      resultTwentyTwo.textContent = error.message
    }
  }
  makeTwentyTwo()

  //Создайте функцию makeTwentyThree, которая с вероятностью 90% выбрасывает ошибку, и обрабатывает эту ошибку в блоке catch (нужно вывести сообщение об ошибке error.message).
  function makeTwentyThree() {
	const result = document.getElementById('practicum')
	//Блок try
  try {
	const randomValue = Math.random()
	if (randomValue <= 0.9) {
		throw new Error('Искусственная ошибка')
	}
	result.textContent = 'Операция успешно выполнена'
  } catch (error)
  {
    result.textContent = error.message
  }	//Блок catch (error)
}
makeTwentyThree()

//Создайте функцию makeTwentyFour, которая использует setTimeout с блоком try/catch,чтобы обработать ошибку, которая может возникнуть при асинхронном выполнении кода.
function makeTwentyFour() {
    const result = document.getElementById('practicum')
    setTimeout(function() {
    try {
      noSuchVariable 
    } catch (error) {
      result.textContent = error
    }
    }, 1000)
  }
  makeTwentyFour()

  //Создайте функцию makeTwentyFive, которая использует async/await для асинхронной операции и блок try/catch, чтобы обработать ошибку, которая может возникнуть при этой асинхронной операции.
  const result = document.getElementById('practicum')
function simulateAsyncOperation() {
	return new Promise((resolve, reject) => {
		if (Math.random() < 0.9) {
			reject(new Error('Произошла ошибка при асинхронной операции'));
		} else {
			resolve('Асинхронная операция успешно выполнена');
		}
	});
}
async function myFn() {
  result.textContent = 'Ожидание...';
  try {
  	const result = await simulateAsyncOperation();
  	result.textContent = 'Результат: ' + result;
  } catch (error) {
  	result.textContent = 'Произошла ошибка: ' + error.message;
  }
}
myFn()

//Создайте функцию makeTwentySix, которая содержит код с использованием Promise.reject, демонстрирующий, что ошибки внутри этих операций не попадают в блок catch на том же уровне.
function makeTwentySix() {
	const result = document.getElementById('practicum')
	result.textContent = 'Ожидание...'
	try {
		 Promise.reject()
		throw new Error('ошибка')
	} catch (e) {
		result.textContent = 'Ошибка на верхнем уровне: ' + e.message
	}
}
makeTwentySix()

//Выполнение функции упадёт в блок catch?
function makeTwentySeven() {
	const result = document.getElementById('practicum')
	result.textContent = string
	return
	try {
		while (true) {
			// Бесконечный цикл
		}
	} catch (error) {
		result.textContent = 'Произошла ошибка: ' + error.message
	}
}
makeTwentySeven()

//Нет, так как возвращается раньше, чем блок try...catch
















