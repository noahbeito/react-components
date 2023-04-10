const App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['apples', 'bananas']}/>
  </div>
);


const GroceryList = (props) => (
    <ul>
      {props.items.map((item) => (
        <GroceryListItem item={item} />
      ))}
    </ul>
);

const GroceryListItem = (props) => (
    <li>{props.item}</li>
);


ReactDOM.render(<App />, document.getElementById('app'))