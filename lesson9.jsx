/*У редакторі коду є простий функціональний компонент, 
який називається ChildComponent і компонент класу, 
який називається ParentComponent. Складіть їх обидвох разом,
 використовуючи відображення ChildComponent всередині ParentComponent. 
 Пересвідчіться, що закрили тег ChildComponent за допомогою навскісної риски перед ним.
Note: ChildComponent визначається за допомогою функції стрілки ES6, 
тому що це досить поширена практика під час використання React. Проте, знайте,
 що це - просто функція. Якщо ви не знайомі з синтаксисом функції зі стрілками, 
 будь ласка, зверніться до розділу JavaScript.*/


const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Змініть код під цим рядком */ }
<ChildComponent />

        { /* Змініть код над цим рядком */ }
      </div>
    );
  }
};