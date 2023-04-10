
const GroceryList = () => (
    <div>
      <GroceryListItem items={['apples', 'bananas']}/>
    </div>
);

const GroceryListItem = (props) => (
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
  </ul>
);


ReactDOM.render(<GroceryList />, document.getElementById('app'))