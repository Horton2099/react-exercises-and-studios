import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{label: "Food Truck"}, {label: "Hispanic Classics"}, {label: "Festival Foods"}];

   const [boardName, setBoardName] = useState("no boards yet!");

   const handleChange = (event) => {
         setBoardName(event.target.value);
         // Check Later
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board) => (
           <option value={board.value} key={board.value}>{board.label}</option> 
         ))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}