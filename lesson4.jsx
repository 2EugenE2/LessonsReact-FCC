/* Редактор коду має простий компонент JSX. 
Використовуйте метод ReactDOM.render(), 
для того щоб візуалізувати цей компонент на сторінку.
 Ви можете передавати визначені JSX елементи безпосередньо як перший аргумент
  і використовувати document.getElementById() для того,
   щоб вибрати DOM вузол для їх відображення.
    Також є div with id='challenge-node' який доступний вам для використання.
     Переконайтеся, що ви не змінили сталу JSX.*/

const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p> 
  </div>
);
ReactDOM.render(JSX, document.getElementById('challenge-node'));
// Змініть код під цим рядком