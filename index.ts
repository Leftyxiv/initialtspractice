import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const { id, title, completed } = response.data as todo;
  console.log(`
  id: ${id}
  title: ${title}
  completed: ${completed}
  `);
}).catch(error => {
  console.log(error);
});