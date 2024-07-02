import React, { useState } from "react";
import data from './data';
import Tours from './components/Tours';

const App = () => {

  const [tours, setTours] = useState(data);

  function removeHandler(id){
    const newTours = tours.filter(tour => tour.id != id)
    setTours(newTours);
  }


  if(tours.length ===  0){
    return(
      <div className="refresh-page">
        <p >No Tours Left</p>
        <button className="btn-white" onClick={() => setTours(data)}>Refresh</button>
      </div>
    )     
  }
  return (
    <div>
      <Tours removeHandler = {removeHandler} tours = {tours}/>
    </div>
  );
};

export default App;
