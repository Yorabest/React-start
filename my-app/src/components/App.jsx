import recipes from '../recipies.json';
import { RecipesList } from './RecipesList/RecipesList';
import {
  GlobalStyle
} from './GlobalStyles';
// import { Counter } from './Counter/Counter';
// import { Dropdown } from './Dropdown/Dropdown';
export function App() {
    return (
      <>
        <GlobalStyle />
        {/* <Dropdown/> */}
        <RecipesList recipes={recipes}/> 
        {/* {/* <Counter initivalValue={0}/>} */}
      </>
)
}
