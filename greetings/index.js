const moment = require('moment');
const greeting = {
    "en": "Hello",
    "fr": "Bonjour",
    "hi": "Namaste",
    "es": "Hola",
    "pt": "Ola",
    "it": "Ciao"
};
exports.handler = async (event, context) => {
    let name = event.pathParameter.name;
    let {lang, ...info} = event.queryStringParameters;

    let message = `${greeting[lang]? greeting[lang] : greeting['en']} ${name}`;
    let response = {
        message: message,
        info: info,
        timestamp: moment().unix()
    };
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
};

// const resizeImage = (data) => new Promise((resolve, reject) => {
//     if (error) {
//         reject(error);
//     } else {
//         resolve(result);
//     }
// });
