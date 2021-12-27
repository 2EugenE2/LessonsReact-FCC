/*У редакторі коду є два функціональні компоненти - TypesOfFruit та Fruits. 
Візьміть компонент TypesOfFruit та вкладіть або nest його у компонент Fruits. 
Потім візьміть компонент Fruits та вкладіть його у компонент TypesOfFood.
 У результаті має вийти дочірній компонент, вкладений у батьківський компонент,
  що вкладений у власний батьківській компонент!*/

  const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        { /* Змініть код під цим рядком */ }
  <TypesOfFruit />
        { /* Змініть код над цим рядком */ }
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Змініть код під цим рядком */ }
  <Fruits />
          { /* Змініть код над цим рядком */ }
        </div>
      );
    }
  };