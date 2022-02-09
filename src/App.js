import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries'
import AddEntryForm from './Components/AddEntry/AddEntryForm'
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';

function App() {

  const[entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}, {weight: 176, date: '11-24-2021'}] )

  function addNewEntry(entry){
    
    let tempEntries = [ ...entries, entry];

    setEntries(tempEntries);
  }

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm AddNewEntry={addNewEntry}/> 
      <EntriesChartTracker parentEntries={entries}/>

    </div>
  );
}

export default App;
