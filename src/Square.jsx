import { useState } from 'react';
const Square = ({value, onSquareClick}) => {
  // const [value, setValue] = useState(null);
  // When you call a set function in a component, React automatically updates the child components inside too.
  // function handleClick(){
  //   setValue('X');
  // }
  return (
     <button className="square" onClick={onSquareClick}>{value}</button>
  )
}
export default Square