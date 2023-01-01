/* • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • JavaScript необходимые основы для начинающих • • • • •
• • • • • • • • • • • • практический курс • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • */
// ================== 0. Настройка окружения ===============
/*
- Установка редактора
- Установка плагина liveServer
- Моя тема Ayu
- Создание проекта
*/

// =================== 1. Подключение ===================
/*
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии
*/

//======================= 2. Переменные ===============
let userName = "Mark";
console.log("hello", userName);

// ====================== 2.1 Типы переменных ==============

// новый стандарт es6;
// let - переменная
// const - константа

// старый стандарт es5;
// var - переменная

userName = "egot";
console.log(userName);

// const не может менять значение и будет ошибка даже если просто обьявить переменную а потом этой переменной задать значение и это приведет к ошибке в отличие от let

// const yearBirth = 2000
// yearBirth = 2001

// зачастую программа пишеться используя лишь одни константы и только тогда когда мы понимаем что переменная будет менять свое значение мы используем let таким образом мы можем более точно контролировать программу понимая что у нас меняеться а что нет

// var - это старый фармат обьявления переменной
//в отличие от let и  const имеет функциональную область видимости а не блочную  как пример ну или глобальную в то время как let & const глобальную область видимости

// function test1() {
//   var usersName = "igor";
//   console.log(usersName);
// }
// test1()
// console.log(usersName);

// ===================== 2.2 Типы данных =======================
// let a = 'mark' - string // strng
let a1 = 20 - Number// number
let a3 = isTrue = true // boolean true/false
// null - не чего пусто и значение неизвестно если мы хотим обнулить каккое то значение или переменную то записаваем null not undefiend
// undefined - значение не присвоено или не определено
// обьекты
// массивы
// дополниительные :
// bigInt - для работы с большими числами для этого нужно прописать вконце n
// symbol - это уникальное примитивное значение,позволяет добовлять уникальное свойство к обьекту с уверенностью что он не перезапишет не какое другое свойство
// Динамическая типизация
let someVarible = 'some'// string now
someVarible = 50 // number now its chached 

// оператор typeof
const b = true
console.log(typeof b)

// =============Операторы сравнения и условия ====================
 
// операторы сравнения
// >, <, >=, <=, - больше меньшебольше либо равно меньше либо равно
// == - нестрогое равно
// === - строгое равно
// != - нестрогое неравенство
// !== - строгое неравенство

console.log(5 == '5'); // true
console.log(5 === '5');// false

// ========================== Условие ====================

const time = 20

if (time < 12) {
  console.log('good morning')
} else if (time >= 12 && time <= 18) {
  console.log('good evening');
} else {
  console.log('good night');
}

// логические операторы
// && - логичиское и
// || - логическое или
// !true - логичиское не

// ====================== Тернарный оператор ========================


10 < 12 ? console.log('good') : console.log('bad')
let times = 13
let greeting = times < 12 ? 'good morning' : 'good eveningg'
console.log(greeting);
// (условие) ? (условие верно) : (условие не верно)

// ================== канкатенация строк и шаблонные строки ================

let greetings = 'hello, kamil!'
let g1 = ' glad to see u'
let seyHi = greetings + g1
console.log(seyHi);

// шаблонная строка

let g2 = 'im happy'
console.log(`good morning ${g2}`);

// ========================= 6. Функции ===========================

function sayHi() {
  console.log('hello my user');
}
sayHi() // function declaration

const ss = function() {
  console.log('hiiiiiiii');
}
ss() //  function expression 

// =========================== Параметры и аргументы ================

function sss(name) {
  console.log(`hello my friend ${name}`);
}
sss('umar') 
sss('islam') 
sss('amina') 

// ========================== аргументы ===================

function summ(a,b) {
  return a + b
}
console.log(summ(10,15));
const result  = summ(summ(40,50), summ(90,80))
console.log(result);


function dosomething(func) {
  let x = 15
  let y = 20
  const yy = func(x,y)
  console.log(yy);
}
dosomething(summ);

// ========================Самовызывающаяся функция =====================
 
 (function (a,b) {
  console.log(a + b);
  // return a + b
}(9,9))


//  это старый формат записи и редкий нужно обернуть функцию в скобки и вызвать даже можно убрать имя и уже она будет анонимной либо можно все обернуть в переменную и потом вызвать как пример 

// let resr =  (function (a,b) {
//   return a + b
// }(9,9))
// console.log(resr);

// ========================стрелочные функции ==========================

function sayHi1(name) {
  console.log(`helo ${name} world`);
}
sayHi1('uuu') // old forms

const sayHi2  = (name) => {
  console.log(`hello ${name} yyy`);
}
 sayHi2('iiii')

//  const sayHi2 = (name => console.log(`hello ${name} yyy`))
//  sayHi2('iiii') - можно еще и так сократить но функция все равно будет возврощать undefined потому что лоп по умолчанию возврощает undefined

const summ2  = (a , b) => {
  return a + b
}
console.log(summ2(3,3)); // или еще можно сократить 
 const summ3 = (a,b) => a + b
 console.log(summ3(4,4));

 // ======================= Массивы ================================

 const autoBrands1 = 'audi'
 const autoBrands2 = 'bmw'
 const autoBrands3 = 'mazda'
 const autoBrands4 = 'toyota'

 const autoBrands = ['audi','bmw','mazda','toyota']
 console.log(autoBrands);
 console.log(autoBrands[0]);
 console.log(autoBrands[1]);
 console.log(autoBrands.length);

 // ========================== Методы массивов =======================

 // .push(), .pop(), shift(), unshift(), .splice(), .slice(), .forEach(), .indexOf(), .includes()  ...

/*
.push(...items) – Добавить элемент в конец массива
arr.pop() – Удалить элемент из конца массива
arr.shift() – Удалить элемент из начала массива
arr.unshift(...items) – Добавить элемент в начало массива
arr.splice([start]], [deleteCount, newElements])
*/


autoBrands.push('nissan')
console.log(autoBrands);
autoBrands.splice(1,1)
console.log(autoBrands);

// ====================== Циклы ======================

// если нужно выполнять какие то циклические операции н количество раз что бы не вызывать функцию 10 раз к примеру можно внутрь цикла поместить и сказать запусти код 10 раз и еще нужны циклы для обхода массива 

for ( let i = 0; i <= 10; i+=2) {
  console.log(i);
}

const ooo = ['audi','bmw','mazda','toyota']
// for(i = 0; i < 4; i++) {
//   console.log(ooo[i]);
// }

// function tesla(ooo) {
//  const count = []
//   for(i = ooo.length -1; i >= 0; i--) {
//     count.push(ooo[i])
//   }
//   return count
// }
// console.log(tesla(ooo))

// ===================== Обход массива циклом for of ================

for( el of ooo) {
  console.log(el);
}

// =====================Обход массива меод forEach =====================

ooo.forEach((el,index) => {
  console.log(el,index);
}) 

// также можно передедать вор ич в качестве аргумента в другую функцию но вызывать ее там не нужно

ooo.forEach(ky)

function ky(el,index) {
  console.log(el,index);
}

// ======================== Обьекты ===========================

const person = {
  nameMen: 'mark', 
  age: 20,
  isMaried: true,
  profession: 'IT'
}
const pro = 'profession'
person.proJs = 'JS - Developer'
console.log(person);
console.log(person.age);
console.log(person["isMaried"]);
console.log(person[pro]);
console.log(person.proJs);

//так же можно оброщаться к свойствам обьекта через квадратные скобки и внутри нужно обернуть в строку или если в обьекте есть данные которые передаються как переменыые то они тоде в квадратных скобках но не нужно обертывать их в строку

// const name = "kamil";
// const postsQty = 25;

// const useProfile = {
//   name,
//   postsQty,
//   agree: false,
// };
// console.log(useProfile);

// const name = 'kamil'
// const age = 25
// const is = true

// const useProfile = {
//   name,
//   age,
//   is,
//   info: {
//     tt:'rr'
//   }
// }
// console.log(useProfile);

// ================= Методы обьектов ====================

const person1 = {
  name: 'oleg',
  tall: 180,
  small: false,
  ff: function (name) {
    console.log(this)
    console.log(`hello ${name} my name is ${this.name}`);
  }
}
person1.ff('james') // записали функцию в обьект 
// так же можно добваить функцию в обьект 

// person1.ff = function(name) {
//   console.log(`привет ${name}`);
// }
// person1.ff('kamil') // так же можно добваить функцию в обьект  

// ============== Обьекты обход циклом for in(не путиать с for of)========
// в отличииот for .... of - for ... in - может обходить не итерируемые обьекты и возврощать ключи

for( key in person1) {
  console.log(key);
  console.log(key,':',person[key]);
}

const personInterect = {
  name : 'job',
  age: 101,
  isMaried: false
}
for(let el in personInterect) {
  console.log(el);
  console.log(personInterect[key]);
}

// =================== Классы конструкторы обьектов ==============
// опишем класс это как чертеж для всех будущих обьектов person которые будут создаваться на его основе

class people {
  constructor(name,age,married,game) {
    this.name = name,
    this.age = age,
    this.married = married
    this.game = game
  }
}

const person2 = new people('stive',45,true,false)
const person3 = new people('oleg',41,false,false)
const person4 = new people('ramin',36,true,true)
const person5 = new people('ramazan',40,false,true)
const person6 = new people('arsen',45,false,'generalse')
console.log(person2, person3,person4,person5,person6);

// ====================== Выбор дом элкментов ====================
// выбор одного элемента dom по селектору
// document.querySelector('selector')

// document.querySelector('h2').style.color='red'
// document.querySelector('h2').classList.add('red')
// const heding3 = document.querySelector('h3')
// heding3.classList.add('green')

document.querySelector('.heading-3').classList.add('red')
const headings = document.querySelectorAll('h2')

for(el of headings) {
  el.classList.add('red')
  el.style.color = 'red'
}

// const paragrafs = document.querySelectorAll('p')
// for(el of paragrafs) {
//   el.classList.add('green-text')
// }
// paragrafs.forEach(el => el.classList.add('green-text'))
document.querySelectorAll('p').forEach(el => el.style.color = 'green')

// ====================Также есть есть следующие методы ==============

// document.getElementsByClassName() // выбор коллекции элементов по css классу
// document.getElementsByTagName()// выбор коллекции элементов по тегу
// document.getElementById()// выбор коллекции элементов по ID

// ==================== Работа с CSS классами =====================

// element.classList.add()
// .add()
// .remove()
// .toggle()
// .contains()

const hesding = document.querySelector('h4')
hesding.classList.add('blue')
hesding.classList.remove('blue')
hesding.classList.toggle('blue')
hesding.classList.contains('blue') // возврощает true/false - также можно проводить условие
// также можно с тоглом провододить условие если он возврощает тру то на основании этого проводить условие если нет то иное и нужно записать в пременную перед этим например
// const res = hesding.classList.toggle('blue')
// if (res) /* тоесть он тру */ {

// } else {

// } // ну типо того

// ====================== Работа с атрибутами ===================

/*
getAttribute(attrName) — возвращает значение указанного атрибута
setAttribute(name, value) — добавляет указанные атрибут и его значение к элементу
hasAttribute(attrName) — возвращает true при наличии у элемента указанного атрибута
removeAttribute(attrName) — удаляет указанный атрибут

toggleAttribute(name, force) — добавляет новый атрибут при отсутствии или удаляет существующий атрибут.
hasAttributes() — возвращает true, если у элемента имеются какие-либо атрибуты
getAttributesNames() — возвращает названия атрибутов элемента
*/

const image = document.querySelector('#logo')
const srcValue = image.getAttribute('src')
console.log(srcValue);
image.setAttribute('src','./img/php.png')
image.setAttribute('width','250')
image.src = './img/js.png'



// ================= Работа с прослушкой событий ==============

const button = document.querySelector('#button')
button.value = 'Delete'
button.addEventListener('click', function() {
  console.log('Click');
  image.remove()
}) // данный способ слушателя события можно будет поствить много раз и они будут все выполянться 

// button.onclick = function() {
//   console.log('here');
// }
// button.onclick = function() {
//   console.log('here1');
// } // этот способ слушателя события нельзя много раз навесить на одну и туже кнопку так как следующий будет перезатирать предыдущий

// ==================== Прослушка событий форма =======================

const inputText = document.querySelector('#input-text')
const textBlock = document.querySelector('#text-block')
inputText.addEventListener('input', () => {
  textBlock.innerHTML = inputText.value
})

// =================== event ================

const list  = document.querySelector('#list')
list.addEventListener('click', (e) => {
  console.log(this);
  console.log(e);
   console.log(e.target);
})

// ==================== Работа с элементами ====================

/*
// Создать элемент
document.createElement('tag-name')

// Изменить HTML содержимое внутри элемента
element.innerHTML = ''

// Изменить Текстовое  содержимое внутри элемента
node.innerText = ''

// Клонирование элемента
node.cloneNode() // true c внутренним содержимым (текст и теги), false - без внутреннего содержимого

// вставить элемент внутрь другого элемента
element.append(nodesOrDOMStrings)

// Удалить элемент
element.remove()
*/

const container = document.querySelector('#elementsContainer')
const newHide = document.createElement('h1')
newHide.innerHTML = 'New lesson'
container.append(newHide)

 // копирование шапки

const mainHeader = document.querySelector('header')
const copyHeader = mainHeader.cloneNode(true)
container.append(copyHeader)

// ===================== ToDO список задач ================================

const toDoList = document.querySelector('#todo-list')
const toDoForm = document.querySelector('#todo-form')
const toDoInput =document.querySelector('#todo-input')
const toDoButton = document.querySelector('button')

// toDoForm.addEventListener('submit',(e) => {
//   e.preventDefault()
//   const taskText = toDoInput.value
//   const li = document.createElement('li')
//   li.append(taskText)
//   toDoList.append(li)
//   toDoInput.value = ''
//   toDoInput.focus()
//   const deleteBtn = document.createElement('button')
//   li.append(deleteBtn)
//   deleteBtn.setAttribute('role','button')
//   deleteBtn.innerHTML = 'x'
//   deleteBtn.style['margin-left'] = '10px'
//   deleteBtn.style.background = 'lightgreen'
//   deleteBtn.style.color = 'red'
//   deleteBtn.addEventListener('click', e => e.target.closest('li').remove())
//   // deleteBtn.addEventListener('click',function() {
//   //   this.closest('li').remove()
//   // })
// })

// toDoForm.addEventListener('submit', (e) => {
// e.preventDefault()
// const taskText = toDoInput.value
// const li = document.createElement('li')
// li.append(taskText)
// toDoList.append(li)
// toDoInput.value = ''
// toDoInput.focus()
// const deleteBtn = document.createElement('button')
// deleteBtn.setAttribute('role','button')
// deleteBtn.innerHTML = 'x'
// deleteBtn.style['margin-left'] = '15px'
// li.append(deleteBtn)
// deleteBtn.addEventListener('click', e => e.target.closest('li').remove())
// })

// ================== setInterval ==========================

// const linux = setInterval(() => {
//   console.log('hello');
// },1000)

// clearInterval(linux)

// ======================= setTimeout

// const linux1 = setTimeout (() => {
//   const linux = setInterval( () => {
//     console.log('hello');
//   },1000)
//   return linux
// },2000)

// const linux = setInterval (() => {
//   console.log('hello')
// },1000)
// const linux2 = setTimeout (() => {
//   clearInterval(linux)
// },10000)


// ====================== Секундомер ==========================
const counterEl = document.querySelector('#counter')
const start = document.querySelector('#start')
const pause = document.querySelector('#pause')
const reset = document.querySelector('#reset')
let counter = 0
let timerID

start.addEventListener('click',() => {
  timerID = setInterval(() => {
    counter++
    counterEl.innerHTML = counter
  },1000)
})

pause.addEventListener('click',() => {
  clearInterval(timerID)
})

reset.addEventListener('click',() => {
  counter = 0
  counterEl.innerHTML = counter
  clearInterval(timerID)
})

// ==================== callback, callback hell =====================

const checkRooms = (success,faled) => {

  setTimeout(() => {
    console.log('check rooms in  a hotel');
    const avalible = false

    if (avalible) {
      let message = 'have numbers'
      // success(message)
      // submitVacation(message)
    } else {
      let message = 'dont have a numbers'
      faled(message)
      // cancelVacation(message)
    }
  },1000)
}

function checkTikets(message,success,faled) {
  setTimeout(() => {
    console.log('.......function - checTickets.......');
    console.log('res - prev-state', message);
    console.log('check - Tickets');

    const avalibaleTickets = true

    if (avalibaleTickets) {
      let message = 'have tickets'
      success(message)
    } else {
      let message = 'dont have tickets'
      faled(message)
    }

  },500)
}
 
checkRooms(function(messageFromCheckRomms) {
  submitVacation(messageFromCheckRomms)
},function(messageFromCheckRomms) {
  cancelVacation(messageFromCheckRomms)
})


function cancelVacation(message) {
  console.log('cancelVacation.......');
  console.log('res in the prev state', message);
  console.log('wekeend is a cancel');
}

function submitVacation(message) {
  console.log('......cancelVacation.......');
  console.log('res in the prev state', message);
  console.log('!wekeend is a cancel');
}








// start.addEventListener ('click',() => {
//   timerID = setInterval  (() => {
//     counter ++
//     counterEl.innerText = counter
//   }, 1000)
// })

// pause.addEventListener('click',() => {
//   clearInterval(timerID)
// })

// reset.addEventListener('click', () => {
//   counter = 0
//   counterEl.innerText = counter
//   clearInterval(timerID)
//   console.log(timerID);
// })



// ===================== Создание промисов ====================

const myPromise = new Promise((resolve, reject) => {
  console.log('start');
  setTimeout(() => {
    const res = false
    if (res) {
      let message = 'SUCCES'
      resolve(message)
    }else {
      let message = 'FALED'
      reject(message)
    }
  },1000)
})
myPromise.then((data) => {
  console.log(data);
}).catch((data) => {
  console.log(data,'- error');
})

// ================= Practice ===============
const checkRoomss = new Promise((resolve,reject) => {
  console.log('statts');
  setTimeout(() => {
    console.log('rooms');
    const avalibaleRooms  = true
    if(avalibaleRooms) {
      console.log('have rooms');
      let message = 'OK'
      resolve(message)
    } else {
      console.log('dont have rooms');
      let message = 'ERROR'
      reject(message)
    }
  },1000)
})
checkRoomss.then((data) => {
  console.log(data);
}).catch((data) => {
  console.log(data);
})




const arr7 = [1,2,3,4,5]

// function tesla(arr7) {
//   const box = []
//   for(i = arr7.length -1; i >= 0; i--) {
//     box.push(arr7[i])
//   }
//   return box
// }


// const tesla = (arr7) => {
//   const box = []
//   arr7.forEach(el => box.unshift(el))
//   return box
// }
// console.log(tesla(arr7));

// ==================== async / await - Promise ===================

const promiseFn = () => {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
      const result = true
      if (result) {
        console.log('done');
      } else {
        console.log('error');
      }
    },2000)
  })
}
// promiseFn()

 const yyy = async () => {
  try {
    const result = await promiseFn()
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

yyy()

const getcurrency = async () => {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
  const data = await response.json()

  const usdRate = data.Valute.USD.Value.toFixed(2)
  const eurRate = data.Valute.EUR.Value.toFixed(2)

  const usdEl = document.querySelector('#usd')
  const eurEl = document.querySelector('#eur')

  usdEl.innerHTML = usdRate
  eurEl.innerHTML = eurRate


}

getcurrency()