'use strict'

let month = 7;
switch(month) {
    case 1:
    case 2:
    case 3:
        console.log(`Месяц ${month} => 1 квартал`);
        break;
    case 4:
    case 5:
    case 6:
        console.log(`Месяц ${month} => 2 квартал`);
        break;
    case 7:
    case 8:
    case 9:
        console.log(`Месяц ${month} => 3 квартал`);
        break;
    case 10:
    case 11:
    case 12:
        console.log(`Месяц ${month} => 4 квартал`);
        break;
}