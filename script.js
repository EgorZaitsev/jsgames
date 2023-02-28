
let wordArr = ['яблоко', 'груша', 'дыня', 'виноград', 'персик', 'апельсин', 'мандарин'];


let months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
let yearTimes = ['зима', 'весна', 'лето', 'осень'];


let helper = ['Имеет иголки','Находится в лесу'];

let gameOne = (arr, array) => {
    let index = 0; 
    index = Number(prompt('Введите номер месяца'))-1;
    for(let i = 0; i<=11; i++) {
        if(i === index) {  
            alert(arr[i]);
            break;
        }
    }
    switch(index){
        case 2: case 3: case 4:
            alert(array[1]);
            break;
        case 5: case 6: case 7:
            alert(array[2]);
            break;
        case 8: case 9: case 10:
            alert(array[3]);
            break;
        case 0: case 1: case 11:
            alert(array[0]);
            break;
        default:
            break;
    }
     
}



let gameTwo = (arr) => {
    let question1 = '';
    let question2 = '';
    let answers = 0;
    arr = arr.sort(()=>Math.random()-0.5)
    arr.forEach(item => {
        alert(item);
    });
    question1 = prompt('Чему равнялся первый элемент массива?');
    question1 = question1.toLowerCase();
    question2 = prompt('Чему равнялся последний элемент массива?');
    question2 = question2.toLowerCase();
    question1 === arr[0] ? answers += 1 : answers = 0;
    question2 === arr[arr.length - 1] ? answers +=1 : answers += 0;
    console.log(answers);
    switch(answers) {
        case 0: 
            alert("Ответы неверны");
            break;
        case 1:
            alert('Вы были близки!');
            break;
        case 2:
            alert('Оба ответа верны');
            break;
        default:
            alert('Что то пошло не так! повторите попытку');
            break;
    }

}



let gameThree = (helper) => {
    let needhelp = false;
    let helps = 2;
    let trys = 3;
    let answer = '';
    alert("Загадка: Зимой и летом - одним цветом");
    while(trys > 0) {
        answer = prompt("Ваш ответ");
        answer = answer.toLowerCase();
        if (answer === 'ель' || answer === 'елка' || answer === 'ёлка') {
            alert("Верно")
            break;
        }
        else {
            trys -= 1;
            alert(`Неверно. Осталось попыток: ${trys}.`);
        }
        if(trys === 0) break;
        needhelp = confirm(`Хотите получить подсказку? Осталось подсказок: ${helps}`)
        if(needhelp) {
            alert(helper[helps-1]);
            helps -= 1;
        }

        
    }
}



