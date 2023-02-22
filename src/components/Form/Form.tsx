import React, {useState} from 'react';

interface Props {
  onSubmit:(data:Item) => void
}
const Form:React.FC<Props> = ({onSubmit}) => {
  const [name, setName] = useState ('');
  const [price, setPrice] = useState('');

  const onFormSubmit = (event:React.FormEvent) => {
    event.preventDefault()
    onSubmit({
      name,
        price:parseInt(price),
      id:Math.random()
    });
    setName('');
    setPrice('')
  };
  return (
    <div>
      <form onSubmit={onFormSubmit} className=" gap-2 d-flex flex-row">
        <input className="form-control flex" value={name} onChange={e => setName(e.target.value)}/>
        <div className="input-group">
          <input className="form-control" type="number" value={price} onChange={e => setPrice(e.target.value)}/>
          <span className="input-group-text">KGZ</span>
        </div>
        <button type={"submit"} className="btn btn-primary">Add</button>
      </form>
    </div>
  );
};

export default Form;