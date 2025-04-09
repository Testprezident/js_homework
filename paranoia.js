var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro+-_porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var re = /^[a-zA-Z0-9._%+-]+@(gmail.com|yahoo.com)$/

function trueEmail(user) {
    return re.test(user.email);
}

function arrEm(user) {
    return user.email;
}

var result = arr.filter(trueEmail).map(arrEm);

console.log(result);