"use strict";
// ///////// 1 вариант
// let temperature = (C) => {
//     let F = (9 / 5) * C + 32;
//     result = alert(`Цельсий: ${C}, Фаренгейт: ${F}`);
// }

// temperature(8);




////////////2 вариант 
function temperature() {

    let c = prompt("Цельсия");
    let f = (9 / 5) * c + 32;
    window.alert(`Цельсий: ${c}, Фаренгейт: ${f}`);
}

temperature();


/////////не вышло с событием

// var element = document.getElementById("inputC");
// var result = element.value();
// result.addEventListener('click', temperature);

// 2. по методичке 
let admin;
let name = "Василий";
admin = name;
window.alert(admin);

//3. по методичке 
var result = 1000 + "108"; // получится число
window.alert(result);

