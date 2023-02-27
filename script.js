
let wordArr = ['яблоко', 'груша', 'дыня', 'виноград', 'персик', 'апельсин', 'мандарин'];

let gameTwo = (arr) => {
    let question1 = '';
    let question2 = '';
    let answers = 0;
    arr =arr.sort(()=>Math.random()-0.5)
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
