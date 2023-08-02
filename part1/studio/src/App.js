//import logo from './logo.svg';
import './App.css';
import RecipeDescription from './components/Description.js'
import RecipeIngredients from './components/Ingredients.js'

function App() {
  return (
    <div className="App">
      <div>
      <RecipeDescription />
      <RecipeIngredients />
      </div>
    </div>
  );
}

export default App;
