import { RecipeInfo } from "./RecipeInfo"
import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';
import { BsAlarm } from 'react-icons/bs';

export const Recipe = ({image, name, time, servings, calories}) => {
    return <>
        <img src={image} alt={name} width={400} />
        <h3>{name}</h3>
        <ul>
            <RecipeInfo info={`${time} min`} icon={ BsAlarm} />
        <RecipeInfo info={`${servings} servings`} icon={HiOutlineChartPie }/>
        <RecipeInfo info={`${calories} calories`} icon={ HiOutlineChartBar }/>
    </ul>
        </>
}