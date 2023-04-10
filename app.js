const GroceryList = () => (
    <ul>
      <Apples />
      <Bananas />
    </ul>
);

const Apples = () => (
  <li>apples</li>
);

const Bananas = () => (
  <li>bananas</li>
);


ReactDOM.render(<GroceryList />, document.getElementById('app'))