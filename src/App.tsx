import React, {useMemo, useState} from 'react';
import Form from "./components/Form/Form";

function App() {
  const [items, setItems] = useState([
    {name: 'Bottle of water', price: 25, id: 1},
    {name: 'Milk', price: 40, id: 2},
    {name: 'Bread', price: 15, id: 3},
    {name: 'Dinner', price: 400, id: 4},
  ]);

  const onSubmit = (newItem:Item) => {
    setItems(prevState => [...prevState, newItem]);
  };

  const onDelete =  (id:number) => {
    setItems(prevState => prevState.filter(item => item.id !== id));

  };

  const totalPrice = useMemo(() => items.reduce((acc, item) => {
      return acc + item.price
    }, 0),[items]);

  return (
    <div className="container">
      <Form onSubmit={onSubmit}/>
      <div className="mt-4">
        {items.map(item => (
          <div key={item.id}
               className="card d-flex flex-row align-items-center align-content-center mb-2 justify-content-between">
            <span className="ms-2">{item.name}</span>
            <span className="d-flex align-items-center">
              <strong className="me-3">{item.price} KGZ</strong>
              <button onClick={() => onDelete(item.id)} className="btn btn-danger">Delete</button>
            </span>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <strong>Total price: {totalPrice} KGZ</strong>
      </div>
    </div>

  );
}

export default App;
