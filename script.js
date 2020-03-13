function showMessage01() {
    alert('Сколько минут сериалов ты посмотрел на этой неделе?');
    var outputsirial = document.getElementById('outputsirial');
    var srial = prompt("Сколько серий сериалов ты посмотрел на этой неделе?", "");
    var rialminit = prompt("А сколько минут длилась каждая серия?", "");
    allsrial = +srial * +rialminit;
    alert("Столько времени ты сжег. ПОЗДРАВЛЯЮ! " + allsrial);
    outputsirial.value = allsrial;
}
var elem1 = document.querySelector('#sirialminut');
elem1.addEventListener('click', showMessage01);


function showMessage02() {
    alert('Переводим сантиметры в дюймы');
    var inchmod = 2.54;
    do {
        var inch01 = prompt("На сколько сантиметров ты готов подвигать своих спейсмаринов?", "");
        allsant = inch01 / inchmod;
        alert("Спэйсмарины побежали дистанцию  " + allsant + " дюймов");
    } while (uahValue !== null)

}
var elem2 = document.querySelector('#wahabtn');
elem2.addEventListener('click', showMessage02);




function showMessage3() {
    alert('Приблизительно считаем сколько книг ты читаешь в год');
    var book1000 = 1000;
    var book500 = 500;
    var book250 = 250;
    var book100 = 100;

    do {
        var bookcount1000 = prompt("Сколько ты читаешь книг с обьемом от 1000 до 500 страниц?", "");
        var bookcount500 = prompt("Сколько ты читаешь книг с обьемом от 500 до 250 страниц?", "");
        var bookcount250 = prompt("Сколько ты читаешь книг с обьемом от 250 до 100 страниц?", "");
        var bookcount100 = prompt("Сколько ты читаешь книг с обьемом от 100 и менее?", "");

        allbookcount = book1000 * bookcount1000 + book500 * bookcount500 + book250 * bookcount250 + book100 * bookcount100;
        allpage = allbookcount / 360;
        alert("Ты читаешь страниц в год " + allbookcount);
        alert("А столько страниц в длень ты в среднем читаешь " + allpage);

    } while (uahValue !== null);
}

var elem3 = document.querySelector('#bookbtn');
elem3.addEventListener('click', showMessage3);


document.getElementById('check').onclick = function () {
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    var credentials = {
        login: 'admin',
        password: 'qwerty',
    };
    var myArrayVariable;
    style2 = rad.style;
    if (credentials.login == login && credentials.password == password) {
        green.style.display = "block";
    } else {
        style2.display = "block";
    }
}
var rad = document.getElementById('radalert');
rad.addEventListener('click', function (event) {
    rad.style.display = "none";
    document.getElementById('login').value = '';
    document.getElementById('password').value = '';

});
var green = document.getElementById('greenalert');
green.addEventListener('click', function (event) {
    green.style.display = "none";
    document.getElementById('login').value = '';
    document.getElementById('password').value = '';

});


