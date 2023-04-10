const { useState } = React;

const App = () => {

  return (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['apples', 'bananas', 'bread', 'rice']}/>
  </div>
  )
};


const GroceryList = (props) => (
    <ul>
      {props.items.map((item) => (
        <GroceryListItem item={item} />
      ))}
    </ul>
);

const GroceryListItem = (props) => {
  const [isBold, setBold] = useState(false);

  const style = {
    fontWeight: isBold ? 'bold' : 'normal'
  }

  return (
    <li style={style} onMouseEnter={() => setBold(true)} onMouseLeave={() => setBold(false)}>{props.item}</li>
  )
};



ReactDOM.render(<App />, document.getElementById('app'));