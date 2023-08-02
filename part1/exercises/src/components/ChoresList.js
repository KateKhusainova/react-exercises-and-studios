import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (
   <div className={classes.choresAllText}>
      <h3 className={classes.choresHeading}>My Chores</h3>
      <ol className={classes.choresText}>
         <li>Read the book</li>
         <li>Brush my teeth</li>
         <li>Wash the dishes</li>
      </ol>
   </div>
   );
}