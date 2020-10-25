"use strict";

const createNewUser = function() {
    let askName = prompt ("Enter your first name");
    let askLastName = prompt ("Enter your last name");
    let dateStr = prompt ("Enter your day of birth in the way: dd.mm.yyyy");
    let dateSplit, dateFix, userDate, age;

    let dateYear = dateStr.slice(6);
    let dateMonth = dateStr.slice(3, 5);
    let dateDay = dateStr.slice(0, 2);
    dateSplit = '-';
    dateFix = dateYear + dateSplit + dateMonth + dateSplit + dateDay;

    userDate = new Date(dateFix);

    const newUser = {
        firstName: askName.toLowerCase(),
        lastName: askLastName.toLowerCase(),
        birthday: userDate,

        getLogin: function() {
            console.log(this.firstName[0] + this.lastName);
        },

        getAge: function() {
            age = (Date.now() - this.birthday) / (365 * 24 * 60 * 60 * 1000);
            console.log(Math.floor(age));
        },
        getPassword: function() {
            console.log(this.firstName[0].toUpperCase() + this.lastName + this.birthday.getFullYear());
        }
    };
    return newUser.getLogin(), newUser.getAge(), newUser.getPassword(); /* Якщо тут лишити "return newUser;" */
};
createNewUser();

// тоді викликати по черзі
// createNewUser().getLogin(); виводить результат
// createNewUser().getAge(); ігнорується
// createNewUser().getPassword(); ігнорується

// Чого будь-який перший виводить, а інші мертві?