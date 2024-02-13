const http = require('node:http');

const server = http.createServer(requestListener);

const users = [{ id: 1 }, { id: 2 }];

// функція - обробник запиту від клієнту
function requestListener(request, response) {
  // console.log(request); // запит
  // console.log(response); // відповідь

  console.log(request.method); // метод запиту
  console.log(request.url); // шлях запиту

  if (request.method === 'GET') {
    if (request.url === '/users') {
      response.end(JSON.stringify(users));
      return;
    }

    if (request.url === '/orders') {
      response.end('no orders now');
      return;
    }
  } else if (request.method === 'POST') {

    if(request.url === '/users') {
      let jsonString = '';

      request.on('data', (chunk) => {
        jsonString += chunk;
      });

      request.on('end', () => {
        const newUser = JSON.parse(jsonString);

        newUser.id = Date.now();

        users.push(newUser);

        return response.end(JSON.stringify(newUser));
      })
    }
  }

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
