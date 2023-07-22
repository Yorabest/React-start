// import painting from '../painting.json';
// import { GallaryItem } from './GalaryItem/GallaryItem';
// import { GalleryList } from './GalleryList/GalleryList';
// import { Container } from './Container/Container';

// const item = painting[0]
import recipes from '../recipies.json';
import { RecipesList } from './RecipesList/RecipesList';
export function App() {
    return (
      <>
        <RecipesList recipes={recipes} />
      {/* <Container title="Title">
        <GalleryList items={painting} />
        </Container> */}
      </>
)
}
