import React, { useState } from 'react';



const AddEntryForm = (props) => {

  const [weight, setWeight] = useState(0);
  const [date,setDate] = useState('');

  function handleSubmit(event){
    event.preventDefault(); //prevent page from refreshing
    let newEntry = {
      weight: weight,
      date: date
    };
    console.log(newEntry);
    props.AddNewEntry(newEntry)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Weight</label>
      <input type="number" value={weight} onChange={(event)=> setWeight(parseFloat(event.target.value))}/>
      <label>Date</label>
      <input type="date" value={date} onChange={(event)=> setDate(event.target.value)}/>
      <button type='submit'>Add</button>
    </form>
    );
}
 
export default AddEntryForm;