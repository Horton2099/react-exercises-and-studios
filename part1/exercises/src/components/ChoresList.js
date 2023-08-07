import classes from './ChoresList.module.css';

export default function ChoresList () {
   return <p>
      <h1  className = {classes.choresHeading}>List of Chores</h1>
      <ul className = {classes.choresText}>
         <li>Sweep</li>
         <li>mop</li>
         <li>mow lawn</li>
      </ul>
   </p>;
}