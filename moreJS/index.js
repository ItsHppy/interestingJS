//создание массива
const roles = ['user', 'admin', 'manager', 'nigga', 'adolf']
console.log(roles)

//узнать длину массива

console.log(roles.length)

//Задание - узнать последний элемент массива

console.log(roles[roles.length - 1])
console.log(' ')
//Добавление элементов
const user = ['Рагнар', 'Флоки', 'Лагерта'];

user[2] = 'Бьерн'
user[5] = 'Роло'

//добавление элементов (push(), unshift(), pop(), shift())
const user1 = ['Рагнар', 'Флоки', 'Лагерта'];

user1.push('Бьерн')
user1.unshift('Роло')
user1.pop()
user1.shift()

console.log(user)
console.log(user1)
console.log(' ')
//метод slice
const roles1 = ['user', 'admin', 'superuser', 'manager'];
//до определенного элемента убирает
const res = roles1.slice(2)
console.log(roles1)
console.log(res)
//после определенного элемента оставляет
const res2 = roles1.slice(0, 2)
console.log(res2)
//Отрицательный slice, считает с конца и удаляет все элементы, которые находятся перед определенным
const res3 = roles1.slice(-2)
console.log(res3)
//Убирает элементы до определенного 1 элемента и удаляет все числа после 2 элемента
const res4 = roles1.slice(1, -1)
console.log(res4)
console.log(' ')
//медот splice

const res5 = roles1.splice(2)
console.log(roles1)
console.log(res5)
console.log(' ')

//метод reverse
const roles2 = ['user', 'admin', 'superuser', 'manager'];
const res6 = roles2.slice().reverse();
console.log(roles2);
console.log(res6);
console.log(' ')

//метод concat (обЪеденение массивов)
const roles3 = ['user', 'admin', 'superuser', 'manager'];
const newRoles = ['sysadmin', 'developer'];
const newRoles1 = roles3.concat(newRoles)
console.log(roles3)
console.log(newRoles1)
console.log(' ')

//из строки в массив и обратно
const roles4 = ['user', 'admin', 'superuser', 'manager'];
const url = 'auth/user/login'
const res7 = url.split('/')
console.log(roles4)
console.log(res7)
//обратно
const res8 = roles4.join('-')
console.log(res8)
console.log(' ')

/*Дан список задач
const tasks = ['Задача 1']
Сделать функции:
- Добавление задач в конец
- Удаление задачи по названию
- Перенос задачи в начало списка
Всегда меняем исходный массив
*/

const tasks = []

function Add(task) {
    tasks.push(task)
}

function Remove(task) {
    const index = tasks.indexOf(task) //indexOf исчет значения: если находит - выявляет 1, не находит - выявляет -1
    if (index === -1) {
        return
    }
    tasks.splice(index, 1) //slice использует копию, а splice - исходный аргумент
}
function Prior(task) {
    const index = tasks.indexOf(task)
    if (index === -1) {
        return
    }
const oldTask = tasks[index] //убирает из массива
tasks.splice(index, 1)
tasks.unshift(oldTask)
}

Add('Задача 1')
Add('Задача 2')
Add('Задача 3')
//Remove('Задача 2')
Prior('Задача 3')
console.log(tasks)