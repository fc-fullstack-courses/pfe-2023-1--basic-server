const http = require('node:http');

const server = http.createServer(requestListener);

// функція - обробник запиту від клієнту 
function requestListener (request, response) {
  console.log(request); // запит
  console.log(response); // відповідь

  // відповідь на запит
  // має обов'язково бути присутня
  response.end('<h1>hello from server</h1>');
}

/*
  приймає:
  порт
  хост (доменне ім'я)
*/
const PORT = 3000;

// запуск сервера на 3000 порті
server.listen(PORT);