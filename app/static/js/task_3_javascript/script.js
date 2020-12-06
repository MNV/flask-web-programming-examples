function handler_click() {
    /* Обработка события клика */

    alert('Вы кликнули по блоку. Спасибо!');
}

block_click.addEventListener("click", handler_click);

class BlockMouseDown {
    /* Обработка события нажатия и отжатия кнопки мыши */

    handleEvent(block_onmousedown) {
        let method = 'on' + block_onmousedown.type[0].toUpperCase() + block_onmousedown.type.slice(1);
        this[method](block_onmousedown);
    }

    onMousedown() {
        block_onmousedown.innerHTML = "Кнопка мыши нажата";
    }

    onMouseup() {
        block_onmousedown.innerHTML += "...и отжата";
    }
}

let blockMouseDown = new BlockMouseDown();
block_onmousedown.addEventListener('mousedown', blockMouseDown);
block_onmousedown.addEventListener('mouseup', blockMouseDown);

class BlockMouseOver {
    /* Обработка события наведения курсора на елемент */

    handleEvent(block_onmouseover) {
        let method = 'on' + block_onmouseover.type[0].toUpperCase() + block_onmouseover.type.slice(1);
        this[method](block_onmouseover);
    }

    onMouseover() {
        block_onmouseover.innerHTML = "Курсор находится поверх блока";
    }

    onMouseout() {
        block_onmouseover.innerHTML += "...теперь курсор вне блока";
    }
}

let blockMouseOver = new BlockMouseOver();
block_onmouseover.addEventListener("mouseover", blockMouseOver);
block_onmouseover.addEventListener("mouseout", blockMouseOver);

function handler_block_add() {
    /* Добавление нового блока */

    // Создание нового блока
    let newBlock = document.createElement('div');
    let newBlockText = "🎉 Ура! Новый блок! Кликните, чтобы обновить его.";
    newBlock.id = "block_change";
    newBlock.className = "col-lg-6 rounded text-center m-4 p-4 shadow pointer";
    newBlock.innerHTML = newBlockText;

    // Добавление блока
    let newBlocks = document.getElementById('new_blocks');
    new_blocks.appendChild(newBlock);
}

block_add.addEventListener("click", handler_block_add);

function handler_block_change(element) {
    /* Обработка события изменения блока */

    let texts = [
        "Новый текст! 👏 Кликните еще раз.",
        "Текст обновился! 🎊 Нажмите еще раз.",
        "Новая надпись! 🥳 Попробуйте клинуть еще раз.",
        "Изменение текста! 👍 Нажмите еще раз.",
        "Содержимое поменялось! 🎉 Попробуйте нажать еще раз.",
    ];
    element.innerHTML = texts[Math.floor(Math.random() * texts.length)];
}

document.addEventListener('click', function (e) {
    if (e.target && e.target.id == 'block_change') {
        handler_block_change(e.target);
    }
});

function handler_block_matrix(element) {
    /* Генерация таблицы умножения */

    let space = 5;
    element.innerHTML = "Таблица умножения<br /><br />";
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {

            element.innerHTML += String(i * j).padStart(space, String.fromCharCode(160)) + " ";
        }
        element.innerHTML += "<br />";
    }
    element.innerHTML += "<small class='text-muted'>Цикл «for»</small>";

}

block_calculations.addEventListener("click", function (e) {
    handler_block_matrix(e.target);
});

function handler_block_while(element) {
    /* Обработка последовательности */

    element.innerHTML = "Обработка последовательности";
    element.innerHTML += "<p><small class='text-muted'>Цикл «while»</small></p>";

    let i = 1;
    while (i < 4) {
        alert("Сообщение №" + i + ".");
        i++;
    }
}

block_while.addEventListener("click", function (e) {
    handler_block_while(e.target);
});

function handler_block_dowhile(element) {
    /* Обработка последовательности в обратном порядке */

    element.innerHTML = "А теперь в обратном порядке 🙂";
    element.innerHTML += "<p><small class='text-muted'>Цикл «do..while»</small></p>";

    let i = 3;
    do {
        alert("Сообщение №" + i + ".");
        i--;
    } while (i > 0);
}

block_dowhile.addEventListener("click", function (e) {
    handler_block_dowhile(e.target);
});

function handler_block_foreach(element) {
    /* Перебор элементов */

    element.innerHTML = "Перебор элементов";
    element.innerHTML += "<p><small class='text-muted'>Цикл «forEach» и стрелочная функция</small></p>";

    let group = {
        title: "Студент нашей группы",
        students: ["Петров П.В.", "Иванов Ф.И.", "Сидоров А.П."],

        getList() {
            this.students.forEach(
                student => alert(this.title + ': ' + student)
            );
        }
    };
    group.getList();
}

block_foreach.addEventListener("click", function (e) {
    handler_block_foreach(e.target);
});

function handler_block_map(element) {
    /* Перебор элементов */

    element.innerHTML = "Информация о студентах";
    element.innerHTML += "<p><small class='text-muted'>Отображение - «Map», цикл «for..of» и стрелочная функция</small></p>";

    let studentsMap = new Map([
        [
            "petrov", {
            name: "Петров П.В.",
            group: "ПИ-18У",
        }
        ],
        [
            "ivanov", {
            name: "Иванов Ф.И.",
            group: "ПИ-18В",
        }
        ],
        [
            "sidorov", {
            name: "Сидоров А.П.",
            group: "ПИ-20СВ",
        }
        ],
    ]);
    // добавление элемента
    studentsMap.set("vasechkin", {
        name: "Васечкин В.А.",
        group: "ПИ-20С",
    });
    // изменение элемента
    studentsMap.set("ivanov", {
        group: "ПИ-20С",
        name: "Иванов Ф.И.",
    });

    let names = [];
    for (item of studentsMap) {
        alert("Ключ элемента: '" + item[0] + "'. Данные объекта: группа - " + item[1].group + ", имя - " + item[1].name);
        names.push(item[1]);
    }

    alert("Имена студентов: " + names.map(item => item.name));
}

block_map.addEventListener("click", function (e) {
    handler_block_map(e.target);
});
