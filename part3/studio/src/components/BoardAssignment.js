import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      { label: "Fish dishes",
       value: "Fish dishes"},
      { label: "Dinner",
       value: "Dinner"},
      { label: "Grilled dishes",
       value: "Grilled dishes"}
   ];
   
   const handleChange = (event) => {
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      { boards.map(() =><option value={boards.value}>{boards.label}</option>)
      }; 
      
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}