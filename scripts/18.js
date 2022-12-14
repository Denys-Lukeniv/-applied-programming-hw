// ### Данное задание не обязательно для выполнения

// ## Задание

// Создать объект студент "студент" и проанализировать его табель.

// #### Технические требования:
// - Создать пустой объект `student`, с полями `name` и `last name`. 
// - Спросить у пользователя имя и фамилию студента, полученные значения записать в соответствующие поля объекта.
// - В цикле спрашивать у пользователя название предмета и оценку по нему. Если пользователь нажмет Cancel при n-вопросе о названии предмета, закончить цикл. Записать оценки по всем предметам в свойство студента `tabel`.
// - Посчитать количество плохих (меньше 4) оценок по предметам. Если таких нет, вывести сообщение `Студент переведен на следующий курс`. 
// - Посчитать средний балл по предметам. Если он больше 7 - вывести сообщение `Студенту назначена стипендия`.

// #### Литература:
// - [Объекты как ассоциативные массивы](https://learn.javascript.ru/object)
// - [Перебор свойство объектов](https://learn.javascript.ru/object-for-in)

let student = {
    name: '',
    lastname: '',
    table: []
}

student.name = prompt('Ваше імʼя?', '');
student.lastname = prompt('Ваша фамілія?', '');

let askStudent = true

while (askStudent) {
    let subject = prompt('Введіть предмет та бал', '');

    if (subject == null) {
        checkProgress()
        askStudent = false
        break
    }

    subject = subject.split(' ');
    if (subject.length != 2 || String(parseInt(subject[1])) == 'NaN' || parseInt(subject[1]) > 12) {
        alert("Не вірно введені дані")
        continue
    }

    student.table.push(subject)
}

function checkProgress() {
    let fail = 0;
    let res = 0;
    student.table.forEach((el) => {
        res += parseInt(el[1]);
        if (el[1] < 4) {
            fail++;
        }
    })

    if (fail) {
        alert("Студента не переведено")
        return
    }
    
    alert(res/student.table.length > 7 ? "Студента переведено со стіпухой" : "Студента переведено")
}
