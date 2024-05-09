import React, { useState } from 'react';
import Header from './Header';
import Events from './Events';
import PlanButton from './PlanButton';
import PlanDay from './PlanDay';

function App(){
  const [plannerClicked, setPlannerClicked] = useState(false); 

  const handleClick = (event) =>{
    setPlannerClicked(true);
  }

  return (
    <>
      <Header />
      <div className="home" style={{ display: plannerClicked ? "none" : "block", float: "inherit" }}>
        <Events />
        <div type="button" onClick={handleClick}><PlanButton /></div>
      </div>  
      <div className="planday" style={{ display: plannerClicked ? "block" : "none" }}>
        <PlanDay />
      </div>
    </>

  )
}

export default App
